import { HiOutlineSparkles } from "react-icons/hi";
import PostForm from "../../componets/post-form";
import Post from "../../componets/posts";
import { auth } from "@/app/api/auth/[...nextauth]/route";

export default async function FeedPage() {
    const data = await auth()
    const user = data?.user || null;

    const posts = [
        {
            id: "1",
            name: "Tanner Helms",
            username: "@tanner.helms",
            userImg: "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png",
            img: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
            text: "nice view!",
            timestamp: "2 hours ago"
        },
        {
            id: "2",
            name: "Tanner Helms",
            username: "@tanner.helms",
            userImg: "https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png",
            img: "https://images.pexels.com/photos/1820563/pexels-photo-1820563.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "wow",
            timestamp: "2 days ago"
        }
    ]

    return (
        <div className="lg:ml-[300px] border-l border-r sm:ml-[73px] flex-grow  xl:max-w-[800px] xl:ml-[370px] border-gray-200">
            {/* header */}
            <div className="flex py-2 px-3 justify-between sticky items-center top-0 z-50 bg-white border-b border-grey border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
                <div className="hoverEffect flex items-center justify-center px-0 py-0 rounded-full w-9 h-9">
                    <HiOutlineSparkles className="h-7" />
                </div>
            </div>
            {/* input  */}
            {user && <PostForm user={user} />}
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}