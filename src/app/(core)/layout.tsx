import type { PropsWithChildren } from "react";
import { Right } from "~/app/components/right";
import { SidebarInset } from "~/components/ui/sidebar";

const Layout = (props: PropsWithChildren) => (
  <>
    <SidebarInset>
      <main className="flex h-full flex-col items-center justify-start gap-2">
        {props.children}
      </main>
    </SidebarInset>
    <Right />
  </>
);

export default Layout;
