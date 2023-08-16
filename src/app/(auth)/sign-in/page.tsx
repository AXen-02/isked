import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { FC } from "react";
import { UserAuthForm } from "./components/UserAuthForm";

interface pageProps {}

export const metadata: Metadata = {
  title: "Sign in",
  description: "Isked signin page",
};

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div className="container relative grid h-[85vh] flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Sign up
        </Link>
        <div className="relative border hidden h-full flex-col text-slate-800 p-10 lg:flex">
          <div className="absolute inset-0">
            <div className="bg-white w-full h-full">
              <Icons.bgauth1 />
            </div>
          </div>
          <div className="relative z-20 flex items-center text-2xl font-medium">
            <Icons.logo className="mr-2 h-6 w-6" />
            isked
          </div>
          {/* TODO: Insert animation here */}
          {/* <SquareSpinner /> */}
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl lg:text-2xl font-semibold tracking-tight">
                Sign in to isked.
              </h1>
              <p className="text-sm text-justify text-muted-foreground">
                We suggest using the email address you use at school.
              </p>
            </div>
            <UserAuthForm />
            <p className="text-sm text-justify text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
