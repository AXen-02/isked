import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/PageHeader";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import SwiperSample from "./components/SwiperSample";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    // TODO: Update the UI
    <div className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Welcome to Isked! 🎉</PageHeaderHeading>
        <PageHeaderDescription></PageHeaderDescription>
        <PageHeaderDescription>
          We&apos;re excited to have you as part of our Isked community.
        </PageHeaderDescription>
        <PageHeaderDescription>
          To get started, please take a moment to set up your account. Customize
          your profile and start exploring. We&apos;re here to help if you need
          anything.
        </PageHeaderDescription>
        <PageHeaderDescription>
          {/* TODO: Create a slider. swiper/splider */}
          <SwiperSample />
        </PageHeaderDescription>

        <div className="flex w-full items-center space-x-4 pb-8 md:pb-10">
          <Link href="/" className={cn(buttonVariants())}>
            Let&apos;s Get Started
          </Link>
        </div>
      </PageHeader>
    </div>
  );
};

export default page;
