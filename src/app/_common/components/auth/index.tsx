"use client";

import { SignIn } from "./sign-in";
import { SignUp } from "./sign-up";
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
