import { getPost } from "@/actions/posts";
import { auth } from "@/app/api/auth/[...nextauth]/route";
import Post from "@/app/componets/post";
import PostDetailComments from "@/app/componets/post-detail-comments";

export default async function PostPage({ params }) {
    const session = await auth();
    const post = await getPost(params.ref)

    return (
        <div className="divide-y divide-gray-200">

            <Post post={post} user={session.user} detail={true} />
            <PostDetailComments post={post} user={session.user} />
        </div>
    )
}