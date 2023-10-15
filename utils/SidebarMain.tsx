"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useSidebarState } from "~/context/sidebar-context";
import BgText from "./bg-text";
import { LogoutButton } from "./LogoutButton";
import { Routes } from "./Routes";
import { titleCase } from "./titleCase";

interface SidebarMainInterface {
  imageUrl: string;
  username: string;
  emailAddresses: string;
}

export function SidebarMain({
  imageUrl,
  username,
  emailAddresses,
}: SidebarMainInterface) {
  const { handleClose, opened, sidebarRef } = useSidebarState();

  return (
    <aside
      ref={sidebarRef}
      className={`fixed flex flex-col w-full h-screen max-w-xs p-3 py-4 overflow-auto border-r-2 border-gray-200 md:relative bg-inherit transition-all duration-300 z-50 ${
        opened ? "translate-x-0" : "md:translate-x-0 -translate-x-full"
      }`}
    >
      <button
        onClick={handleClose}
        className="block p-1 ml-auto rounded-full bg-gray-300/20 md:hidden"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>
      <Link href="/profile" className="rounded-full w-fit">
        <Image
          src={imageUrl}
          alt={`${username}'s Profile Image`}
          height={100}
          width={100}
          className="rounded-full"
          draggable={"false"}
        />
      </Link>
      <div className="mt-4">
        <BgText className="text-2xl font-medium sm:text-3xl text-opacity-90">
          {titleCase(username)}
        </BgText>
      </div>
      <div>
        <BgText className="text-sm text-opacity-50 sm:text-base">
          <div className="w-full max-w-xs overflow-hidden text-ellipsis">
            {emailAddresses}
          </div>
        </BgText>
      </div>
      <Routes />
      <LogoutButton />
    </aside>
  );
}
