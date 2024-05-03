'use client'

import { signIn } from "next-auth/react"

export default function SignInButton() {
    return (
        <button
            className="btn-blue hidden lg:inline my-2.5"
            onClick={() => signIn()}
        >
            Sign In
        </button>
    )
}