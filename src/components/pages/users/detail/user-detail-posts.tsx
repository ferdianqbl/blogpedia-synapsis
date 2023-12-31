"use client";

import PostCard from "@/components/post-card";
import { PostType, getUserPosts } from "@/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import UsersLoading from "../users-loading";
import { useUserNewPost } from "@/lib/context/user-new-post";

const UserDetailPosts = ({ userId }: { userId: string | number }) => {
  const [data, setData] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { addUserNewPostButton } = useUserNewPost();

  const getData = async () => {
    setLoading(true);
    const res = await getUserPosts(userId);
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [userId, addUserNewPostButton]);

  if (loading) return <UsersLoading />;

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
