import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { SidebarNav } from "./components/SidebarNav";
import { Icons } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your profile, account and appearance settings.",
};

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/settings",
    icon: <Icons.user className="w-4 h-4" />,
  },
  {
    title: "Account",
    href: "/settings/account",
    icon: <Icons.settings className="w-4 h-4" />,
  },
  {
    title: "Appearance",
    href: "/settings/appearance",
    icon: <Icons.appearance className="w-4 h-4" />,
  },
  {
    title: "Danger",
    href: "/settings/danger",
    icon: <Icons.danger className="w-4 h-4" />,
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default async function SettingsLayout({
  children,
}: SettingsLayoutProps) {
  const session = await getAuthSession();

  if (!session?.user) return notFound(); // dont go if not signed-in

  return (
    <>
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
