import Image from "next/image";
import Link from "next/link";
import { useTableData } from "~/context/use-table";
import BgBackground from "./bg-bg";
import BgText from "./bg-text";
import { HeartIcon } from "./icons/heart-active";
import StarIcon from "./icons/star";
import { PrimaryBg } from "./primary-bg";

export default function PopularItemCard({
  categories,
  id,
  image,
  name,
  rating,
  ratingCount,
  price,
}: FoodItem) {
  const { resturantID, table } = useTableData();
  const path = `/resturant/${resturantID}/menu/${id}/?table=${table}`;
  return (
    <Link href={path}>
      <div className="w-full max-w-xs overflow-hidden shadow-md rounded-2xl bg-inherit">
        <div className="relative">
          <div className="absolute inset-0 flex flex-col p-3 pb-0 bg-black/20 rounded-b-2xl">
            <div className="flex justify-between">
              <BgBackground className="flex items-center justify-center p-1 text-xs font-semibold rounded-full bg-inherit w-fit bg-opacity-100">
                $<BgText className="text-opacity-100">{price}</BgText>
              </BgBackground>
              <div>
                <PrimaryBg className="flex items-center justify-center p-1 text-white rounded-full bg-opacity-100">
                  <HeartIcon className="w-5 h-5" />
                </PrimaryBg>
              </div>
            </div>
            <BgBackground className="flex items-center p-1 px-2 mt-auto rounded-full shadow-lg w-fit translate-y-1/2 bg-opacity-100">
              <BgText className="text-sm font-semibold text-opacity-100">
                {rating}
              </BgText>
              <StarIcon className="w-6 h-6" />
              <BgText className="text-xs text-opacity-50">
                ({ratingCount}+)
              </BgText>
            </BgBackground>
          </div>
          <Image
            src={image}
            alt={name}
            width={320}
            height={176}
            className="object-cover h-44 rounded-b-2xl"
          />
        </div>
        <div className="p-3 pt-8">
          <BgText className="font-semibold text-opacity-90">{name}</BgText>
          <div className="mt-1">
            {categories.map((category, index) => (
              <BgText
                key={index}
                className="text-xs opacity-50 text-opacity-100"
              >
                {category}
                <span>{index != 2 && ","} </span>
              </BgText>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
