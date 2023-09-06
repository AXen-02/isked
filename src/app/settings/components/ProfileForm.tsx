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
import { CreateProfilePayload } from "@/lib/validators/account";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useCustomToast } from "@/hooks/use-custom-toast";
import { Icons } from "@/components/Icons";
import { useRouter } from "next/navigation";
import { Payload } from "@/lib/validators/payloads";
import { Cross2Icon } from "@radix-ui/react-icons";

const profileFormSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  bio: z
    .string()
    .min(4, {
      message: "Bio must be at least 4 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 160 characters.",
    }),
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
  const router = useRouter();

  const [enteredName, setEnteredName] = useState("");
  const [enteredBio, setEnteredBio] = useState("");
  const [enteredUrls, setEnteredUrls] = useState();

  const { mutate: updateProfile, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateProfilePayload = {
        payloadName: Payload.UPDATEPROFILE,
        id: user.id,
        name: enteredName,
        bio: enteredBio,
        urls: enteredUrls,
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
        title: "Account update",
        description: data,
      });
    },
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

  const { fields, append, remove } = useFieldArray({
    name: "urls",
    control: form.control,
  });

  async function onSubmit(formData: ProfileFormValues) {
    // call account update api here

    setEnteredName(formData.name);
    setEnteredBio(formData.bio);
    setEnteredUrls(Object(formData.urls));

    updateProfile();
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
                    <div className="flex space-x-2">
                      <Input {...field} />
                      <Button
                        type={"button"}
                        variant={"outline"}
                        onClick={() => {
                          remove([index]);
                        }}
                      >
                        <Cross2Icon className="w-4 h-4" />
                      </Button>
                    </div>
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
            onClick={() => append({ value: "https://" })}
          >
            Add URL
          </Button>
        </div>
        <div className="flex justify-end">
          <Button
            disabled={isLoading}
            type="submit"
            className="w-full md:w-1/4"
          >
            {isLoading ? (
              <Icons.spinner className="w-4 h-4 animate-spin" />
            ) : (
              `Update profile`
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
