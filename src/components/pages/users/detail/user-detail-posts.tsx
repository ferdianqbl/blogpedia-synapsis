import PostCard from "@/components/post-card";
import { PostType, getUserPosts } from "@/lib/api";
import Link from "next/link";

const UserDetailPosts = async ({ userId }: { userId: string | number }) => {
  const {
    data,
  }: {
    data: PostType[];
  } = await getUserPosts(userId);
  return (
    <>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
          {data.map((post) => (
            <Link
              href={`/posts/${post.id}`}
              key={post.id}
              className="flex items-center justify-center w-full hover:scale-105 transition-all duration-300"
            >
              <PostCard data={post} key={post.id} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No posts found.</p>
      )}
    </>
  );
};

export default UserDetailPosts;
