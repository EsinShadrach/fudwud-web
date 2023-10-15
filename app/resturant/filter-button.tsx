"use client";
import Link from "next/link";
import { useTableData } from "~/context/use-table";
import FilterIcon from "~/utils/icons/filter";
import { PrimaryBg } from "~/utils/primary-bg";
import PrimaryBorder from "~/utils/primary-border";

export default function FilterButton() {
  const { resturantID, table } = useTableData();
  const redirectPath = `/resturant/${resturantID}/filter/?table=${table}`;
  return (
    <Link href={redirectPath}>
      <PrimaryBorder className="border rounded-lg border-opacity-20">
        <PrimaryBg className="p-2 rounded-lg shadow-xl bg-opacity-0 transition-all duration-300 hover:bg-opacity-10 active:scale-95">
          <FilterIcon className="w-6 h-6" />
        </PrimaryBg>
      </PrimaryBorder>
    </Link>
  );
}
