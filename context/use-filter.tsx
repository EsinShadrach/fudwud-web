"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface FilterContextInterface {
  loading: boolean;
  filters: FilterCategory[] | null;
  handleSelect: (categoryIndex: number, itemIndex: number) => void;
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw Error("Filter context not added");
  }
  return context;
}

export const FilterContext = createContext<FilterContextInterface | null>(null);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [filters, setFilter] = useState<FilterCategory[] | null>(null);

  useEffect(() => {
    async function getFilters() {
      try {
        const response = await fetch("/api/filter");
        if (response.ok) {
          const data: FilterCategory[] = await response.json();
          setFilter(data);
        }
      } catch (error) {
        const errorM = error as Error;
        console.log(errorM.message);
      } finally {
        setLoading(false);
      }
    }
    getFilters();
  }, []);

  function handleSelect(categoryIndex: number, itemIndex: number) {
    if (filters) {
      setFilter((prevFilters) =>
        prevFilters!.map((category, index) =>
          index === categoryIndex
            ? {
                ...category,
                filter: category.filter.map((item, subIndex) =>
                  subIndex === itemIndex
                    ? { ...item, selected: !item.selected }
                    : item
                ),
              }
            : category
        )
      );
    }
  }

  const contextValue = {
    loading,
    filters,
    handleSelect,
  };
  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
}
