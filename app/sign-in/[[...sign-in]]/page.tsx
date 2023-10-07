import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import "~/public/auth.css";
import logo from "~/public/logo-new.png";

export default function SignInPage() {
  return (
    <section
      className={`min-h-screen flex justify-center items-center p-3 flex-col gap-3`}
    >
      <Image alt={"Fudwud logo"} src={logo} />
      <div className="text-xl font-semibold sm:text-2xl">
        Login to your fudwud account
      </div>
      <SignIn afterSignInUrl={"/profile"} afterSignUpUrl={"/profile"} />
    </section>
  );
}
