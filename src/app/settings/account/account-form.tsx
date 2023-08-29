"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { UserType } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import { useRouter } from "next/navigation";
import { useCustomToast } from "@/hooks/use-custom-toast";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { CreateAccountPayload } from "@/lib/validators/account";
import axios, { AxiosError } from "axios";
import { Payload } from "@/lib/validators/payloads";

const accountFormSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Userame must be at least 3 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    })
    .regex(/^[a-zA-Z0-9_-]+$/, {
      message:
        "Username can only contain letters, numbers, underscores, and hyphens.",
    }),
  email: z.string().email().optional(),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

interface AccountFormProps {
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
  };
}

export function AccountForm({ user }: AccountFormProps) {
  const { toast } = useToast();
  const { loginToast } = useCustomToast();
  const router = useRouter();

  const [enteredUsername, setEnteredUsername] = useState("");

  const { mutate: updateAccount, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateAccountPayload = {
        payloadName: Payload.UPDATEACCOUNT,
        id: user.id,
        username: enteredUsername,
      };

      const { data } = await axios.put("/api/account", payload);
      return data as string;
    },
    onError: (err: Error) => {
      // error handling
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast();
        }

        if (err.response?.status === 409) {
          return toast({
            title: "Username already exists.",
            description: "Please choose a different username.",
            variant: "destructive",
          });
        }
      }

      toast({
        title: "There was an error.",
        description: err.message,
        variant: "destructive",
      });
    },
    onSuccess: (data) => {
      // dynamic value of the created community
      // router.push(`r/${data}`);

      router.refresh();
      toast({
        title: "Profile update",
        description: data,
      });
    },
  });

  // This can come from your database or API.
  const defaultValues: Partial<AccountFormValues> = {
    username: user.username!,
    email: user.email!,
  };

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(formData: AccountFormValues) {
    setEnteredUsername(formData.username);
    updateAccount();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <div className="relative">
                <FormControl className="pl-10">
                  <Input disabled {...field} />
                </FormControl>
                {user.accounts[0].provider === "github" ? (
                  <Icons.gitHub className="w-5 h-5 absolute left-3 top-2 cursor-not-allowed" />
                ) : (
                  <Icons.google className="w-5 h-5 absolute left-3 top-2 cursor-not-allowed" />
                )}
              </div>
              <FormDescription>
                Your account is connected via {user.accounts[0].provider}{" "}
                provider.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <div className="relative">
                <p className="absolute text-md px-3 w-auto inset-y-0 grid place-items-center text-muted-foreground bg-muted rounded-l-md">
                  isked.vercel.app/
                </p>
                <FormControl className="pl-40">
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
              </div>
              <FormDescription>
                This is your public display name. It will be used as your URL
                namespace within Isked.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button
            disabled={isLoading}
            type="submit"
            className="w-full md:w-1/4"
          >
            {isLoading ? (
              <Icons.spinner className="w-4 h-4 animate-spin" />
            ) : (
              `Update account`
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
