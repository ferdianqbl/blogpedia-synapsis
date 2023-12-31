import { PostType, UserType } from "@/lib/api";
import Image from "next/image";
import { randomNum } from "@/lib/utils";

type Props = {
  post: PostType;
  user: UserType | null;
};

const DetailPostInformation: React.FC<Props> = async ({ post, user }) => {
  return (
    <div className="flex flex-col gap-4 w-full md:w-3/4 justify-center mx-auto">
      <Image
        src={`https://source.unsplash.com/random/landscape/?technology&${randomNum(
          1,
          100
        )}`}
        width={500}
        height={300}
        alt="user img"
        className="w-full max-h-[300px] object-cover object-center rounded-md"
        priority
      />

      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-blue-600 font-bold text-2xl text-center">
          {post.title}
        </h1>
        {user && (
          <p className="text-center text-gray-400 text-sm">
            <span className="text-blue-600">By</span> {user.name}
            <br />
            {user.email}
          </p>
        )}
      </div>
      <p className="">{post.body}</p>
    </div>
  );
};

export default DetailPostInformation;
