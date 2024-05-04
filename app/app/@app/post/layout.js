import { HiOutlineSparkles } from "react-icons/hi";

export default function Layout({ children }) {
    return (
        <div className="lg:ml-[300px] border-l border-r sm:ml-[73px] flex-grow  xl:max-w-[650px] xl:ml-[370px] border-gray-200">
            {/* header */}
            <div className="flex py-2 px-3 justify-between sticky items-center top-0 z-50 bg-white border-b border-grey border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
                <div className="hoverEffect flex items-center justify-center px-0 py-0 rounded-full w-9 h-9">
                    <HiOutlineSparkles className="h-7" />
                </div>
            </div>
            {children}
        </div>
    )
}