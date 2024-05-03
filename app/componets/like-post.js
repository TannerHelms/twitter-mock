'use client'
import { likePost, unlikePost } from "@/actions/posts";
import { db } from "@/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export function LikePost({ post }) {
    const [hasLiked, setHasLiked] = useState(false)
    const [likes, setLikes] = useState(null)
    const { data: session } = useSession()


    const handleClick = () => {
        if (hasLiked) unlikePost(post.ref)
        if (!hasLiked) likePost(post.ref)
    }

    useEffect(() => {
        if (likes && session?.user) {
            setHasLiked(likes.findIndex((like) => like.id === session.user.uid) !== -1)
        }
    }, [likes, session])


    useEffect(() => {
        onSnapshot(
            collection(db, 'posts', post.ref, "likes"),
            (snapshot) => {
                const likes = snapshot.docs.map(doc => ({ id: doc.id, username: doc.data().username }))
                setLikes(likes)
            }
        )
    }, [db, post])

    if (session === null) return null

    return (
        <div className='p-2 rounded-full hover:bg-red-100 cursor-pointer hover:text-red-600 flex items-center' onClick={handleClick}>
            {hasLiked && <FaHeart className="size-7 w-9" color="red" fill="red" />}
            {!hasLiked && <FaRegHeart className="size-7 w-9" />}
            {likes?.length > 0 && <span className="text-lg text-gray-500 ml-2">{likes.length}</span>}
        </div>
    )
}

// ${hasLiked && 'bg-red-500'}