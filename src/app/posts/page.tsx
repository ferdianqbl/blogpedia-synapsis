import AllPosts from "@/components/pages/posts/all-posts";

const Page = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="text-2xl font-bold">
          Find your favorite post on{" "}
          <span className="text-blue-600">Blogpedia</span> 🎉
        </h1>
        <p className="text-gray-400">
          This is a simple blog app built with Next.js and Tailwind CSS.
        </p>
      </div>

      <AllPosts />
    </div>
  );
};

export default Page;
