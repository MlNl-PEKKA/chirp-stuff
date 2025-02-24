import { Sidebar } from "~/components/ui/sidebar";
import type { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

type Props = PropsWithChildren<
  Pick<Parameters<typeof Sidebar>[0], "side" | "className">
>;

export const Panel = ({
  side = "left",
  children = <></>,
  className,
}: Props) => (
  <Sidebar
    side={side}
    variant="inset"
    className={cn("bg-sidebar p-8", className)}
  >
    {children}
  </Sidebar>
);
