'use client'

import { deletePost } from "@/actions/posts";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

export function DeletePostButton({ post }) {
    const [opened, { open, close }] = useDisclosure(false);
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        setLoading(true)
        await deletePost(post.ref, post.userId)
        notifications.show({
            title: 'Post deleted',
            message: 'Your post has successfully deleted!',
            color: 'red'
        })
        close()
        setLoading(false)
    }

    return (
        <>
            <Modal opened={opened} onClose={close} withCloseButton={false}>
                <div className="text-center space-x-3 p-2">
                    Are you sure that you want to delete your post?
                    <div className="mt-4 space-x-3 flex w-fit m-auto">
                        <button onClick={close} className="btn-blue w-20 h-8 p-0" disabled={loading}>Cancel</button>
                        {loading && (
                            <button className="btn-blue bg-red-500 w-20 h-8 p-0 flex items-center justify-center" disabled>
                                <span className="loading loading-infinity loading-sm" />
                            </button>
                        )}
                        {!loading && (
                            <button onClick={handleClick} className="btn-blue bg-red-500 w-20 h-8 p-0">Delete</button>
                        )}
                    </div>
                </div>
            </Modal>

            <div className="p-2 rounded-full hover:bg-red-100 cursor-pointer hover:text-red-600" onClick={open}>
                <FaRegTrashAlt className="size-7 w-9" />
            </div>
        </>
    )
}