"use client";

import { PostType, UserType, getDetailPostById, getUserById } from "@/lib/api";
import { useEffect, useState } from "react";

type Props = {
  id: string | number;
};

const DetailPostInformation: React.FC<Props> = ({ id }) => {
  const [post, setPost] = useState<PostType | null>(null);
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getPostAndUserData = async () => {
    setLoading(true);
    const postsRes = await getDetailPostById(id);
    if (postsRes.error === 1) return;

    const userRes = await getUserById(postsRes.data?.user_id);
    if (userRes.error === 1) return;

    setPost(postsRes.data);
    setUser(userRes.data);
    setLoading(false);
  };

  useEffect(() => {
    getPostAndUserData();
  }, [id]);

  return <div>DetailPostInformation</div>;
};

export default DetailPostInformation;
