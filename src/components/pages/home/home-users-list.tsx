"use client";
import UserCard from "@/components/user-card";
import { UserType, getAllUsers } from "@/lib/api";
import { randomNum } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomeUsersList = () => {
  const [users, setUsers] = useState<UserType[] | []>([]);

  const getAllData = async () => {
    const res = await getAllUsers({
      page: randomNum(1, 50),
      per_page: 5,
    });
    setUsers(res.data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
      {users.map((user) => (
        <Link
          href={`/users/${user.id}`}
          key={user.id}
          className="flex items-center justify-center w-full hover:scale-105 transition-all duration-300"
        >
          <UserCard data={user} key={user.id} />
        </Link>
      ))}
    </div>
  );
};

export default HomeUsersList;
