'use server'

import { auth } from "@/app/api/auth/[...nextauth]/route"
import { db, storage } from "@/firebase"
import { addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"

export default async function CreatePost(prevState, formData) {
    const content = formData.get('content')
    const image = formData.get('image')

    if (content.trim().length === 0) return { error: "Message is required" }
    if (!image || image.size === 0) return { error: "Image is required" }

    const session = await auth();


    const docRef = await addDoc(collection(db, "posts"), {
        id: session.user.uid,
        text: content,
        timestamp: serverTimestamp(),
        name: session.user.name,
        username: session.user.username,
        profileImg: session.user.image,
    })

    const storageRef = ref(storage, 'posts/' + docRef.id);
    await uploadBytes(storageRef, image)
    const url = await getDownloadURL(storageRef);

    await updateDoc(docRef, {
        image: url
    })

    return { message: "Post created successfully" }
}