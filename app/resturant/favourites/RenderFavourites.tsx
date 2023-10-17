"use client";
import { useState } from "react";
import { useFavourite } from "~/context/use-favourite";
import Image from "next/image";
import BgText from "~/utils/bg-text";
import LoadingSpinner from "~/utils/icons/loading";
import PopularItemCard from "~/utils/popular-item-card";
import { PrimaryBg } from "~/utils/primary-bg";

export function RenderFavourites() {
  const [isOrders, setIsOrders] = useState(true);
  return (
    <div className="pb-16 mt-5">
      <div className="relative flex max-w-md mx-auto border rounded-full overflow-clip gap-2">
        <PrimaryBg
          className={`absolute w-1/2 h-10 rounded-full bg-opacity-100 transition-all duration-300 ${
            isOrders ? "translate-x-0" : "translate-x-full"
          }`}
        />
        <button
          onClick={() => setIsOrders(true)}
          className="relative w-full p-2 font-semibold text-center rounded-full"
        >
          <div
            className={`transition-all duration-300 ${
              isOrders ? "text-white" : ""
            }`}
          >
            Food Orders
          </div>
        </button>
        <button
          onClick={() => setIsOrders(false)}
          className="relative w-full p-2 font-semibold text-center"
        >
          <div
            className={`transition-all duration-300 ${
              isOrders ? "" : "text-white"
            }`}
          >
            Resturant
          </div>
        </button>
      </div>
      <div className="mt-5">
        <RenderItems isOrders={isOrders} />
      </div>
    </div>
  );
}

function RenderItems({ isOrders }: { isOrders: boolean }) {
  const { loading, resturants, foodItems } = useFavourite();
  if (loading) return <LoadingSpinner className="mx-auto mt-5" />;
  if (!foodItems) {
    return <>Failed to get Favourite food items, please refresh</>;
  }

  if (isOrders) {
    return (
      <div className="flex flex-wrap gap-6">
        {foodItems.map((foodItem, index) => (
          <PopularItemCard key={index} {...foodItem} />
        ))}
      </div>
    );
  }
  if (!resturants) {
    return <>Failed to get Favourite food items, please refresh</>;
  }

  return (
    <div className="flex flex-wrap gap-6">
      {resturants.map((item, index) => (
        <PrimaryBg
          key={index}
          className="flex items-center w-full max-w-md p-3 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-md gap-3"
        >
          <Image
            alt={`${item.name}'s Logo'`}
            src={item.logo}
            width={80}
            height={80}
            className="object-cover rounded-md"
          />
          <div>
            <div>
              <BgText className="text-xl font-semibold sm:text-2xl text-opacity-80">
                {item.name}
              </BgText>
            </div>
            <div>
              <BgText className="text-xs sm:text-sm text-opacity-50">
                {item.address}
              </BgText>
            </div>
          </div>
        </PrimaryBg>
      ))}
    </div>
  );
}
