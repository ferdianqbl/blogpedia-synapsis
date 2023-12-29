import MainCard from "../ui/main-card";

const UserCard = () => {
  return (
    <MainCard>
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-bold">User Title</h2>
        <p className="text-sm text-gray-500">Post Date</p>
        <p className="text-sm text-gray-500">Post Excerpt</p>
      </div>
    </MainCard>
  );
};

export default UserCard;
