"use client"

import { AnimatePresence, motion } from "framer-motion";
import Post from "./post";

export function Posts({ posts, user }) {
    return (
        <>
            <AnimatePresence>
                {posts.map((post) => (
                    <motion.div
                        key={post.ref}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Post post={post} user={user} />
                    </motion.div>
                ))}
            </AnimatePresence >
        </>
    )
}