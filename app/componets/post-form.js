'use client'


import Image from "next/image";
import { useFormState } from 'react-dom';
import PostFormClient from "./post-form-client";
import { createPost } from "@/actions/posts";
import { useEffect, useRef } from "react";
import { notifications } from "@mantine/notifications";
import { HiOutlineSparkles } from "react-icons/hi";
export default function PostForm({ user }) {
    const [state, formAction] = useFormState(createPost, {})
    const textareaRef = useRef()

    useEffect(() => {
        if (state.suceess) {
            textareaRef.current.value = ''
            notifications.show({
                title: 'Post Created',
                message: 'Your post has succesfuly been created!',
                color: 'teal',
                icon: <HiOutlineSparkles />
            })
        }
    }, [state])
    return (
        <div className="flex space-x-4 border-b border-gray-200 p-3">
            <Image className="rounded-full h-11 w-11 cursor-pointer hover:brightness-95" width={50} height={50} src={user.image} alt="Profile Picture" />
            <form className="w-full" action={formAction}>
                <div className="w-full divide-y divide-gray-200">
                    <textarea name="content" ref={textareaRef} className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" cols="30" rows="2" placeholder="What's happening?"></textarea>
                    <PostFormClient state={state} />
                </div>
            </form>
        </div>
    )
}

