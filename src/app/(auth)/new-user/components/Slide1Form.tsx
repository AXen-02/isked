"use client";

import { Icons } from "@/components/Icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCustomToast } from "@/hooks/use-custom-toast";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { CreateProfilePayload } from "@/lib/validators/account";
import { Payload } from "@/lib/validators/payloads";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

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
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

interface Slider1FormProps {
  user: User;
}

const Slider1Form: FC<Slider1FormProps> = ({ user }) => {
  const { toast } = useToast();
  const { loginToast } = useCustomToast();
  const router = useRouter();

  const [enteredName, setEnteredName] = useState("");
  const [enteredBio, setEnteredBio] = useState("");
  const [completed, setCompleted] = useState(false);

  const { mutate: updateProfile, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateProfilePayload = {
        payloadName: Payload.UPDATEPROFILE,
        id: user.id,
        name: enteredName,
        bio: enteredBio,
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
      router.refresh();
      setCompleted(true);
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
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(formData: ProfileFormValues) {
    // call account update api here
    setEnteredName(formData.name);
    setEnteredBio(formData.bio);

    updateProfile();
  }

  return (
    <div className="flex justify-center items-center">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    readOnly={completed}
                    placeholder="Your name"
                    {...field}
                  ></Input>
                </FormControl>
                {/* <FormDescription>
                    This is the name that will be displayed on your profile and
                    in emails.
                  </FormDescription> */}
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
                    readOnly={completed}
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                    You can <span>@mention</span> other users and organizations
                    to link to them.
                  </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          {completed ? (
            <div className="flex justify-start items-center pt-2">
              <Alert>
                <CheckCircledIcon className="w-6 h-6" />

                <AlertTitle>Completed</AlertTitle>
                <AlertDescription>
                  You can proceed to the next step.
                </AlertDescription>
              </Alert>
            </div>
          ) : (
            <div className="justify-start pt-2">
              <Button
                disabled={isLoading}
                type="submit"
                className={cn("w-full md:w-auto", `${!completed || "hidden"}`)}
              >
                {isLoading ? (
                  <Icons.spinner className="w-4 h-4 animate-spin" />
                ) : (
                  `Update profile`
                )}
              </Button>
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default Slider1Form;
