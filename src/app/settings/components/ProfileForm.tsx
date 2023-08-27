"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import axios, { AxiosError } from "axios";

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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { UserType } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import { CreateAccountProfilePayload } from "@/lib/validators/account";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useCustomToast } from "@/hooks/use-custom-toast";

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;
interface ProfileFormProps {
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

export function ProfileForm({ user }: ProfileFormProps) {
  const { toast } = useToast();
  const { loginToast } = useCustomToast();

  const [enteredName, setEnteredName] = useState("");
  const [enteredBio, setEnteredBio] = useState("");
  const [enteredUrls, setEnteredUrls] = useState();

  const { mutate: updateAccount, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateAccountProfilePayload = {
        id: user.id,
        name: enteredName,
        bio: enteredBio,
        urls: enteredUrls,
      };

      const { data } = await axios.put("/api/account", payload);
      return data as string;
    },
    onError: (err) => {
      // error handling
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return loginToast();
        }

        if (err.response?.status === 409) {
          return toast({
            title: "Subreddit already exists.",
            description: "Please choose a different subreddit name.",
            variant: "destructive",
          });
        }

        if (err.response?.status === 422) {
          return toast({
            title: "Invalid subreddit name",
            description: "Please choose a name between 3 and 21 characters.",
            variant: "destructive",
          });
        }
      }

      toast({
        title: "There was an error.",
        description: "Could not create subreddit.",
        variant: "destructive",
      });
    },
    // onSuccess: (data) => {
    //   // dynamic value of the created community
    //   router.push(`r/${data}`);
    // },
  });

  // This can come from your database or API.
  const defaultValues: Partial<ProfileFormValues> = {
    name: user.name!,
    bio: user.bio!,
    urls: Object(user.urls!),
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  });

  async function onSubmit(formData: ProfileFormValues) {
    // call account update api here

    setEnteredName(formData.name);
    setEnteredBio(formData.bio);
    setEnteredUrls(Object(formData.urls));

    updateAccount();

    toast({
      title: "You submitted the following values:",
      description: (
        <>
          Updated user.
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(formData, null, 2)}
            </code>
          </pre>
          {/* <pre>{JSON.stringify(user, undefined, 2)}</pre> */}
        </>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field}></Input>
              </FormControl>
              <FormDescription>
                This is the name that will be displayed on your profile and in
                emails.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations to
                link to them.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    URLs
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Add links to your website, blog, or social media profiles.
                  </FormDescription>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => append({ value: "" })}
          >
            Add URL
          </Button>
        </div>
        <Button disabled={isLoading} type="submit">
          Update profile
        </Button>
      </form>
    </Form>
  );
}
