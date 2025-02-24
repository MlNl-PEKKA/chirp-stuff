"use client";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
} from "~/components/ui/sidebar";
import { Panel } from "./panel";
import { User } from "./auth/user";
import Link from "next/link";
import { type PropsWithChildren } from "react";
import { Bell, Bookmark, CheckCircle, Home, Mail, User2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";

export const Left = () => (
  <Panel side="left">
    <SidebarHeader className="text-2xl font-bold">🐥 chirp-stuff</SidebarHeader>
    <SidebarContent className="flex h-full flex-col gap-2 p-4">
      <LinkButton href="/">
        <Home /> Home
      </LinkButton>
      <LinkButton href="/messages">
        <Mail /> Messages
      </LinkButton>
      <LinkButton href="/notifications">
        <Bell /> Notifications
      </LinkButton>
      <LinkButton href="/saved">
        <Bookmark /> Saved
      </LinkButton>
      <LinkButton href="/premium">
        <CheckCircle /> Premium
      </LinkButton>
      <LinkButton href="/profile">
        <User2 /> Profile
      </LinkButton>
      <Button className="rounded-full p-6 text-base font-bold">Post</Button>
    </SidebarContent>
    <SidebarFooter>
      <User />
    </SidebarFooter>
  </Panel>
);

type Props = PropsWithChildren<Pick<Parameters<typeof Link>[0], "href">>;
const LinkButton = ({ href, children }: Props) => {
  const pathname = usePathname();
  return (
    <SidebarMenuButton asChild isActive={pathname === href} className="h-12">
      <Link className="gap-2 text-xl font-medium" href={href}>
        {children}
      </Link>
    </SidebarMenuButton>
  );
};
