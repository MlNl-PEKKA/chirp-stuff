import { SidebarContent, SidebarGroup } from "~/components/ui/sidebar";
import { Panel } from "./panel";
import { Input } from "~/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { TrendingUp, UserPlus } from "lucide-react";

export const Right = () => (
  <Panel className="px-2 py-8" side="right">
    <SidebarContent>
      <SidebarGroup>
        <Input placeholder="Search" className="rounded-full p-6" />
      </SidebarGroup>
      <SidebarGroup>
        <Card>
          <CardHeader className="border-b-[1px] p-4">
            <CardTitle className="flex flex-row items-center gap-2">
              <TrendingUp />
              Trending
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 py-4">
            <h3 className="text-medium font-semibold">#ABC</h3>
            <h3 className="text-medium font-semibold">#DEF</h3>
            <h3 className="text-medium font-semibold">#GHI</h3>
            <h3 className="text-medium font-semibold">#JKL</h3>
            <h3 className="text-medium font-semibold">#ABC</h3>
            <h3 className="text-medium font-semibold">#ABC</h3>
          </CardContent>
        </Card>
      </SidebarGroup>
      <SidebarGroup>
        <Card>
          <CardHeader className="border-b-[1px] p-4">
            <CardTitle className="flex flex-row items-center gap-2">
              <UserPlus />
              Follow
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 py-4">
            <h3 className="text-medium font-semibold">#ABC</h3>
            <h3 className="text-medium font-semibold">#DEF</h3>
            <h3 className="text-medium font-semibold">#GHI</h3>
          </CardContent>
        </Card>
      </SidebarGroup>
    </SidebarContent>
  </Panel>
);
