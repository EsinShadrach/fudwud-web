"use client";
import { useClerk } from "@clerk/nextjs";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import BgText from "~/utils/bg-text";

interface ActionTileInterface {
  title: string;
  subtitle: string;
  route: string;
  icon: JSX.Element;
}
export function ActionTile({
  route,
  subtitle,
  title,
  icon,
}: ActionTileInterface) {
  const { openUserProfile } = useClerk();
  function handleClick() {
    openUserProfile();
  }
  return (
    <div
      onClick={handleClick}
      className="flex items-center w-full max-w-xl p-3 border-b hover:bg-gray-300/20 transition-all duration-300 gap-3 group border-inherit"
    >
      <BgText>{icon}</BgText>
      <div>
        <div>
          <BgText>{title}</BgText>
        </div>
        <div className="opacity-50">
          <small className="max-w-xs overflow-hidden text-xs sm:text-sm whitespace-nowrap">
            <BgText>{subtitle}</BgText>
          </small>
        </div>
      </div>
      <div className="ml-auto transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
        <ChevronRightIcon className="w-6 h-6" />
      </div>
    </div>
  );
}
