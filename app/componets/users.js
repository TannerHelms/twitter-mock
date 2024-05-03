'use client'
import { useState } from "react"
import WidgetUser from "./widget.user"
import { AnimatePresence, motion } from "framer-motion"

export default function Users({ users }) {
    const [ct, setCt] = useState(3)
    const hanldeClick = () => {
        setCt(prev => prev += 3)
    }

    return (
        <div className="mt-5 text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-full" >
            <h2 className="font-bold text-xl px-4">Who to follow</h2>
            <div className="">
                <AnimatePresence>
                    {users.slice(0, ct).map((user, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <WidgetUser user={user} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <button className="text-blue-300 pl-4 pb-3 hover:text-blue-400" onClick={hanldeClick}>Show more</button>
        </div>
    )

}