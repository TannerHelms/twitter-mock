'use client'

import CreatePost from "@/actions/posts";
import Image from "next/image";
import { useFormState } from 'react-dom';
import { MdOutlineEmojiEmotions } from "react-icons/md";
import FormSubmit from "./form-submit";
import ImagePicker from './image-picker';
export default function PostForm({ user }) {
    const [state, formAction] = useFormState(CreatePost, {})
    return (
        <div className="flex space-x-4 border-b border-gray-200 p-3">
            <Image className="rounded-full h-11 w-11 cursor-pointer hover:brightness-95" width={50} height={50} src={user.image} alt="Profile Picture" />
            <form className="w-full" action={formAction}>
                <div className="w-full divide-y divide-gray-200">
                    <textarea name="content" className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" cols="30" rows="2" placeholder="What's happening?"></textarea>
                    <div className="flex justify-between pt-3 items-center">

                        <div className="flex space-x-3">
                            <div className="hover:bg-sky-100 rounded-full cursor-pointer size-10 flex items-center justify-center">
                                <ImagePicker />
                            </div>
                            <div className="hover:bg-sky-100 rounded-full cursor-pointer size-10 flex items-center justify-center">
                                <MdOutlineEmojiEmotions className="h-6 w-6 text-sky-500" />
                            </div>
                        </div>
                        {state.error && <p className="text-red-500">{state.error}</p>}
                        <FormSubmit />
                    </div>
                </div>
            </form>
        </div>
    )
}