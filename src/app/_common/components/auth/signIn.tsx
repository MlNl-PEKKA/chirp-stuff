"use client";

import { SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "~/components/ui/button";

export const SignIn = () => (
  <SignedOut>
    <Button asChild>
      <SignInButton />
    </Button>
  </SignedOut>
);
