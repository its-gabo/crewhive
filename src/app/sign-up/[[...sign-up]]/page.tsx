import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="grid min-h-screen w-full place-items-center">
      <SignUp />
    </div>
  );
}
