import Link from "next/link";

import { CommandMenu } from "@/components/CommandMenu";
import { MainNav } from "@/components/MainNav";
import { MobileNav } from "@/components/MobileNav";
import { ModeToggle } from "@/components/ModeToggle";
import { buttonVariants } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";

export async function SiteHeader() {
  const session = await getAuthSession();

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            {/* TODO: NotificationBell */}
            {/* <Link href="/" target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <BellIcon className="h-4 w-4 fill-current" />
                <span className="sr-only">Notifications</span>
              </div>
            </Link> */}
            <ModeToggle />
            
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <Link href="/sign-in" className={buttonVariants()}>
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
