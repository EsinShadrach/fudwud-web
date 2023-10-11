"use client";
import { EmailAddress } from "@clerk/nextjs/server";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BgText from "./bg-text";
import { LogoutButton } from "./LogoutButton";
import { Routes } from "./Routes";
import { titleCase } from "./titleCase";

interface SidebarMainInterface {
  imageUrl: string;
  username: string;
  emailAddresses: EmailAddress[];
}

export function SidebarMain({
  imageUrl,
  username,
  emailAddresses,
}: SidebarMainInterface) {
  const [opened, setOpened] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  function closeSidebar() {
    setOpened(false);
  }
  useEffect(() => {
    //
    function handleClicks(e: MouseEvent) {
      console.log(e.target === sidebarRef.current);
    }

    window.addEventListener("click", handleClicks);
    return () => window.removeEventListener("click", handleClicks);
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className={`fixed flex flex-col w-full h-screen max-w-xs p-3 py-4 overflow-auto border-r-2 border-gray-200 sm:relative bg-inherit transition-all duration-300 ${
        opened ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        onClick={closeSidebar}
        className="p-1 ml-auto rounded-full bg-gray-300/20"
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
        <BgText className="text-2xl font-medium sm:text-3xl">
          {titleCase(username)}
        </BgText>
      </div>
      <div>
        <BgText className="text-sm opacity-50 sm:text-base">
          {emailAddresses[0].emailAddress}
        </BgText>
      </div>
      <Routes />
      <LogoutButton />
    </aside>
  );
}
