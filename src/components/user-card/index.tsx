import { UserType } from "@/lib/api";
import { randomNum } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "../ui/card";

type Props = {
  data: UserType;
};

const UserCard: React.FC<Props> = ({ data }) => {
  return (
    <Card className="w-full h-full">
      <CardContent className="p-4 flex items-center gap-3">
        <Avatar>
          <AvatarImage
            src={`https://source.unsplash.com/random/?${
              data.gender
            }&${randomNum(1, 100)}`}
          />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>

        <div className="flex flex-col w-[80%]">
          <h5 className="font-medium overflow-ellipsis whitespace-nowrap overflow-hidden">
            {data.name}
          </h5>
          <p className="text-gray-500 overflow-ellipsis whitespace-nowrap overflow-hidden">
            {data.email}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
