'use client'

import { signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

export default function SidebarMenuIcon({ text, active, children, link }) {
    const router = useRouter();
    const handleClick = () => {
        if (link === '/auth/signin') {
            signIn();
        } else if (link === '/auth/signout') {
            signOut();
        } else {
            router.replace(link)
        }
    }
    return (

        <div className="hoverEffect flex items-center text-gray-700 justify-center lg:justify-start text-lg gap-3" onClick={handleClick}>
            {children}
            <span className={`${active && 'font-bold'} hidden lg:inline`}>{text}</span>
        </div>

    )
}