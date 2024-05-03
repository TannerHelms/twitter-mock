import { auth } from "@/app/api/auth/[...nextauth]/route";
import SidebarMenuIcon from "@/app/componets/sidebar-menu-icon";
import SignInButton from "@/app/componets/sign-in-button";
import TweetButton from "@/app/componets/tweet-button";
import Image from "next/image";
import { FaHashtag, FaRegBell } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { GoInbox } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoBookmarkOutline, IoClipboardOutline, IoHomeSharp, IoLockClosedOutline } from "react-icons/io5";
import { PiDotsThreeCircleLight } from "react-icons/pi";
const links = [
    { text: "Home", Icon: IoHomeSharp, active: true, auth: false },
    { text: "Explore", Icon: FaHashtag, auth: false },
    { text: "Notifications", Icon: FaRegBell, auth: true },
    { text: "Messages", Icon: GoInbox, auth: true },
    { text: "Bookmarks", Icon: IoBookmarkOutline, auth: true },
    { text: "Lists", Icon: IoClipboardOutline, auth: true },
    { text: "Profile", Icon: FiUser, auth: true },
    { text: "More", Icon: PiDotsThreeCircleLight, auth: true },

]

export default async function Sidebar() {
    const data = await auth()
    const user = data?.user || null;
    return (
        <div className="hidden sm:flex flex-col p-2 lg:items-start fixed h-full lg:ml-[20px]">
            {/* Twitter Logo  */}
            <div className="hoverEffect flex items-center justify-center px-0 py-0 rounded-full w-16 h-16 hover:bg-blue-200">
                <Image alt="twitter logo" className="my-auto" width={40} height={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/584px-Logo_of_Twitter.svg.png" />
            </div>

            {/* Menu  */}
            <div className="mt-4">
                {links.map((link, index) => {
                    const Icon = link.Icon;
                    if (!link.auth || user) {
                        return <SidebarMenuIcon key={index} text={link.text} active={link.active}><Icon /></SidebarMenuIcon>
                    } else {
                        return undefined;
                    }
                })}
                {user && <SidebarMenuIcon text="Logout" active={false} link="/auth/signout"><IoLockClosedOutline /></SidebarMenuIcon>}
            </div>

            {/* Tweet / Sign In  */}
            {!user && <SignInButton />}
            {user && <TweetButton />}

            {/* Mini-Profile  */}
            {user && (
                <div className="hoverEffect text-grey-700 flex items-center justify-center lg:justify-start mt-auto">
                    <Image alt="user Profile" className="rounded-full" width={50} height={50} src={user.image} />
                    <div className="leading-5 ml-3 hidden lg:inline">
                        <h4 className="font-bold">{user.name}</h4>
                        <p className="text-gray-500">@{user.username}</p>
                    </div>
                    <div className="ml-8 hidden lg:inline">
                        <HiOutlineDotsHorizontal />
                    </div>
                </div>
            )}
        </div>
    )
}