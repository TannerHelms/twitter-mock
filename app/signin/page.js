import ProviderButton from "@/app/componets/provider-button";
import { getProviders } from "next-auth/react"
import Image from "next/image";

export default async function SigninPage() {
    const providers = await getProviders();
    return (
        <div className="flex justify-center mt-20 items-center">
            <div className="relative w-80 h-80 hidden sm:inline">
                <Image className="h-60 hidden sm:inline object-cover sm:w-44 sm:h-80" fill src="https://betelgeusetech.com/wp-content/uploads/2021/05/ch-2-7-app-store.png.twimg_.1920.png" alt="Twitter Image" />
            </div>
            <div className='flex flex-col items-center space-y-4'>
                <Image alt="twitter logo" className="my-auto" width={130} height={130} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/584px-Logo_of_Twitter.svg.png" />
                {Object.values(providers).map((provider) => (
                    <ProviderButton key={provider.name} provider={provider} />
                ))}
            </div>
        </div>
    )
}



