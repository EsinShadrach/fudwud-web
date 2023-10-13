"use client";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useTableData } from "~/context/use-table";
import BgBackground from "~/utils/bg-bg";
import BgText from "~/utils/bg-text";
import { HeartIcon } from "~/utils/icons/heart-active";
import { PrimaryBg } from "~/utils/primary-bg";

export function SearchCardItem({
  name,
  id,
  image,
  prepareTime,
  price,
  rating,
  ratingCount,
}: FoodItem) {
  const { resturantID, table } = useTableData();
  const path = `/resturant/${resturantID}/order/${id}/?table=${table}`;
  return (
    <Link href={path} className="w-full max-w-md">
      <div className="flex w-full h-32 max-w-md overflow-hidden rounded-lg bg-gray-200/20 gap-3 transition-all duration-300 hover:bg-gray-200/40">
        <Image
          alt={name}
          width={128}
          src={image}
          height={128}
          className="object-cover w-full max-w-[6rem] h-auto sm:h-32 sm:max-w-[8rem]"
        />
        <div className="w-full p-2 space-y-3">
          <div className="flex items-center justify-between w-full font-semibold">
            {name}
            <PrimaryBg className="flex items-center justify-center p-1 text-white rounded-full">
              <HeartIcon className="w-5 h-5" />
            </PrimaryBg>
          </div>
          <div className="flex items-center justify-between gap-2">
            ${price}
            <BgBackground className="flex items-center p-1 px-2 rounded-full gap-3">
              <BgText className="text-xs font-semibold">{rating}</BgText>
              <StarIcon className="w-4 h-4" />
              <BgText className="text-xs opacity-50">
                ({ratingCount - 1}+)
              </BgText>
            </BgBackground>
          </div>
          <div className="flex items-center text-xs italic gap-1">
            Prepare time: {prepareTime}
          </div>
        </div>
      </div>
    </Link>
  );
}
