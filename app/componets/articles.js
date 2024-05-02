'use client';

import { useState } from "react";
import Article from "./article";

export default function Articles({ articles }) {
    const [ct, setCt] = useState(3)

    const hanldeClick = () => {
        setCt(prev => prev += 3)
    }

    return (
        <div className="mt-5 text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-full" >
            <h2 className="font-bold text-xl px-4">What&apos;s happening</h2>
            <div className="space-y-5">
                {articles.slice(0, ct).map((article) => (
                    <Article key={article} article={article} />
                ))}
            </div>
            <button className="text-blue-300 pl-4 pb-3 hover:text-blue-400" onClick={hanldeClick}>Show more</button>
        </div>
    )
}