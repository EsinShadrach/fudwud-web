"use client";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PrimaryBg } from "~/utils/primary-bg";

export function ViewAllLink({ table }: { table?: string }) {
  const pathname = usePathname();
  let redirectPath = `${pathname}/menu/`;
  if (table) {
    redirectPath = `${pathname}/menu?table=${table}`;
  }
  return (
    <Link href={redirectPath} className="">
      <PrimaryBg className="flex items-center p-1 px-2 text-sm rounded-full bg-opacity-0 transition-all duration-300 hover:bg-opacity-20 gap-1">
        View all <ChevronRightIcon className="w-4 h-4" />
      </PrimaryBg>
    </Link>
  );
}
