import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import onboardingImage from "~/public/onboarding-img.jpeg";
import BgText from "~/utils/bg-text";
import { OAuthRow } from "./OAuthRow";

export default function OnboardingPage() {
  return (
    <main className="relative">
      <Image
        src={onboardingImage}
        alt="on boarding image"
        placeholder="blur"
        className={`h-screen object-cover absolute inset-0 object-left-top`}
      />
      <div className="relative min-h-screen bg-gradient-to-b from-[#494D6300] to-[#191B2F] flex flex-col">
        <section className="container p-2 py-6 mx-auto">
          <div className="flex justify-end">
            <UserButton afterSignOutUrl="/" />
            {/* <button className="ml-auto bg-white px-6 py-1.5 rounded-full shadow-xl hover:bg-opacity-10 transition-all duration-300">
                 Skip
               </button>
           */}
          </div>
          <div
            className={`font-semibold sm:text-6xl text-4xl pt-16 sm:text-center space-y-2`}
          >
            <BgText>Welcome to</BgText> <span>Fudwud</span>
            <div className={`text-[#30384F] sm:text-xl text-lg font-normal`}>
              Your favourite foods delivered fast to you.
            </div>
          </div>
        </section>
        <section className="container p-2 py-6 mx-auto mt-auto mb-10 space-y-6">
          <div className="flex items-center justify-center space-x-6">
            <div className="w-full h-px max-w-xs bg-white" />
            <div className="text-white whitespace-nowrap">Sign in with</div>
            <div className="w-full h-px max-w-xs bg-white" />
          </div>
          <OAuthRow />
          <div className="max-w-md mx-auto">
            <Link href={"/sign-in"}>
              <div className="w-full max-w-md py-3 mx-auto font-semibold text-center text-white border border-white rounded-full bg-white/20 backdrop-blur-sm">
                Start with email
              </div>
            </Link>
          </div>
          <div className="flex justify-center text-center text-white gap-1">
            <span className="p-0.5">Already have an account?</span>
            <Link
              href={"/sign-in"}
              className="hover:bg-black/20 p-0.5 rounded-md transiton-all duration-300 px-2"
            >
              Sign in
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
