"use client";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";

import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      // throw new Error(); // TEST:
      await signIn("google");
    } catch (error) {
      // toast notification
      toast({
        title: "There was a problem.",
        description: " There was an error logging in with Google.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGithub = async () => {
    setIsLoading(true);

    try {
      // throw new Error(); // TEST:
      await signIn("github");
    } catch (error) {
      // toast notification
      toast({
        title: "There was a problem.",
        description: " There was an error logging in with Github.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    toast({
      title: "TBD Feature",
      description:
        "Email authentication has not been implemented yet. Instead, you can use Gmail or GitHub to login.",
      duration: 10000,
    });

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email address
            </Label>
            <Input
              id="email"
              placeholder="name@school-email.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>

          {/* TODO: Show if email address exists */}
          {/* <div className="grid gap-1">
            <Label //className="sr-only"
              htmlFor="password"
            >
              Password
            </Label>
            <Input id="password" type="password" disabled={isLoading} />
          </div> 
          <p className="text-sm text-right text-muted-foreground">
            <Link
              href="/reset/password"
              className="underline underline-offset-4 hover:text-primary"
            >
              Forgot Password?
            </Link>
          </p>
          */}

          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In With Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          onClick={loginWithGoogle}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}{" "}
          Gmail
        </Button>
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          onClick={loginWithGithub}
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.gitHub className="mr-2 h-4 w-4" />
          )}{" "}
          Github
        </Button>
      </div>
    </div>
  );
}
