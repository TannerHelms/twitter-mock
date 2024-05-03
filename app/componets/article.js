import Image from "next/image";

export default function Article({ article }) {
    return (
        <a href={article.url} target="_blank">
            <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200">
                <div className="space-y-0.5">
                    <h6 className="font-bold text-sm">{article.title.split("- ")[0]}</h6>
                    <p className="text-gray-500 font-semibold text-xs">{article.source.name}</p>
                </div>
                <Image className="rounded-xl" src={article.urlToImage} alt="article hero" width={70} height={70} />
            </div>
        </a>
    )
}