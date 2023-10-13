import { useState, useEffect } from "react";
import LoadingSpinner from "~/utils/icons/loading";
import { SearchCardItem } from "./SearchCardItem";

function RenderSearchItems({ search }: { search: string }) {
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
        Faled to fetch items. Try reloading.
      </div>
    );

  return (
    <>
      {filterBySearch.map((item, index) => (
        <SearchCardItem key={index} {...item} />
      ))}
    </>
  );
}

export default RenderSearchItems;
