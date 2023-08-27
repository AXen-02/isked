import { Separator } from "@/components/ui/separator";
import { AccountForm } from "./account-form";
import TeamSwitcher from "@/components/TeamSwitcher";
import { db } from "@/lib/db";
import { getAuthSession } from "@/lib/auth";
import { notFound } from "next/navigation";

export default async function SettingsAccountPage() {
  const session = await getAuthSession();
  const user = !session?.user
    ? undefined
    : await db.user.findFirst({
        where: {
          id: session?.user.id,
        },
        select: {
          id: true,
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

  console.log(JSON.stringify(user));

  if (!user) return notFound();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Choose an account to modify.
        </p>
      </div>
      <TeamSwitcher />
      <Separator />
      <AccountForm user={user} />
    </div>
  );
}
