import SidebarMenuIcon from "@/app/componets/sidebar-menu-icon";
import Image from "next/image";
import { FaHashtag, FaRegBell } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { GoInbox } from "react-icons/go";
import { IoBookmarkOutline, IoClipboardOutline, IoHomeSharp } from "react-icons/io5";
import { PiDotsThreeCircleLight } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const links = [
    { text: "Home", Icon: IoHomeSharp, active: true },
    { text: "Explore", Icon: FaHashtag },
    { text: "Notifications", Icon: FaRegBell },
    { text: "Messages", Icon: GoInbox },
    { text: "Bookmarks", Icon: IoBookmarkOutline },
    { text: "Lists", Icon: IoClipboardOutline },
    { text: "Profile", Icon: FiUser },
    { text: "More", Icon: PiDotsThreeCircleLight },

]

export default function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col p-2 lg:items-start fixed h-full lg:ml-[20px]">
            {/* Twitter Logo  */}
            <div className="hoverEffect flex items-center justify-center px-0 py-0 rounded-full w-16 h-16 hover:bg-blue-200">
                <Image className="my-auto" width={40} height={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/584px-Logo_of_Twitter.svg.png" />
            </div>

            {/* Menu  */}
            <div className="mt-4">
                {links.map((link) => (
                    <SidebarMenuIcon key={link} text={link.text} Icon={link.Icon} active={link.active} />
                ))}
            </div>

            {/* Button  */}
            <button className="btn-blue hidden lg:inline my-2.5">Tweet</button>

            {/* Mini-Profile  */}
            <div className="hoverEffect text-grey-700 flex items-center justify-center lg:justify-start mt-auto">
                <Image className="rounded-full" width={50} height={50} src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png" />
                <div className="leading-5 ml-3 hidden lg:inline">
                    <h4 className="font-bold">Tanner Helms</h4>
                    <p className="text-gray-500">@tanner.helms</p>
                </div>
                <div className="ml-8 hidden lg:inline">
                    <HiOutlineDotsHorizontal />
                </div>
            </div>
        </div>
    )
}