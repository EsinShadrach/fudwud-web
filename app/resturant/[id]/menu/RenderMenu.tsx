"use client";

import { useDropDownOptions } from "~/context/use-dropdown";
import { useMenu } from "~/context/use-menu";
import LoadingSpinner from "~/utils/icons/loading";
import PopularItemCard from "~/utils/popular-item-card";

export function RenderMenu() {
  const { menu, loading } = useMenu();
  const { option } = useDropDownOptions();
  if (loading) return <LoadingSpinner className="mx-auto mt-5" />;
  if (!menu) return <>Failed to get menu, try refreshing</>;
  const filterMenu = menu.filter((item) => {
    if (option === "popular") {
      return item.customerFavorite;
    }
    if (option === "featured") {
      return item.featured;
    }
    if (option === "most priced") {
      return menu.sort((a, b) => b.price - a.price);
    }
    if (option === "least priced") {
      return menu.sort((a, b) => a.price - b.price);
    }
    return true;
  });
  return (
    <div className="flex flex-wrap mt-5 gap-6">
      {filterMenu.map((item, index) => (
        <PopularItemCard key={index} {...item} />
      ))}
    </div>
  );
}
