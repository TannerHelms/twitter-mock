'use client'

import { useEffect, useRef } from "react";
import { CiImageOn } from "react-icons/ci";

export default function ImagePicker({ setPickedImage, state }) {
    const imageInput = useRef()

    const handleClick = () => {a
        imageInput.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null);
            return
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
        fileReader.readAsDataURL(file)
    }

    useEffect(() => {
        if (state.suceess) {
            setPickedImage(null)
            imageInput.current.value = null
        }
    }, [state])

    return (
        <div className="hover:bg-sky-100 rounded-full cursor-pointer size-10 flex items-center justify-center" onClick={handleClick}>

            <input
                className="hidden"
                type="file"
                id="image"
                accept="image/png, image/jpeg"
                name="image"
                ref={imageInput}
                onChange={handleImageChange}
            />
            <button type="button" className="p-0">
                <CiImageOn className="h-6 w-6 text-sky-500" />
            </button>
        </div>
    )
}