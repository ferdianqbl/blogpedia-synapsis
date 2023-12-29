"use client";
import UserCard from "@/components/user-card";
import { UserType, getAllUsers } from "@/lib/api";
import { randomNum } from "@/lib/utils";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      {users.map((user) => (
        <UserCard key={user.id} />
      ))}
    </div>
  );
};

export default HomeUsersList;
