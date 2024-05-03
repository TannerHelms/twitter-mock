import { Avatar, Divider, Modal, Timeline } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const comments = [
    {
        username: "tannerhelms",
        name: "Tanner Helms",
        timeAgo: "5 Days ago",
        content: 'this is comment'
    },
    {
        username: "johnsmith",
        name: "John Smith",
        timeAgo: "2 Days ago",
        content: 'Great post!'
    },
    {
        username: "janedoe",
        name: "Jane Doe",
        timeAgo: "1 Day ago",
        content: 'I completely agree!'
    }
]

export function CommentButton({ post, user }) {
    const [opened, { open, close }] = useDisclosure(false);
    console.log(user)
    return (
        <>
            <Modal opened={opened} onClose={close} withCloseButton={false} padding={0}>
                <div className="flex flex-col">
                    <div className="py-3 px-5">
                        <div className="hover:bg-gray-200 flex items-center justify-center rounded-full p-2 w-fit cursor-pointer">
                            <IoMdClose size="30px" />
                        </div>
                    </div>
                    <Divider />
                    <div className="py-3 px-5">
                        <Timeline bulletSize={24}>
                            {comments.map((comment, index) => (
                                <Timeline.Item
                                    key={index}
                                    title={(
                                        <div className="flex space-x-3">
                                            <h4 className="font-bold">{comment.name}</h4>
                                            <p className="text-gray-500">@{comment.username}<span className="text-gray-500"> · {comment.timeAgo}</span></p>
                                        </div>
                                    )}
                                    bullet={
                                        <Avatar
                                            size={22}
                                            radius="xl"
                                            src={user.image}
                                            alt="user thumbnail"
                                        />
                                    }
                                >
                                    <h1>{comment.content}</h1>
                                </Timeline.Item>
                            ))}
                        </Timeline>
                    </div>
                </div>
            </Modal>
            <div className="p-2 rounded-full hover:bg-sky-100 cursor-pointer hover:text-sky-500" onClick={open}>
                <FaRegCommentDots className="size-7 w-9 " />
            </div>
        </>
    )
}