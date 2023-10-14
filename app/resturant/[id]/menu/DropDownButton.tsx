"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useDropDownOptions } from "~/context/use-dropdown";
import { PrimaryBg } from "~/utils/primary-bg";

export function DropDownButton() {
  const { option, handleOption } = useDropDownOptions();
  return (
    <PrimaryBg className="flex items-center px-3 py-1 rounded-full gap-3 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300">
      {option} <ChevronDownIcon className="w-4 h-4" />
    </PrimaryBg>
  );
}
