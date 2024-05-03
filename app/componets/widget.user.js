import Image from "next/image"

export default function WidgetUser({ user }) {
    return (
        <div className="flex justify-between items-center px-3 py-3 hover:bg-gray-200 transition duration-500 ease-out">
            {/* User Details */}
            <div className="flex gap-1 items-center">
                <Image className="rounded-full" width={50} height={50} src={user.picture.thumbnail} alt="user thumbnail" />
                <div className="space-y-1">
                    <p className="text-sm font-bold hover:underline cursor-pointer">{user.login.username}</p>
                    <p className="text-xs text-gray-500">{user.name.first} {user.name.last}</p>
                </div>
            </div>
            {/* Follow Button */}
            <button className="btn-blue w-16 h-8 text-sm px-0 py-0">Follow</button>
        </div>
    )
}