"use client";
import Link from "next/link";
import { useTableData } from "~/context/use-table";
import BgBackground from "~/utils/bg-bg";
import { PrimaryBg } from "~/utils/primary-bg";

type BackButtonProp = {
  link?: string;
  hasMargin?: boolean;
};

export function BackButton({ link, hasMargin = true }: BackButtonProp) {
  const { table, resturantID } = useTableData();
  const path = `/resturant/${resturantID}/?table=${table}`;

  return (
    <Link
      href={link ?? path}
      className={`transition-all duration-300 ${hasMargin ? "m-3" : "m-0"}`}
    >
      <BgBackground className="rounded-lg shadow-lg bg-opacity-100">
        <PrimaryBg className="flex items-center justify-center p-3 w-9 h-9 bg-opacity-0 hover:bg-opacity-5 transition-all duration-300">
          &lt;-
        </PrimaryBg>
      </BgBackground>
    </Link>
  );
}
