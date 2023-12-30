import HomePostsList from "@/components/pages/home/home-posts-list";
import HomeUsersList from "@/components/pages/home/home-users-list";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="text-2xl font-bold">
          Welcome to <span className="text-blue-600">Blogpedia</span> 🎉
        </h1>
        <p className="text-gray-400">
          This is a simple blog app built with Next.js and Tailwind CSS.
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">
          <span className="text-blue-600">Latest</span> Posts
        </h2>
        <small className="mb-4 text-gray-400">
          Find your favorite post and see the author&apos;s profile.
        </small>
        <HomePostsList />
      </div>

      <div className="flex flex-col">
        <h2 className="text-xl font-semibold">
          <span className="text-blue-600">Latest</span> Users
        </h2>
        <small className="mb-4 text-gray-400">
          Find your favorite user and see their latest posts.
        </small>
        <HomeUsersList />
      </div>
    </div>
  );
}
