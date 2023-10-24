"use client";
import { useRouter } from "next/navigation";
import BgBackground from "~/utils/bg-bg";
import { PrimaryBg } from "~/utils/primary-bg";

export function GoBackButton() {
  const router = useRouter();
  function handleBack() {
    router.back();
  }
  return (
    <button className="rounded-lg" onClick={handleBack}>
      <BgBackground className="rounded-lg shadow-lg bg-opacity-100">
        <PrimaryBg className="flex items-center justify-center p-3 w-9 h-9 bg-opacity-0 hover:bg-opacity-5 transition-all duration-300">
          &lt;-
        </PrimaryBg>
      </BgBackground>
    </button>
  );
}
