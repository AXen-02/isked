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

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;

const accountFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z.string().email().optional(),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

interface AccountFormProps {
  user: {
    username: string | null;
    email: string | null;
    image: string | null;
    id: string;
    bio: string | null;
    urls: string[];
    roles: UserType[];
    dateJoined: Date;
    accounts: {
      provider: string | null;
    }[];
  };
}

export function AccountForm({ user }: AccountFormProps) {
  const { toast } = useToast();

  // This can come from your database or API.
  const defaultValues: Partial<AccountFormValues> = {
    username: user.username!,
    email: user.email!,
  };

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <>
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>

          <pre>{JSON.stringify(user, undefined, 2)}</pre>
        </>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

        <Button type="submit">Update account</Button>
      </form>
    </Form>
  );
}
