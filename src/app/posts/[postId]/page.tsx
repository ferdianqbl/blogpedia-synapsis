import DetailPostComment from "@/components/pages/posts/detail/detail-post-comment";
import { getDetailPostById } from "@/lib/api";
import { redirect } from "next/navigation";

const Page = async ({ params: { postId } }: { params: { postId: string } }) => {
  const { error } = await getDetailPostById(postId);

  if (error === 1) redirect("/");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="text-2xl font-bold">
          Detail Post on <span className="text-blue-600">Blogpedia</span> 🎉
        </h1>
        <p className="text-gray-400">
          This is a simple blog app built with Next.js and Tailwind CSS.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">
            <span className="text-blue-600">All</span> Comments
          </h2>
          <small className="mb-4 text-gray-400">
            All comments on this post.
          </small>
          <DetailPostComment id={postId} />
        </div>
      </div>
    </div>
  );
};

export default Page;
