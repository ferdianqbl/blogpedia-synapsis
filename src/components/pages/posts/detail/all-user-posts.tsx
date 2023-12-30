import PostCard from "@/components/post-card";
import { PostType, getUserPosts } from "@/lib/api";
import Link from "next/link";

const AllUserPosts = async ({ userId }: { userId: string | number }) => {
  const {
    data,
  }: {
    data: PostType[];
  } = await getUserPosts(userId);
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">
            <span className="text-blue-600">All</span> Posts
          </h2>
          <small className="mb-4 text-gray-400">
            Find your favorite post from this creator.
          </small>
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
        </div>
      ) : (
        <p className="text-gray-400">No posts found.</p>
      )}
    </>
  );
};

export default AllUserPosts;
