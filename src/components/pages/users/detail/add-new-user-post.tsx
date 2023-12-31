"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PostType, addNewUserPost } from "@/lib/api";
import { useUserNewPost } from "@/lib/context/user-new-post";
import { useState } from "react";

type Props = {
  userId: string | number;
};

const AddNewUserPost: React.FC<Props> = ({ userId }) => {
  const [formData, setFormData] = useState<PostType>({
    id: "",
    user_id: userId,
    title: "",
    body: "",
  });
  const { addUserNewPostButton, setAddUserNewPostButton } = useUserNewPost();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<any[]>([]);
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError([]);
    const data = new FormData();
    data.append("user_id", formData.user_id.toString());
    data.append("title", formData.title);
    data.append("body", formData.body);

    const res = await addNewUserPost(userId, data);
    if (res.error === 1) setError(res.message);
    else {
      setError([]);
      setAddUserNewPostButton(!addUserNewPostButton);
    }
    setIsSubmitting(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full">
        <Button size={"sm"} className="mt-4">
          Add New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Post</DialogTitle>
          <DialogDescription>Add new Post</DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-2" onSubmit={onSubmitHandler}>
          {error?.length > 0 && (
            <div className="bg-red-500 text-white p-2 rounded-md">
              {error.map((err: any, index) => (
                <p key={`${err}__${index}`} className="text-sm">
                  {err.field} {err.message}
                </p>
              ))}
            </div>
          )}
          <Input
            placeholder="Title"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
          />
          <Textarea
            rows={5}
            placeholder="Body"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setFormData({ ...formData, body: e.target.value })
            }
            value={formData.body}
          />
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              Add Post
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewUserPost;
