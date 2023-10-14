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
  customerFavorite,
}: FoodItem) {
  const { resturantID, table } = useTableData();
  const path = `/resturant/${resturantID}/menu/${id}/?table=${table}`;
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
          <BgText className="flex items-center justify-between w-full font-semibold text-opacity-90">
            {name}
            {customerFavorite && (
              <PrimaryBg className="flex items-center justify-center p-1 text-white rounded-full bg-opacity-100">
                <HeartIcon className="w-5 h-5" />
              </PrimaryBg>
            )}
          </BgText>
          <BgText className="flex items-center justify-between gap-2">
            ${price}
            <BgBackground className="flex items-center p-1 px-2 rounded-full gap-3 bg-opacity-100">
              <BgText className="text-xs font-semibold text-opacity-100">
                {rating}
              </BgText>
              <StarIcon className="w-4 h-4" />
              <BgText className="text-xs text-opacity-50">
                ({ratingCount - 1}+)
              </BgText>
            </BgBackground>
          </BgText>
          <div className="flex items-center text-xs italic gap-1">
            Prepare time: {prepareTime}
          </div>
        </div>
      </div>
    </Link>
  );
}
