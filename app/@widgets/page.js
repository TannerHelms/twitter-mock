import { getNews } from "@/lib/widget";
import { CiSearch } from "react-icons/ci";
import Articles from "../componets/articles";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

async function ArticleContent() {
    const { articles } = await getNews();
    return <Articles articles={articles} />
}

export default async function WidgetsPage() {
    return (
        <div className="w-[250px] hidden lg:inline ml-8 sapce-y-5">
            {/* Search Bar */}
            <div className="w-[100%] sticky top-0 bg-white py-2 z-50">
                <div className="flex items-center p-3 rounded-full relative ">
                    <CiSearch className="size-5 z-50 text-gray-500" />
                    <input type="text" placeholder="Search Twitter" className="absolute bg-gray-100 inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white " />
                </div>
            </div>
            <Suspense fallback={null}>
                <ArticleContent />
            </Suspense>
        </div >
    )
}



