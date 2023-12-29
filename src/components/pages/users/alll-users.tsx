"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UserCard from "@/components/user-card";
import { UserType, getAllUsers } from "@/lib/api";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import UsersLoading from "./users-loading";
import { useDebounce } from "use-debounce";

const AllUsers = () => {
  const [users, setUsers] = useState<UserType[] | []>([]);
  const [query, setQuery] = useState<Partial<UserType> | null>(null);
  const [queryDebounce] = useDebounce(query, 1000);
  const [isNextPage, setIsNextPage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const getAllData = async () => {
    setLoading(true);
    const { data } = await getAllUsers({
      page,
      per_page: 15,
      query: queryDebounce,
    });
    const nextPage = await getAllUsers({
      page: page + 1,
      per_page: 15,
      query: queryDebounce,
    });
    setIsNextPage(nextPage.data.length > 0);
    setUsers(data);
    setLoading(false);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({
      name: e.target.value,
    });
  };

  useEffect(() => {
    getAllData();
  }, [page, queryDebounce]);

  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Search users" onChange={onChangeHandler} />

      {loading ? (
        <UsersLoading />
      ) : users.length > 0 ? (
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
        </div>
      ) : (
        <p className="text-center w-full">No users found</p>
      )}
    </div>
  );
};

export default AllUsers;
