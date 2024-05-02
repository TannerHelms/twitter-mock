'use client'
import { signIn } from "next-auth/react";

export default function ProviderButton({ provider }) {
    return (
        <div key={provider.name}>
            <button className="btn-blue w-full" onClick={() => signIn(provider.id, { callbackUrl: "/app" })}>Sign in with {provider.name}</button>
        </div>
    )
}