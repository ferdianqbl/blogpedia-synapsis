"use client";
import { createContext, useContext, useState } from "react";

type UserNewPostContextType = {
  addUserNewPostButton: boolean;
  setAddUserNewPostButton: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UserNewPostContext = createContext<UserNewPostContextType | null>(
  null
);

export default function UserNewPostProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [addUserNewPostButton, setAddUserNewPostButton] =
    useState<boolean>(false);

  return (
    <UserNewPostContext.Provider
      value={{
        addUserNewPostButton,
        setAddUserNewPostButton,
      }}
    >
      {children}
    </UserNewPostContext.Provider>
  );
}

export const useUserNewPost = () => {
  const context = useContext(UserNewPostContext);
  if (!context) {
    throw new Error("useUserNewPost must be used within a UserNewPostProvider");
  }
  return context;
};
