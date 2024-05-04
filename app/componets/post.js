import Image from "next/image";
import { HiOutlineChartBar, HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoShareSocialOutline } from "react-icons/io5";
import { CommentButton } from "./comment-button";
import { DeletePostButton } from "./delete-post-button";
import { LikePost } from "./like-post";

export default function Post({ post, user }) {
    return (
        <div className="p-3 flex items-start space-x-3">
            {/* Profile Image */}
            <div>
                <Image className="rounded-full" height={44} width={44} src={post.profileImg} alt="post photo" />
            </div>
            <div className="w-full">
                <div className="flex justify-between">
                    {/* User Info */}
                    <div className="flex space-x-3">
                        <h4 className="font-bold">{post.name}</h4>
                        <p className="text-gray-500">@{post.username}<span className="text-gray-500"> · {post.timeAgo}</span></p>
                    </div>
                    <div className="ml-8 hidden md:inline">
                        <HiOutlineDotsHorizontal />
                    </div>
                </div>
                {/* Post Text */}
                <p className="pl-1">{post.text}</p>
                {/* Post Image */}
                <div className="relative w-full h-full mt-2">
                    <Image
                        alt="post image"
                        className="rounded-xl"
                        src={post.image}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} // optional
                    />
                </div>
                {/* Post Icons */}
                <div className={`flex ${user ? "justify-between" : "m-auto w-fit space-x-4"} p-2 text-gray-500`}>
                    {user && (
                        <CommentButton post={post} user={user} />
                    )}
                    {user && post.userId === user.uid && (
                        <DeletePostButton post={post} />
                    )}
                    {user && (
                        <LikePost post={post} />
                    )}
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





