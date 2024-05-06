'use client'
import { db } from '@/firebase'
import dayjs from 'dayjs'
import { collection, onSnapshot } from 'firebase/firestore'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function PostDetailComments({ post }) {
    const [comments, setComments] = useState(null)

    useEffect(() => {
        onSnapshot(
            collection(db, 'posts', post.ref, "comments"),
            (snapshot) => {
                var relativeTime = require('dayjs/plugin/relativeTime')
                dayjs.extend(relativeTime)

                let comments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                comments = comments.sort((a, b) => {
                    return new Date(b.timestamp.toDate()) - new Date(a.timestamp.toDate())
                })
                comments.forEach(comment => {
                    comment.timeAgo = dayjs(comment.timestamp.toDate()).fromNow()
                })
                setComments(comments)
            }
        )
    }, [db, post])

    if (comments === null) return null
    return (
        <>
            {comments.map((comment, index) => (
                <div key={index} className='p-4'>
                    <div className="flex space-x-1 text-sm ml-12">
                        <Image className="rounded-full" src={comment.profileImg} height={30} width={30} alt="user profile" />
                        <h4 className="font-bold">{comment.name}</h4>
                        <p className="text-gray-500">@{comment.username}<span className="text-gray-500"> · {comment.timeAgo}</span></p>

                    </div>
                    <div className="flex flex-col space-y-2 ml-12">
                        <h1>{comment.content}</h1>
                        {comment.image && (
                            <div className="relative h-52 rounded-xl">
                                <Image className="object-scale-down" src={comment.image} fill alt="comment image" />
                            </div>
                        )}
                    </div>
                </div>
            ))
            }
        </>
    )
}