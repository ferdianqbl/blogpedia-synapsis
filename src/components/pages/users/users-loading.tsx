import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const UsersLoading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
      <Skeleton className="h-screen max-h-[100px] w-full rounded-md" />
      <Skeleton className="h-screen max-h-[100px] w-full rounded-md" />
      <Skeleton className="h-screen max-h-[100px] w-full rounded-md" />
      <Skeleton className="h-screen max-h-[100px] w-full rounded-md" />
      <Skeleton className="h-screen max-h-[100px] w-full rounded-md" />
      <Skeleton className="h-screen max-h-[100px] w-full rounded-md" />
      <Skeleton className="h-screen max-h-[100px] w-full rounded-md" />
      <Skeleton className="h-screen max-h-[100px] w-full rounded-md" />
      <Skeleton className="h-screen max-h-[100px] w-full rounded-md" />
      <Skeleton className="h-screen max-h-[100px] w-full rounded-md" />
      <Skeleton className="h-screen max-h-[100px] w-full rounded-md" />
      <Skeleton className="h-screen max-h-[100px] w-full rounded-md" />
    </div>
  );
};

export default UsersLoading;
