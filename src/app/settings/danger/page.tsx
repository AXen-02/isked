import { Separator } from "@/components/ui/separator";
import { DangerForm } from "./DangerForm";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function SettingsDangerPage() {
  // TODO: create GET API for this
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
        <h3 className="text-lg font-medium">Danger Zone</h3>
        <p className="text-sm text-muted-foreground">
          Exercise caution: actions in this tab can lead to irreversible changes
          or risks. Only proceed if you're fully aware of the consequences.
        </p>
      </div>
      <Separator />
      <DangerForm user={user} />
    </div>
  );
}
