"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import { Badge } from "@/components/ui/badge";
import { docsConfig } from "@/config/docs";
import { MainNavItem } from "@/types/nav";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {docsConfig.mainNav
          .filter((navItem) => !navItem.external)
          .map((navItem) => (
            <Link
              key={navItem.href}
              href={navItem.href!}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === navItem.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {navItem.title}
            </Link>
          ))}
      </nav>
    </div>
  );
}