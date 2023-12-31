"use client";

import PostCard from "@/components/post-card";
import { Skeleton } from "@/components/ui/skeleton";
import { PostType, getAllPosts } from "@/lib/api";
import { randomNum } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomePostsList = () => {
  const [posts, setPosts] = useState<PostType[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getAllData = async () => {
    setLoading(true);
    const res = await getAllPosts({
      page: randomNum(1, 50),
      per_page: 5,
    });

    setPosts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        {posts.map((post) => (
          <Link
            href={`/posts/${post.id}`}
            key={post.id}
            className="flex items-center justify-center w-full hover:scale-105 transition-all duration-300"
          >
            <PostCard data={post} key={post.id} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePostsList;
