"use client";

import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Icons } from "@/components/Icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { UserType } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

// const dangerFormSchema = z.object({
//   id: z.string(),
//   username: z.string(),
// });

// type DangerFormValues = z.infer<typeof dangerFormSchema>;

interface DangerFormProps {
  user: {
    name: string | null;
    bio: string | null;
    urls: JsonValue[];
    image: string | null;
    id: string;
    email: string | null;
    username: string | null;
    roles: UserType[];
    dateJoined: Date;
    accounts: {
      provider: string | null;
    }[];
    // add created accounts here
  };
}

export function DangerForm({ user }: DangerFormProps) {
  const { toast } = useToast();
  const router = useRouter();

  const [inputDeleteAccount, setInputDeleteAccount] = useState("");

  const { mutate: deleteAccount, isLoading } = useMutation({
    mutationFn: async () => {
      const config = {
        data: {
          id: user.id,
        },
      };

      const { data } = await axios.delete(`/api/account/`, config);
      return data as string;
    },
    onError: (err: Error) => {
      // error handling
      toast({
        title: "Could not delete account.",
        description: err.message,
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      toast({
        title: "Account deleted",
        description: data,
      });

      router.push(`/sign-in`);
      router.refresh();
    },
  });

  // // This can come from your database or API.
  // const defaultValues: Partial<DangerFormValues> = {
  //   id: user.id!,
  //   username: user.username!,
  // };

  // const form = useForm<DangerFormValues>({
  //   resolver: zodResolver(dangerFormSchema),
  //   defaultValues,
  // });

  // function onSubmit(data: DangerFormValues) {
  //   toast({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   });
  // }

  async function onSubmit() {
    deleteAccount();
  }

  function isInputUsernameMatch() {
    return inputDeleteAccount === user.username;
  }

  return (
    <div className="space-y-4">
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-6 w-6 -ml-1" />

        <AlertTitle className="text-lg">
          <b>Delete Personal Account</b>
        </AlertTitle>
        <AlertDescription>
          This will permanently remove your personal account and all of its
          contents and access from the Isked platform.
        </AlertDescription>
      </Alert>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex justify-end">
            <Button variant={"destructive"} className="w-full md:w-1/4">
              Delete account
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Personal Account</DialogTitle>
            <DialogDescription>
              This action is not reversible. Please proceed with caution.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="">
              <DialogDescription>
                Enter your username <b>{user.username}</b> to continue:
              </DialogDescription>

              <Input
                id="name"
                value={inputDeleteAccount}
                onChange={(e) => setInputDeleteAccount(e.target.value)}
                className="col-span-3"
                disabled={isLoading}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant={"destructive"}
              type="submit"
              disabled={!isInputUsernameMatch() || isLoading}
              onClick={onSubmit}
            >
              {isLoading ? (
                <Icons.spinner className="w-4 h-4 animate-spin" />
              ) : (
                `Delete`
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
