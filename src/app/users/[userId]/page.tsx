import UserDetailInformation from "@/components/pages/users/detail/user-detail-information";
import UserDetailPosts from "@/components/pages/users/detail/user-detail-posts";
import { getUserById } from "@/lib/api";
import { redirect } from "next/navigation";

const Page = async ({ params: { userId } }: { params: { userId: string } }) => {
  const { error } = await getUserById(userId);

  if (error === 1) redirect("/");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="text-2xl font-bold">
          Creator Profile on <span className="text-blue-600">Blogpedia</span> 🎉
        </h1>
        <p className="text-gray-400">
          This is a simple blog app built with Next.js and Tailwind CSS.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <UserDetailInformation userId={userId} />
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">
            <span className="text-blue-600">All</span> Posts
          </h2>
          <small className="mb-4 text-gray-400">
            Find your favorite post from this creator.
          </small>
          <UserDetailPosts userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default Page;
