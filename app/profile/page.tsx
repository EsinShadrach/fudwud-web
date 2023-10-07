import { currentUser, SignInButton, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import { PrimaryBg } from "~/utils/primary-bg";

export async function generateMetadata() {
  const user = await currentUser();
  return {
    title: `${user?.username} - Profile`,
  };
}

export default async function ProfilePage() {
  const user = await currentUser();
  if (!user) {
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
  return (
    <section className="container p-3 mx-auto">
      <Image
        alt={`${user?.username}'s Profile Photo`}
        src={user?.imageUrl!}
        width={48}
        height={48}
        className={`rounded-full`}
      />
      <SignOutButton />
      <br />
      Hello -&gt; {user?.username}
      <div>Page still in development</div>
    </section>
  );
}
