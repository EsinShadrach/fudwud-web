"use client";
import Link from "next/link";
import { useTableData } from "~/context/use-table";
import { PrimaryBg } from "~/utils/primary-bg";

type BackButtonProp = {
  link?: string;
};

export function BackButton({ link }: BackButtonProp) {
  const { table, resturantID } = useTableData();
  const path = `/resturant/${resturantID}/?table=${table}`;

  return (
    <Link href={link ?? path} className="m-3">
      <PrimaryBg className="flex items-center justify-center p-3 rounded-lg shadow-lg w-9 h-9 bg-opacity-0 hover:bg-opacity-5 transition-all duration-300">
        &lt;-
      </PrimaryBg>
    </Link>
  );
}
