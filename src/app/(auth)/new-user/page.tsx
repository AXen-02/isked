import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/PageHeader";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    // TODO: Update the UI
    <div className="container relative">
      <PageHeader className="pb-8">
        <Link
          href="/docs/changelog"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        >
          <span className="sm:hidden">Welcome to Isked!</span>
          <span className="hidden sm:inline">
            Introducing Isked, your class scheduling assistant.
          </span>
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
        <PageHeaderHeading>
          Streamline your class scheduling with Isked.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Easily manage courses, schedules, and collaborations. Say hello to
          effortless organization and an enriched academic experience.
        </PageHeaderDescription>
        <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link href="/" className={cn(buttonVariants())}>
            Let's Get Started
          </Link>
        </div>
      </PageHeader>
    </div>
  );
};

export default page;
