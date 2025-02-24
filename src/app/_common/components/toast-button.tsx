"use client";

import type { PropsWithChildren } from "react";
import { Button } from "~/components/ui/button";
import { toast } from "sonner";

type Props = Omit<Parameters<typeof Button>[0], "onClick"> & {
  toast: Parameters<typeof toast>;
};

export const ToastButton = ({
  children,
  toast: toastProps,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Button {...props} onClick={() => toast(...toastProps)}>
      {children}
    </Button>
  );
};
