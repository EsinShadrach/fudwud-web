import { SignInButton } from "@clerk/nextjs";
import { PrimaryBg } from "~/utils/primary-bg";

export function UnAuthenticatedProfile() {
  return (
    <section className="container p-3 mx-auto">
      <div>You aren&apos;t signed in</div>
      <SignInButton>
        <button>
          <PrimaryBg className="p-3 text-white cursor-pointer w-fit rounded-md">
            Sign in
          </PrimaryBg>
        </button>
      </SignInButton>
    </section>
  );
}
