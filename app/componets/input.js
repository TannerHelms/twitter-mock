
import Image from "next/image";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { auth } from "../api/auth/[...nextauth]/route";
export default async function Input() {
    const data = await auth()
    const user = data?.user || null;
    return (
        <div className="flex space-x-4 border-b border-gray-200 p-3">
            <Image className="rounded-full h-11 w-11 cursor-pointer hover:brightness-95" width={50} height={50} src={user.image} alt="Profile Picture" />
            <div className="w-full divide-y divide-gray-200">
                <textarea name="content" className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700" cols="30" rows="2" placeholder="What's happening?"></textarea>
                <div className="flex justify-between pt-3">
                    <div className="flex space-x-3">
                        <div className="hover:bg-sky-100 p-2 rounded-full cursor-pointer">
                            <CiImageOn className="h-6 w-6 text-sky-500" />
                        </div>
                        <div className="hover:bg-sky-100 p-2 rounded-full cursor-pointer">
                            <MdOutlineEmojiEmotions className="h-6 w-6 text-sky-500" />
                        </div>
                    </div>
                    <button className="btn-blue w-20 h-8 p-0">Tweet</button>
                </div>
            </div>

        </div>
    )
}