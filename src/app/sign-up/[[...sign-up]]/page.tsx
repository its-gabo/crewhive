import { type Metadata } from "next";

import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <div className="grid min-h-screen w-full place-items-center">
      <SignUp />
    </div>
  );
}
