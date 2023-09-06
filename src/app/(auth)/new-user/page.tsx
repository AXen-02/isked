import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/PageHeader";
import { FC } from "react";
import NewUserSlider from "./components/NewUserSlider";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  // get user's session
  const session = await getAuthSession();
  const user = !session?.user
    ? undefined
    : await db.user.findFirst({
        where: {
          id: session?.user.id,
        },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
          username: true,
          bio: true,
          roles: true,
          urls: true,
          dateJoined: true,
          accounts: {
            select: {
              provider: true,
            },
          },
        },
      });

  // console.log(JSON.stringify(user));

  if (!user) return notFound();

  return (
    // TODO: Update the UI
    <div className="container relative">
      <PageHeader className="pb-8">
        <PageHeaderHeading>Welcome to Isked, {user.name}! 🎉</PageHeaderHeading>
        <PageHeaderDescription></PageHeaderDescription>
        <PageHeaderDescription>
          We&apos;re excited to have you as part of our Isked community. To get
          started, please take a moment to set up your account.
          {/* Customize your profile and start exploring.
          We&apos;re here to help if you need anything. */}
        </PageHeaderDescription>
        <PageHeaderDescription>
          {/* TODO: Create a slider. swiper/splider */}
          {/* <SwiperSample className="w-[70vw] lg:w-auto pb-8 pt-8 md:pb-10 md:pt-8" /> */}
          <NewUserSlider
            className="w-[70vw] max-w-2xl pb-8 pt-2 md:pb-10 md:pt-4"
            user={user}
          />
        </PageHeaderDescription>

        {/* <div className="flex w-full items-center space-x-4 pb-8 md:pb-10">
          <Link href="/" className={cn(buttonVariants())}>
            Let&apos;s Get Started
          </Link>
        </div> */}
      </PageHeader>
    </div>
  );
};

export default page;
