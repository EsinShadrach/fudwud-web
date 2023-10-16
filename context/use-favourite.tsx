"use client";
import { StaticImageData } from "next/image";
import { createContext, useContext, useEffect, useState } from "react";
import burgerKing from "~/public/burger-king.png";
import dominos from "~/public/dominos.png";
import mcDonalds from "~/public/mc-donald.png";

type ResturantsType = {
  name: string;
  logo: string | StaticImageData;
  address: string;
};

interface FavouriteInterface {
  foodItems: FoodItem[] | null;
  resturants: ResturantsType[];
  loading: boolean;
  itemCount: number;
}

export function useFavourite() {
  const context = useContext(FavouriteContext);
  if (!context) {
    throw new Error("Favourite Provider not found");
  }
  return context;
}

export const FavouriteContext = createContext<FavouriteInterface | null>(null);
const resturantsArray: ResturantsType[] = [
  {
    name: "Mc Donalds",
    logo: mcDonalds,
    address: "3, random street off random avenue",
  },
  {
    name: "Burger King",
    logo: burgerKing,
    address: "3, random street off random avenue",
  },
  {
    name: "Dominos",
    logo: dominos,
    address: "3, random street off random avenue",
  },
];

export function FavouriteProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [itemCount, setItemCount] = useState(0);
  const [foodItems, setFoodItems] = useState<FoodItem[] | null>(null);
  const [resturants] = useState<ResturantsType[]>(resturantsArray);

  useEffect(() => {
    async function getFeaturedItem() {
      try {
        const response = await fetch("/api/featured/");
        if (response.ok) {
          const responseData: FoodItem[] = await response.json();
          setFoodItems(responseData.slice(0, 10));
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

  const contextValue: FavouriteInterface = {
    foodItems,
    resturants,
    loading,
    itemCount,
  };
  return (
    <FavouriteContext.Provider value={contextValue}>
      {children}
    </FavouriteContext.Provider>
  );
}
