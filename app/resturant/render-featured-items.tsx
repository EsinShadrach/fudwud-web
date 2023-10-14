"use client";
import { useEffect, useState } from "react";
import { useMenu } from "~/context/use-menu";
import BgText from "~/utils/bg-text";
import { FeaturedItemCard } from "~/utils/featured-card";
import LoadingSpinner from "~/utils/icons/loading";
import PopularItemCard from "~/utils/popular-item-card";

export default function RenderFeaturedItems() {
  const { featured, loading, menu, popular } = useMenu();
  if (loading)
    return (
      <div className="flex items-center justify-center w-full h-52">
        <LoadingSpinner />
      </div>
    );

  if (!featured) return <>Couldn&apos;t fetch Items, try reloading</>;

  return (
    <>
      <div className="flex p-10 px-0 pt-0 overflow-x-auto gap-6 scrollbar-none">
        {featured.map((item, index) => (
          <FeaturedItemCard {...item} key={index} />
        ))}
      </div>
      <div className="mt-10">
        <BgText className="text-lg font-semibold sm:text-xl text-opacity-90">
          Popular Items
        </BgText>
        <div className="flex flex-wrap mt-5 gap-6">
          {popular ? (
            popular.map((item, index) => (
              <PopularItemCard key={index} {...item} />
            ))
          ) : (
            <>Couldn&apos;t fetch Items, try reloading</>
          )}
        </div>
      </div>
    </>
  );
}
