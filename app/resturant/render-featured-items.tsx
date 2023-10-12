"use client";
import { useEffect, useState } from "react";
import { FeaturedItemCard } from "~/utils/featured-card";

export default function RenderFeaturedItems() {
  const [featuredItem, setFeaturedItem] = useState<FoodItem[] | null>(null);
  useEffect(() => {
    async function getFeaturedItem() {
      try {
        const response = await fetch("/api/featured/");
        if (response.ok) {
          const responseData: FoodItem[] = await response.json();
          setFeaturedItem(responseData);
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
    <div className="flex p-10 px-0 pt-0 overflow-x-auto gap-6 scrollbar-none">
      {featuredItem.map((item, index) => (
        <FeaturedItemCard {...item} key={index} />
      ))}
    </div>
  );
}
