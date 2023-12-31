"use client";
import PostCard from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { PostType, getAllPosts } from "@/lib/api";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const AllPosts = () => {
  const [posts, setPosts] = useState<PostType[] | []>([]);
  const [isNextPage, setIsNextPage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const getAllData = async () => {
    setLoading(true);
    const res = await getAllPosts({
      page,
      per_page: 10,
    });
    const nextPage = await getAllPosts({
      page: page + 1,
      per_page: 10,
    });
    setIsNextPage(nextPage.data.length > 0);
    setPosts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllData();
  }, [page]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
        <Skeleton className="h-screen max-h-[150px] w-full rounded-md" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-end gap-2">
        {page > 1 && (
          <Button variant={"ghost"} onClick={() => setPage(page - 1)}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
        )}

        {page - 1 >= 1 && (
          <Button variant={"ghost"} onClick={() => setPage(page - 1)}>
            {page - 1}
          </Button>
        )}
        <p className="h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background bg-accent text-accent-foreground">
          {page}
        </p>

        {isNextPage && (
          <Button variant={"ghost"} onClick={() => setPage(page + 1)}>
            {page + 1}
          </Button>
        )}

        {isNextPage && (
          <Button variant={"ghost"} onClick={() => setPage(page + 1)}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        )}
      </div>
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
      <div className="flex items-center justify-end gap-2">
        {page > 1 && (
          <Button variant={"ghost"} onClick={() => setPage(page - 1)}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
        )}

        {page - 1 >= 1 && (
          <Button variant={"ghost"} onClick={() => setPage(page - 1)}>
            {page - 1}
          </Button>
        )}
        <p className="h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background bg-accent text-accent-foreground">
          {page}
        </p>

        {isNextPage && (
          <Button variant={"ghost"} onClick={() => setPage(page + 1)}>
            {page + 1}
          </Button>
        )}

        {isNextPage && (
          <Button variant={"ghost"} onClick={() => setPage(page + 1)}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default AllPosts;
