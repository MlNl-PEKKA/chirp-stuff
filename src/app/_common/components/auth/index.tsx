"use client";

import { SignIn } from "./signIn";
import { SignUp } from "./signUp";
import { User } from "./user";

export const Auth = () => {
  return (
    <>
      <SignIn />
      <SignUp />
      <User />
    </>
  );
};
