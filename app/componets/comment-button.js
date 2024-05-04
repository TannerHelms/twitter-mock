'use client'
import { Divider, Modal, Timeline } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import PostFormClient from "./post-form-client";
import { useFormState } from 'react-dom'
import { createComment } from "@/actions/posts";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import dayjs from "dayjs";


export function CommentButton({ post, user }) {
    const [state, formAction] = useFormState(createComment.bind(null, [post.ref, user.uid]), {})
    const [opened, { open, close }] = useDisclosure(false);
    const textareaRef = useRef()
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
            <Modal opened={opened} onClose={close} withCloseButton={false} padding={0}>
                <div className="flex flex-col">
                    <div className="px-3">
                        <div className="hover:bg-gray-200 flex items-center justify-center rounded-full p-2 w-fit cursor-pointer">
                            <IoMdClose size="30px" />
                        </div>
                    </div>
                    <Divider />
                    <div className="py-3 px-5">
                        <Timeline bulletSize={30}>
                            {comments.map((comment, index) => (
                                <Timeline.Item
                                    key={index}
                                    title={(
                                        <div className="flex space-x-1 text-sm">
                                            <h4 className="font-bold">{comment.name}</h4>
                                            <p className="text-gray-500">@{comment.username}<span className="text-gray-500"> · {comment.timeAgo}</span></p>

                                        </div>
                                    )}
                                    bullet={
                                        <Image className="rounded-full" src={comment.profileImg} height={30} width={30} alt="user profile" />
                                    }
                                >
                                    <div className="flex flex-col space-y-2">
                                        <h1>{comment.content}</h1>
                                        {comment.image && (
                                            <div className="relative h-52 rounded-xl">
                                                <Image className="object-scale-down" src={comment.image} fill alt="comment image" />
                                            </div>
                                        )}
                                    </div>
                                </Timeline.Item>
                            ))}
                            <div className="">

                                <Timeline.Item
                                    title={(
                                        <form className="w-full mt-4" action={formAction}>
                                            <div className="w-full divide-y divide-gray-200">
                                                <textarea name="content" ref={textareaRef} className="p-0 w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" cols="30" rows="2" placeholder="What's happening?"></textarea>
                                                <PostFormClient state={state} comment={true} />
                                            </div>
                                        </form>
                                    )}
                                    bullet={
                                        <div className="absoltue p-0 m-0">
                                            <Image className="rounded-full" src={user.image} height={30} width={30} alt="comment on post" />
                                        </div>
                                    }
                                >
                                </Timeline.Item>
                            </div>
                        </Timeline>
                    </div>
                </div>
            </Modal>
            <div className="p-2 rounded-full hover:bg-sky-100 cursor-pointer hover:text-sky-500 flex space-x-1" onClick={open}>
                <FaRegCommentDots className="size-7 w-9 " />
                {comments.length > 0 && (
                    <span className="text-lg text-gray-500">{comments.length}</span>
                )}
            </div>
        </>
    )
}