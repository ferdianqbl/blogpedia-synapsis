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
import { UserType, addNewUser } from "@/lib/api";

type Props = {
  trigger: boolean;
  setTrigger: (trigger: boolean) => void;
};

const AddNewUser: React.FC<Props> = ({ trigger, setTrigger }) => {
  const [formData, setFormData] = useState<UserType>({
    id: null,
    email: "",
    gender: "male",
    name: "",
    status: "active",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<[]>([]);
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    setError([]);
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("gender", formData.gender);
    data.append("status", "active");
    const res = await addNewUser(data);
    if (res.error === 1) setError(res.message);
    else {
      setError([]);
      setTrigger(!trigger);
    }
    setIsSubmitting(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="w-fit">
        <Button>Add Creator</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Creator</DialogTitle>
          <DialogDescription>Add new Creator</DialogDescription>
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
            defaultValue="male"
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
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewUser;
