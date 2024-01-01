"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { UserType, addNewUser, editUserById } from "@/lib/api";
import { Edit } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  data: UserType | null;
  trigger: boolean;
  setTrigger: (trigger: boolean) => void;
};

const EditUser: React.FC<Props> = ({ data, trigger, setTrigger }) => {
  const [formData, setFormData] = useState<UserType>({
    id: data?.id || null,
    email: data?.email || "",
    gender: data?.gender || "",
    name: data?.name || "",
    status: data?.status || "active",
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<any[]>([]);
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    setError([]);
    e.preventDefault();
    const newData = new FormData();
    newData.append("name", formData.name);
    newData.append("email", formData.email);
    newData.append("gender", formData.gender);
    newData.append("status", "active");
    const res = await editUserById(data?.id!, newData);
    if (res.error === 1) setError(res.message);
    else {
      setError([]);
      setTrigger(!trigger);
      toast({
        variant: "success",
        description: "User edited successfully",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="w-fit">
        <Button
          size={"icon"}
          className="text-green-500 hover:text-green-500/50 bg-transparent hover:bg-transparent"
        >
          <Edit className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Creator</DialogTitle>
          <DialogDescription>Add new Creator Post</DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-2" onSubmit={onSubmitHandler}>
          {error?.length > 0 && (
            <div className="bg-red-500 text-white p-2 rounded-md">
              {error.map((err: any, index) => (
                <p key={`${err}__${index}`} className="text-sm">
                  {err.field} {err.message}
                </p>
              ))}
            </div>
          )}
          <Input
            placeholder="Name"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, name: e.target.value })
            }
            value={formData.name}
          />
          <Input
            placeholder="Email"
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
          />
          <RadioGroup
            defaultValue={formData.gender}
            onValueChange={(e: string) =>
              setFormData({ ...formData, gender: e })
            }
            className="flex items-center gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <label htmlFor="female">Female</label>
            </div>
          </RadioGroup>
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              Edit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditUser;
