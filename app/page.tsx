"use client";
import { useSession } from "@clerk/nextjs";
import OnboardingPage from "./onboadring";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const { isLoaded, isSignedIn } = useSession();
  if (!isLoaded) {
    return <div> Checking status (TODO: Add a loading state or spinner)</div>;
  }
  if (isSignedIn) {
    return <ProfilePage />;
  }
  return (
    <>
      <OnboardingPage />;
    </>
  );
}

function ProfilePage() {
  return (
    <div className="container p-3 mx-auto">
      <UserButton />
      Render profile page if you&apos;re authenticated here
    </div>
  );
}
