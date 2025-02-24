import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "~/components/theme-provider";
import { Toaster } from "~/components/ui/sonner";
import { TRPCReactProvider } from "~/trpc/react";
import { SidebarProvider } from "~/components/ui/sidebar";
import { Left } from "~/app/components/left";

export const metadata: Metadata = {
  title: "chirp-stuff 🐥",
  description: "Quick Twitter clone",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${GeistSans.variable}`}
        suppressHydrationWarning
      >
        <body>
          <TRPCReactProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <SidebarProvider>
                <Left />
                {children}
              </SidebarProvider>
            </ThemeProvider>
            <Toaster />
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default Layout;
