"use client";

import { SignedOut, SignUpButton } from "@clerk/nextjs";
import { Button } from "~/components/ui/button";

export const SignUp = () => (
  <SignedOut>
    <Button asChild>
      <SignUpButton />
    </Button>
  </SignedOut>
);
