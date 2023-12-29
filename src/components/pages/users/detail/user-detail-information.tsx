"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { UserType, getUserById } from "@/lib/api";
import { randomNum } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import EditUser from "./edit-user";

const UserDetailInformation = ({ userId }: { userId: string | number }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [trigger, setTrigger] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    const res = await getUserById(userId);
    setUser(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [userId, trigger]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center gap-1">
        <Skeleton className="w-28 h-28 rounded-full" />
        <Skeleton className="sm:w-1/3 h-10 w-full rounded-md" />
        <Skeleton className="sm:w-1/3 h-10 w-full rounded-md" />
        <div className="flex items-center gap-1 mt-3 sm:w-1/2 w-full justify-center">
          <Skeleton className="sm:w-1/3 h-10 w-1/2 rounded-md" />
          <Skeleton className="sm:w-1/3 h-10 w-1/2 rounded-md" />
        </div>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <Image
        src={`https://source.unsplash.com/random/300x300/?${
          user?.gender
        }&${randomNum(1, 100)}`}
        width={300}
        height={300}
        alt="user img"
        className="w-28 h-w-28 object-cover object-center rounded-full"
      />
      <h1 className="text-2xl font-bold">{user?.name}</h1>
      <p className="text-gray-400">{user?.email}</p>
      <div className="flex items-center gap-1 mt-3">
        <EditUser data={user} trigger={trigger} setTrigger={setTrigger} />
        <Button
          variant={"outline"}
          size={"sm"}
          className="border-red-500 bg-background hover:bg-red-50 hover:text-accent-foreground"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default UserDetailInformation;
