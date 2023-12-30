import AllUserPosts from "@/components/pages/posts/detail/all-user-posts";
import DetailPostComment from "@/components/pages/posts/detail/detail-post-comment";
import DetailPostInformation from "@/components/pages/posts/detail/detail-post-information";
import { getDetailPostById, getUserById } from "@/lib/api";
import { redirect } from "next/navigation";

const Page = async ({ params: { postId } }: { params: { postId: string } }) => {
  const { error, data } = await getDetailPostById(postId);
  if (error === 1) redirect("/");
  const user = await getUserById(data.user_id);

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

      <DetailPostInformation
        post={data}
        user={user.error === 0 ? user.data : null}
      />
      <div className="flex flex-col w-full md:w-3/4 justify-center mx-auto">
        <h2 className="text-xl font-semibold">
          <span className="text-blue-600">All</span> Comments
        </h2>
        <small className="mb-4 text-gray-400">All comments on this post.</small>
        <DetailPostComment id={postId} />
      </div>
      {user.error === 0 && <AllUserPosts userId={user.data.id} />}
    </div>
  );
};

export default Page;
