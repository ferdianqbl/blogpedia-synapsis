import { PostType } from "@/lib/api";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { randomNum } from "@/lib/utils";

type Props = {
  data: PostType;
};

const PostCard: React.FC<Props> = ({ data }) => {
  return (
    <Card className="w-full h-full overflow-hidden">
      <CardContent className="p-0">
        <Image
          src={`https://source.unsplash.com/random/?technology&${randomNum(
            1,
            100
          )}`}
          width={300}
          height={200}
          alt="blog img"
          className="w-full h-full max-h-[150px] object-cover object-center"
        />
        <div className="p-4">
          <h5 className="font-medium overflow-ellipsis whitespace-nowrap overflow-hidden">
            {data.title}
          </h5>
          <p className="text-gray-500 overflow-ellipsis whitespace-nowrap overflow-hidden">
            {data.body}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
