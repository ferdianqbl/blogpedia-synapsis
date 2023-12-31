"use client";

import PostCard from "@/components/post-card";
import { PostType, deletePostById, getUserPosts } from "@/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import UsersLoading from "../users-loading";
import { useUserNewPost } from "@/lib/context/user-new-post";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const UserDetailPosts = ({ userId }: { userId: string | number }) => {
  const [data, setData] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { addUserNewPostButton } = useUserNewPost();
  const [deleteTrigger, setDeleteTrigger] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    const res = await getUserPosts(userId);
    setData(res.data);
    setLoading(false);
  };

  const deleteHandler = async (postId: string | number) => {
    await deletePostById(postId);
    setDeleteTrigger((prev) => !prev);
  };

  useEffect(() => {
    getData();
  }, [userId, addUserNewPostButton, deleteTrigger]);

  if (loading) return <UsersLoading />;

  return (
    <>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
          {data.map((post) => (
            <div className="flex flex-col gap-1" key={post.id}>
              <Link
                href={`/posts/${post.id}`}
                key={post.id}
                className="flex items-center justify-center w-full hover:scale-105 transition-all duration-300"
              >
                <PostCard data={post} key={post.id} />
              </Link>
              <Button
                size={"icon"}
                className="w-full bg-red-500 text-primary-foreground hover:bg-red-500/90"
                onClick={async () => await deleteHandler(post.id)}
              >
                <Trash className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No posts found.</p>
      )}
    </>
  );
};

export default UserDetailPosts;
