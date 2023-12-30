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
    </div>
  );
};

export default Page;
