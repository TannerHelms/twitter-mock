'use server'

import { auth } from "@/app/api/auth/[...nextauth]/route"
import { db, storage } from "@/firebase"
import dayjs from "dayjs"
import { query } from "express"
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, serverTimestamp, setDoc, updateDoc } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { revalidatePath } from "next/cache"
import { v4 as uuidv4 } from 'uuid';

export async function createPost(prevState, formData) {
    const content = formData.get('content')
    const image = formData.get('image')

    if (content.trim().length === 0) return { error: "Message is required" }
    if (!image || image.size === 0) return { error: "Image is required" }

    const session = await auth();

    const docRef = await addDoc(collection(db, "posts"), {
        id: uuidv4(),
        text: content,
        timestamp: serverTimestamp(),
        name: session.user.name,
        username: session.user.username,
        userId: session.user.uid,
        profileImg: session.user.image,
    })

    const storageRef = ref(storage, 'posts/' + docRef.id);
    await uploadBytes(storageRef, image)
    const url = await getDownloadURL(storageRef);

    await updateDoc(docRef, {
        image: url
    })
    revalidatePath('/app', 'layout')
    return { suceess: true }
}

export async function getPosts() {
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)
    const q = query(collection(db, "posts"), orderBy("timestamp", "asc"))
    const querySnapshot = await getDocs(collection(db, "posts"))
    let posts = []
    querySnapshot.forEach(async (doc) => {
        const data = doc.data()
        data.ref = doc.id
        data.timeAgo = dayjs(data.timestamp.toDate()).fromNow()
        posts.push(data)
    });

    posts = posts.sort((a, b) => {
        return new Date(b.timestamp.toDate()) - new Date(a.timestamp.toDate())
    })

    posts = posts.map((post) => {
        post.timestamp = null;
        return post;
    })

    return posts;
}


export async function likePost(id) {
    const session = await auth();
    await setDoc(doc(db, 'posts', id, "likes", session.user.uid), {
        username: session.user.username
    })
    return { success: true }
}

export async function unlikePost(id) {
    const session = await auth();
    await deleteDoc(doc(db, 'posts', id, "likes", session.user.uid), {
        username: session.user.username
    })
    return { success: true }
}

export async function deletePost(id, postUserId) {
    const session = await auth();
    if (session.user.uid === postUserId) {
        await deleteDoc(doc(db, 'posts', id))
        revalidatePath('/app', 'layout')
        return { success: true }
    }
    return { error: "You can only delete your own posts" }
}