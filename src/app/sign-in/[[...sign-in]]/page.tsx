import { type Metadata } from "next";

import { SignIn } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return (
    <div className="grid min-h-screen w-full place-items-center">
      <SignIn />
    </div>
  );
}
