"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
  const [inputDeleteAccount, setInputDeleteAccount] = useState("");
  const { toast } = useToast();

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

  function onSubmit() {
    console.log("agag");
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
            <Button variant={"destructive"} className="w-1/2">
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
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant={"destructive"}
              type="submit"
              disabled={!isInputUsernameMatch()}
              onClick={onSubmit}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    // <Form {...form}>
    //   <form
    //     onSubmit={form.handleSubmit(onSubmit)}
    //     className="border border-destructive rounded-md p-8 space-y-8"
    //   >
    //     <FormField
    //       control={form.control}
    //       name="id"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Delete Personal Account</FormLabel>
    //           <FormDescription>
    //             <b>Permanently</b> remove your Personal Account and all of its
    //             contents from the Isked platform.
    //           </FormDescription>
    //           <FormMessage />
    //         </FormItem>

    //       )}
    //     />

    // <Dialog>
    //   <DialogTrigger asChild>
    //     <div className="flex justify-end">
    //       <Button variant={"destructive"} className="w-1/4">
    //         Delete account
    //       </Button>
    //     </div>
    //   </DialogTrigger>
    //   <DialogContent className="sm:max-w-[425px]">
    //     <DialogHeader>
    //       <DialogTitle>Delete Personal Account</DialogTitle>
    //       <DialogDescription>
    //         This will <b>permanently</b> delete your account, including all
    //         data and access.
    //       </DialogDescription>
    //       <DialogDescription>
    //         This action is not reversible. Please proceed with caution.
    //       </DialogDescription>
    //     </DialogHeader>
    //     <div className="grid gap-4 py-4">
    //       <div className="grid grid-cols-4 items-center gap-4">
    //         <Label htmlFor="name" className="text-right">
    //           Name
    //         </Label>
    //         <Input id="name" value="Pedro Duarte" className="col-span-3" {...field}/>
    //       </div>
    //       <div className="grid grid-cols-4 items-center gap-4">
    //         <Label htmlFor="username" className="text-right">
    //           Username
    //         </Label>
    //         <Input id="username" value="@peduarte" className="col-span-3" />
    //       </div>
    //     </div>
    //     <DialogFooter>
    //       <Button type="submit">Save changes</Button>
    //     </DialogFooter>
    //   </DialogContent>
    // </Dialog>
    //   </form>
    // </Form>
  );
}
