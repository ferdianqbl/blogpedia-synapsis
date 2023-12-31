import AllUsers from "@/components/pages/users/all-users";

const Page = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="text-2xl font-bold">
          Find your favorite Creator on{" "}
          <span className="text-blue-600">Blogpedia</span> 🎉
        </h1>
        <p className="text-gray-400">
          This is a simple blog app built with Next.js and Tailwind CSS.
        </p>
      </div>

      <AllUsers />
    </div>
  );
};

export default Page;
