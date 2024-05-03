import { MdOutlineEmojiEmotions } from "react-icons/md";
import FormSubmit from "./form-submit";
import ImagePicker from "./image-picker";
import { useState } from "react";

export default function PostFormClient({ state, comment = false }) {
    const [pickedImage, setPickedImage] = useState(null)
    return (
        <div>

            {pickedImage && <img src={pickedImage} alt="Imaged selected by user" className={`object-cover rounded-xl h-[300px] m-auto mt-4 ${comment && 'h-[150px]'}`} />}
            <div className="flex justify-between pt-3 items-center">
                <div className="flex space-x-3">
                    <ImagePicker pickedImage={pickedImage} setPickedImage={setPickedImage} state={state} />
                    <div className="hover:bg-sky-100 rounded-full cursor-pointer size-10 flex items-center justify-center">
                        <MdOutlineEmojiEmotions className="h-6 w-6 text-sky-500" />
                    </div>
                </div>
                {state.error && <p className="text-red-500">{state.error}</p>}
                <FormSubmit comment={comment} />
            </div>
        </div >
    )
}