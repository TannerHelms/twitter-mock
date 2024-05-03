import Image from "next/image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegCommentDots } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi";
export default function Post({ post }) {
    return (
        <div className="p-3 flex items-start space-x-3">
            {/* Profile Image */}
            <div>
                <Image className="rounded-full" height={44} width={44} src={post.userImg} alt="post photo" />
            </div>
            <div className="w-full">
                <div className="flex justify-between">
                    {/* User Info */}
                    <div className="flex space-x-3">
                        <h4 className="font-bold">{post.name}</h4>
                        <p className="text-gray-500">{post.username} <span className="text-gray-500">· {post.timestamp}</span></p>
                    </div>
                    <div className="ml-8 hidden md:inline">
                        <HiOutlineDotsHorizontal />
                    </div>
                </div>
                {/* Post Text */}
                <p className="pl-1">{post.text}</p>
                {/* Post Image */}
                <div className="relative w-full h-full">
                    <Image
                        alt="post image"
                        className="rounded-xl"
                        src={post.img}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} // optional
                    />
                </div>
                {/* Post Icons */}
                <div className="flex justify-between p-2 text-gray-500">
                    <div className="p-2 rounded-full hover:bg-sky-100 cursor-pointer hover:text-sky-500">
                        <FaRegCommentDots className="size-7 w-9 " />
                    </div>
                    <div className="p-2 rounded-full hover:bg-red-100 cursor-pointer hover:text-red-600">
                        <FaRegTrashAlt className="size-7 w-9" />
                    </div>
                    <div className="p-2 rounded-full hover:bg-red-100 cursor-pointer hover:text-red-600">
                        <FaRegHeart className="size-7 w-9" />
                    </div>
                    <div className="p-2 rounded-full hover:bg-sky-100 cursor-pointer hover:text-sky-500">
                        <IoShareSocialOutline className="size-7 w-9" />
                    </div>
                    <div className="p-2 rounded-full hover:bg-sky-100 cursor-pointer hover:text-sky-500">
                        <HiOutlineChartBar className="size-7 w-9" />
                    </div>
                </div>
            </div>
        </div >
    )
}