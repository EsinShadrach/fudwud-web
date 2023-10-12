"use client";
import { useEffect, useState } from "react";
import BgText from "~/utils/bg-text";
import { FeaturedItemCard } from "~/utils/featured-card";
import PopularItemCard from "~/utils/popular-item-card";

export default function RenderFeaturedItems() {
  const [featuredItem, setFeaturedItem] = useState<FoodItem[] | null>(null);
  const [popularItem, setPopularItem] = useState<FoodItem[] | null>(null);

  useEffect(() => {
    async function getFeaturedItem() {
      try {
        const response = await fetch("/api/featured/");
        if (response.ok) {
          const responseData: FoodItem[] = await response.json();
          setFeaturedItem(responseData);
          const popular = responseData.filter((item) => item.customerFavorite);
          setPopularItem(popular);
        }
      } catch (error) {
        const errorM = error as Error;
        console.error(errorM.message);
      }
    }
    getFeaturedItem();
  }, []);
  if (!featuredItem) return <></>;

  return (
    <>
      <div className="flex p-10 px-0 pt-0 overflow-x-auto gap-6 scrollbar-none">
        {featuredItem.map((item, index) => (
          <FeaturedItemCard {...item} key={index} />
        ))}
      </div>
      <div className="mt-10">
        <BgText className="text-lg font-semibold sm:text-xl">
          Popular Items
        </BgText>
        <div className="flex flex-wrap mt-5 gap-6">
          {popularItem ? (
            popularItem.map((item, index) => (
              <PopularItemCard key={index} {...item} />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

