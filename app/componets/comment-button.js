'use client'
import { Divider, Modal, Timeline } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { useRef } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import PostFormClient from "./post-form-client";

const comments = [
    {
        username: "tannerhelms",
        name: "Tanner Helms",
        timeAgo: "5 Days ago",
        content: 'this is comment'
    },
    {
        username: "johnsmith",
        name: "John Smith",
        timeAgo: "2 Days ago",
        content: 'Great post!'
    },
    {
        username: "janedoe",
        name: "Jane Doe",
        timeAgo: "1 Day ago",
        content: 'I completely agree!'
    }
]

export function CommentButton({ post, user }) {
    const [opened, { open, close }] = useDisclosure(false);
    const textareaRef = useRef()
    return (
        <>
            <Modal opened={opened} onClose={close} withCloseButton={false} padding={0}>
                <div className="flex flex-col">
                    <div className="py-3 px-5">
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
                                        <div className="flex space-x-3">
                                            <h4 className="font-bold">{comment.name}</h4>
                                            <p className="text-gray-500">@{comment.username}<span className="text-gray-500"> · {comment.timeAgo}</span></p>
                                        </div>
                                    )}
                                    bullet={
                                        <div className="absoltue p-0 m-0">
                                            <Image className="rounded-full" src={user.image} fill />
                                        </div>
                                    }
                                >
                                    <h1>{comment.content}</h1>
                                </Timeline.Item>
                            ))}
                            <Timeline.Item
                                title={(
                                    <form className="w-full">
                                        <div className="w-full divide-y divide-gray-200">
                                            <textarea name="content" ref={textareaRef} className="p-0 w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" cols="30" rows="2" placeholder="What's happening?"></textarea>
                                            <PostFormClient state={{ error: null }} comment={true} />
                                        </div>
                                    </form>
                                )}
                                bullet={
                                    <div className="absoltue p-0 m-0">
                                        <Image className="rounded-full" src={user.image} fill />
                                    </div>
                                }
                            >
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </Modal>
            <div className="p-2 rounded-full hover:bg-sky-100 cursor-pointer hover:text-sky-500" onClick={open}>
                <FaRegCommentDots className="size-7 w-9 " />
            </div>
        </>
    )
}