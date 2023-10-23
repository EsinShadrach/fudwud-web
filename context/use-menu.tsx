"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface MenuInterface {
  menu: FoodItem[] | null;
  featured: FoodItem[] | null;
  popular: FoodItem[] | null;
  loading: boolean;
  itemCount: number;
  handleSelect: (foodItemId: number | string, addOnName: string) => void;
  getById(id: string | number): FoodItem | null;
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("Menu Provider not found");
  }
  return context;
}

export const MenuContext = createContext<MenuInterface | null>(null);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(0);
  const [menu, setMenu] = useState<FoodItem[] | null>(null);
  const [featured, setFeatured] = useState<FoodItem[] | null>(null);
  const [popular, setPopular] = useState<FoodItem[] | null>(null);

  useEffect(() => {
    async function getFeaturedItem() {
      try {
        const response = await fetch("/api/featured/");
        if (response.ok) {
          const responseData: FoodItem[] = await response.json();
          const featuredFilter = responseData.filter((item) => item.featured);
          const popularItems = responseData.filter(
            (item) => item.customerFavorite
          );
          setMenu(responseData);
          setFeatured(featuredFilter);
          setPopular(popularItems);
          setItemCount(responseData.length);
        }
      } catch (error) {
        const errorM = error as Error;
        console.error(errorM.message);
      } finally {
        setLoading(false);
      }
    }
    getFeaturedItem();
  }, []);

  function handleSelect(foodItemId: number | string, addOnName: string) {
    if (menu) {
      setMenu((prevMenu) =>
        prevMenu!.map((item) => {
          if (item.id === foodItemId) {
            return {
              ...item,
              addOns: item.addOns.map((addOn) =>
                addOn.name === addOnName
                  ? { ...addOn, selected: !addOn.selected }
                  : addOn
              ),
            };
          }
          return item;
        })
      );
    }
  }
  function getById(id: string | number): FoodItem | null {
    if (menu) {
      const gottenItem = menu.find((item) => item.id === id);
      if (gottenItem) {
        return gottenItem;
      }
      return null;
    }
    return null;
  }
  const contextValue: MenuInterface = {
    menu,
    featured,
    popular,
    loading,
    itemCount,
    handleSelect,
    getById,
  };
  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
}
