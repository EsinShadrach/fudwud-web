"use client";
import { useClerk } from "@clerk/nextjs";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import PrimaryBorder from "~/utils/primary-border";

export function AccountSettingsButton() {
  const { openUserProfile } = useClerk();
  return (
    <button onClick={() => openUserProfile()} className="w-full max-w-md">
      <small className="opacity-0">Account setting</small>
      <PrimaryBorder className="flex items-center justify-center w-full max-w-md p-3 text-center border rounded-full gap-1 hover:bg-gray-200/20">
        Account settings <Cog6ToothIcon className="w-6 h-6" />
      </PrimaryBorder>
    </button>
  );
}
