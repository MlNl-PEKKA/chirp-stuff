"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "~/components/ui/button";

export const User = () => (
  <SignedIn>
    <Button asChild>
      <UserButton />
    </Button>
  </SignedIn>
);
