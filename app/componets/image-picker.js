'use client'

import { useRef, useState } from "react";
import { CiImageOn } from "react-icons/ci";

export default function ImagePicker() {
    const imageInput = useRef()
    const [pickedImage, setPickedImage] = useState(null)
    const handleClick = () => {
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

    return (
        <>
            <div>
                {pickedImage && <img src={pickedImage} alt="Imaged selected by user" />}
            </div>
            <input
                className="hidden"
                type="file"
                id="image"
                accept="image/png, image/jpeg"
                name="image"
                ref={imageInput}
                onChange={handleImageChange}
            />
            <button type="button" onClick={handleClick} className="p-0">
                <CiImageOn className="h-6 w-6 text-sky-500" />
            </button>
        </>
    )
}