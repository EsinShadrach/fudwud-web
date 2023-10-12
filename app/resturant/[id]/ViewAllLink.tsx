"use client";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ViewAllLink({ table, path }: { table?: string; path: string }) {
  const pathname = usePathname();
  let redirectPath = `${pathname}/${path}`;
  if (table) {
    redirectPath = `${pathname}/${path}?table=${table}`;
  }
  return (
    <Link
      href={redirectPath}
      className="flex items-center p-1 px-2 text-sm rounded-full hover:bg-gray-200 gap-1"
    >
      View all <ChevronRightIcon className="w-4 h-4" />
    </Link>
  );
}
