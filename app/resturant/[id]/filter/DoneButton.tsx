"use client";
import { useTableData } from "~/context/use-table";
import BgText from "~/utils/bg-text";
import { PrimaryBg } from "~/utils/primary-bg";
import Link from "next/link";

export function DoneButton() {
  const { table, resturantID } = useTableData();
  const path = `/resturant/${resturantID}/?table=${table}`;

  return (
    <Link
      href={path}
      className="rounded-full group active:scale-95 transition-all duration-300"
    >
      <PrimaryBg className="px-3 py-1 text-sm rounded-full bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 group-focus:bg-opacity-10">
        <BgText className="text-opacity-100">Done</BgText>
      </PrimaryBg>
    </Link>
  );
}
