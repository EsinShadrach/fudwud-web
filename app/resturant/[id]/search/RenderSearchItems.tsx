import notFound from "~/public/not-found.png";
import { useState, useEffect } from "react";
import LoadingSpinner from "~/utils/icons/loading";
import { SearchCardItem } from "./SearchCardItem";
import Image from "next/image";
import BgText from "~/utils/bg-text";

type WithSearch = string;

function RenderSearchItems({ search }: { search: WithSearch }) {
  const [items, setItems] = useState<FoodItem[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [filterBySearch, setFilterBySearch] = useState<FoodItem[] | null>(null);

  useEffect(() => {
    async function getFeaturedItem() {
      setLoading(true);
      try {
        const response = await fetch("/api/featured/");
        if (response.ok) {
          const responseData: FoodItem[] = await response.json();
          setItems(responseData);

          const filteredItems = responseData.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          );
          setFilterBySearch(filteredItems);
        }
      } catch (error) {
        const errorM = error as Error;
        console.error(errorM.message);
      } finally {
        setLoading(false);
      }
    }
    getFeaturedItem();
  }, [search]);
  if (loading)
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <LoadingSpinner />
      </div>
    );

  if (!items || !filterBySearch)
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        Failed to fetch items. Try reloading.
      </div>
    );

  return (
    <>
      {filterBySearch.length !== 0 ? (
        filterBySearch.map((item, index) => (
          <SearchCardItem key={index} {...item} />
        ))
      ) : (
        <EmptySearch search={search} />
      )}
    </>
  );
}

export default RenderSearchItems;

function EmptySearch({ search }: { search: WithSearch }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pt-5 gap-3">
      <Image alt="Not Found" src={notFound} className="w-full max-w-md" />
      <BgText className="text-2xl font-semibold text-opacity-75">
        Couldn&apos;t Find {search}
      </BgText>
      <div style={{ color: "rgb(255 50 20 / 0.2)" }}>apple</div>
    </div>
  );
}
