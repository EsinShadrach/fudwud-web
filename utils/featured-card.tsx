import Image from "next/image";
import Link from "next/link";
import {useTableData} from "~/context/use-table";
import BgBackground from "~/utils/bg-bg";
import BgText from "~/utils/bg-text";
import ClockIcon from "~/utils/icons/clock";
import {HeartIcon} from "~/utils/icons/heart-active";
import StarIcon from "~/utils/icons/star";
import {PrimaryBg} from "~/utils/primary-bg";
export function FeaturedItemCard({
  categories,
  customerFavorite,
  id,
  image,
  name,
  prepareTime,
  rating,
  ratingCount,
}: FoodItem) {
  const { resturantID, table } = useTableData();
  const path = `/resturant/${resturantID}/menu/${id}/?table=${table}`;
  return (
    <div className="flex-shrink-0 w-full max-w-md overflow-hidden shadow-lg rounded-xl hover:shadow-xl transiton-all duration-300">
      <Link href={path}>
        <div className="relative">
          <div className="absolute inset-0 flex items-start justify-between p-3 bg-black/20">
            <BgBackground className="flex items-center p-1 px-2 rounded-full">
              <BgText className="text-sm font-semibold">{rating}</BgText>
              <StarIcon className="w-6 h-6" />
              <BgText className="text-xs opacity-50">
                ({ratingCount - 1}+)
              </BgText>
            </BgBackground>
            {customerFavorite && (
              <PrimaryBg className="flex items-center justify-center p-1 text-white rounded-full">
                <HeartIcon className="w-5 h-5" />
              </PrimaryBg>
            )}
          </div>
          <Image
            src={image}
            alt={name}
            width={448}
            height={240}
            className="object-cover h-60"
          />
        </div>
        <div className="p-3 space-y-0.5">
          <BgText className="font-semibold opacity-90">{name}</BgText>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-4 h-4" />
            <BgText className="opacity-75">
              <small>{prepareTime}</small>
            </BgText>
          </div>
          <div className="flex items-center pt-2 gap-3">
            {categories.map((category, index) => (
              <ProductOptionPills key={index} text={`${category}`} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

function ProductOptionPills({ text }: { text: string }) {
  return (
    <div className="text-gray-400 bg-gray-200 rounded-md text-center max-w-[8rem] overflow-hidden p-2 text-xs text-ellipsis whitespace-nowrap">
      {text}
    </div>
  );
}
