import { siteConfig } from "@/config/site";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/Providers";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/SiteHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s - ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Class Schedule",
  ],
  authors: [
    {
      name: "axen",
      url: "https://imapp-web.vercel.app", // change this into my portfolio site
    },
  ],
  creator: "axen",
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: siteConfig.url,
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   siteName: siteConfig.name,
  //   images: [
  //     {
  //       url: siteConfig.ogImage,
  //       width: 1200,
  //       height: 630,
  //       alt: siteConfig.name,
  //     },
  //   ],
  // },
  // icons: {
  //   icon: "/app/favicon.ico",
  //   shortcut: "/app/favicon-16x16.png",
  //   apple: "/app/apple-touch-icon.png",
  // },
  // manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />

            <div className="flex justify-center">
              <div className="max-h-full max-w-full m-2 md:mx-6 xl:max-w-screen-xl overflow-hidden rounded-[0.5rem] border bg-background shadow">
                {children}
              </div>
              {/* <SiteFooter />*/}
            </div>
          </div>
          <TailwindIndicator />
        </ThemeProvider>
        {/* 
          <ThemeSwitcher />
          <Analytics />
          <NewYorkToaster />
          <DefaultToaster />
        */}
      </body>
    </html>
  );
}
