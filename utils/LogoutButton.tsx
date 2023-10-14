"use client";
import { useClerk } from "@clerk/nextjs";
import { PowerIcon } from "@heroicons/react/24/solid";
import BgBackground from "./bg-bg";
import { PrimaryBg } from "./primary-bg";
import { PrimaryShadow } from "./primary-shadow";

export function LogoutButton() {
  const { signOut } = useClerk();
  return (
    <button onClick={() => signOut()} className="mt-auto rounded-full w-fit">
      <PrimaryBg className="p-1 pr-3 mt-auto rounded-full w-fit bg-opacity-100">
        <PrimaryShadow>
          <div className="flex items-center gap-3">
            <BgBackground className="p-1 rounded-full">
              <PowerIcon className="w-6 h-6" />
            </BgBackground>
            <div className="text-sm font-medium text-white">Logout</div>
          </div>
        </PrimaryShadow>
      </PrimaryBg>
    </button>
  );
}
