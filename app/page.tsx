"use client";
import { UserButton, useSession } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import LoadingPage from "./loading";
import OnboardingPage from "./onboadring";

export default function Home() {
  const { isLoaded, isSignedIn } = useSession();
  const router = useRouter();
  if (!isLoaded) {
    return <LoadingPage />;
  }
  if (isSignedIn) {
    router.push("/profile");
    return <LoadingPage />;
  }

  return (
    <>
      <OnboardingPage />;
    </>
  );
}
