import { FC } from "react";

import { UserAuthForm } from "./components/user-auth-form";
import { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

interface AuthenticationPageProps {}

const AuthenticationPage: FC<AuthenticationPageProps> = ({}) => {
  return (
    <>
      {/* <div className="relative flex h-full flex-col bg-muted p-10 text-white dark:border-r lg:hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="relative z-20 flex items-center text-2xl font-medium">
          <Icons.logo className="mr-2 h-6 w-6" />
          Isked
        </div>
      </div> */}
      <div className="container grid h-[85vh] flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-slate-900" />
          <div className="relative z-20 flex items-center text-2xl font-medium">
            <Icons.logo className="mr-2 h-6 w-6" />
            isked
          </div>
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
          <Tabs
            defaultValue="signin"
            className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
          >
            <TabsList>
              <TabsTrigger value="signin">Sign in</TabsTrigger>
              <TabsTrigger value="signup">Sign up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              {/* TODO: Tab 1 */}
              <>
                <div className="flex flex-col space-y-2">
                  <h1 className="text-4xl font-semibold tracking-tight">
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
              </>
            </TabsContent>
            <TabsContent value="signup">
              <>
                <div className="flex flex-col space-y-2">
                  <h1 className="text-4xl font-semibold tracking-tight">
                    Join isked.
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
              </>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AuthenticationPage;
