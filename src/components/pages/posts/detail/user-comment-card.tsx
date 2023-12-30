import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { randomNum } from "@/lib/utils";

type Props = {
  name: string;
  email: string;
  body: string;
};

const UserCommentCard: React.FC<Props> = ({ body, email, name }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage
            src={`https://source.unsplash.com/random/300x300/?person&${randomNum(
              1,
              100
            )}`}
          />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
        <div className="flex flex-col w-full">
          <h5 className="font-medium">{name}</h5>
          <small className="text-gray-500">{email}</small>
        </div>
      </div>
      <p className="w-full">{body}</p>
    </div>
  );
};

export default UserCommentCard;
