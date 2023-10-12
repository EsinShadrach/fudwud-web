"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FilterIcon from "~/utils/icons/filter";

export default function FilterButton({ table }: { table?: string }) {
  const pathname = usePathname();
  let redirectPath = `${pathname}/filter/`;
  if (table) {
    redirectPath = `${pathname}/filter/?table=${table}`;
  }

  return (
    <Link
      href={redirectPath}
      className="p-2 rounded-lg shadow-lg bg-inherit hover:opacity-90 transition-all duration-300 active:scale-95"
    >
      <FilterIcon />
    </Link>
  );
}
