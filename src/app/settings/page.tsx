import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import { ProfileForm } from "./components/ProfileForm";
import { db } from "@/lib/db";
import { getAuthSession } from "@/lib/auth";
import { notFound } from "next/navigation";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
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
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <ProfileForm user={user} />
    </div>
  );
};

export default page;
