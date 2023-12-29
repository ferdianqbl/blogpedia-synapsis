"use client";

import PostCard from "@/components/post-card";
import { PostType, getAllPosts } from "@/lib/api";
import { randomNum } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomePostsList = () => {
  const [posts, setPosts] = useState<PostType[] | []>([]);

  const getAllData = async () => {
    const res = await getAllPosts({
      page: randomNum(1, 50),
      per_page: 5,
    });

    setPosts(res.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

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
