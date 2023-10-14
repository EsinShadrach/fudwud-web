"use client";
import { useClerk } from "@clerk/nextjs";
import { PowerIcon } from "@heroicons/react/24/solid";
import BgBackground from "./bg-bg";

export function LogoutButton() {
  const { signOut } = useClerk();
  return (
    <button onClick={() => signOut()}>
      <BgBackground className="flex items-center p-1 rounded-full md:pr-2 w-fit gap-1 hover:brightness-90 transition-all duration-300 active:scale-95 bg-opacity-100">
        <PowerIcon className={`h-6 w-6`} />
        <span className="hidden md:block">Logout</span>
      </BgBackground>
    </button>
  );
}
