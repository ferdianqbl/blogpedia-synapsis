"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { CommentType, getCommentsByPostId } from "@/lib/api";
import { useEffect, useState } from "react";
import UserCommentCard from "./user-comment-card";
import Comments from "./comments";

type Props = {
  id: string | number;
};

const DetailPostComment: React.FC<Props> = ({ id }) => {
  const [comments, setComments] = useState<CommentType[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [trigger, setTrigger] = useState<boolean>(false);
  const getComments = async () => {
    setLoading(true);
    const res = await getCommentsByPostId(id);
    if (res.error === 1) return;
    setComments(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getComments();
  }, [id, trigger]);

  if (loading)
    return (
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex flex-col w-full gap-1">
              <Skeleton className="h-5 w-1/4 rounded-md" />
              <Skeleton className="h-5 w-1/2 rounded-md" />
            </div>
          </div>
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex flex-col w-full gap-1">
              <Skeleton className="h-5 w-1/4 rounded-md" />
              <Skeleton className="h-5 w-1/2 rounded-md" />
            </div>
          </div>
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex flex-col w-full gap-1">
              <Skeleton className="h-5 w-1/4 rounded-md" />
              <Skeleton className="h-5 w-1/2 rounded-md" />
            </div>
          </div>
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>
    );

  return (
    <div className="flex flex-col gap-3">
      {comments?.length > 0 ? (
        <div className="flex flex-col gap-6 w-full">
          {comments.map((comment) => (
            <UserCommentCard key={comment.id} {...comment} />
          ))}
        </div>
      ) : (
        <p className="w-full">No comments yet.</p>
      )}
      <Comments postId={id} setTrigger={setTrigger} trigger={trigger} />
    </div>
  );
};

export default DetailPostComment;
