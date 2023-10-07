import { SignUp } from "@clerk/nextjs";
import "~/public/auth.css";
import SignUpTitle from "./title";

export default function SignUpPage() {
  return (
    <section
      className={`min-h-screen flex justify-center items-center p-3 flex-col gap-3`}
    >
      <SignUpTitle />
      <SignUp afterSignInUrl={"/profile"} afterSignUpUrl={"/profile"} />
    </section>
  );
}
