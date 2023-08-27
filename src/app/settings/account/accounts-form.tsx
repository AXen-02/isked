"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import TeamSwitcher from "@/components/TeamSwitcher";

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

const accountsFormSchema = z.object({
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

type accountsFormValues = z.infer<typeof accountsFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<accountsFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};

export function AccountsForm() {
  const { toast } = useToast();

  const form = useForm<accountsFormValues>({
    resolver: zodResolver(accountsFormSchema),
    defaultValues,
  });

  function onSubmit(data: accountsFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <>
      <TeamSwitcher />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Button type="submit">Update account</Button>
        </form>
      </Form>
    </>
  );
}
