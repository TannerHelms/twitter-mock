'use client'

import { MdOutlineEmojiEmotions } from "react-icons/md";
import FormSubmit from "./form-submit";
import ImagePicker from "./image-picker";

export default function PostFormClient({ state }) {

    return (
        <div>
            <div className="flex justify-between pt-3 items-center">
                <div className="flex space-x-3">
                    <ImagePicker />
                    <div className="hover:bg-sky-100 rounded-full cursor-pointer size-10 flex items-center justify-center">
                        <MdOutlineEmojiEmotions className="h-6 w-6 text-sky-500" />
                    </div>
                </div>
                {state.error && <p className="text-red-500">{state.error}</p>}
                <FormSubmit />
            </div>
        </div>
    )
}