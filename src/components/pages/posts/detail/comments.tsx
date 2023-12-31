import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CommentType, addNewComment } from "../../../../lib/api";
import { useState } from "react";

type Props = {
  postId: string | number;
  trigger: boolean;
  setTrigger: (trigger: boolean) => void;
};

const Comments: React.FC<Props> = ({ postId, setTrigger, trigger }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<CommentType>({
    id: "",
    post_id: postId,
    name: "",
    email: "",
    body: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const newComment = new FormData();
    newComment.append("post_id", postId as string);
    newComment.append("name", formData.name);
    newComment.append("email", formData.email);
    newComment.append("body", formData.body);

    const res = await addNewComment(postId, newComment);
    if (res.error === 1) setError(res.message);
    else setError("");
    setLoading(false);
    setTrigger(!trigger);
  };
  return (
    <div className="flex flex-col w-full gap-2 border-y-2 py-4">
      <h2 className="text-base font-medium">
        Leave a <span className="text-blue-600">Comment</span> 🎉
      </h2>
      <form className="" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full gap-1">
          <Input
            placeholder="Name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <Textarea
            placeholder="Comment"
            rows={5}
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          />
        </div>
        <Button type="submit" className="mt-4 w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Comments;
