"use client";

import { CheckIcon } from "@heroicons/react/24/solid";
import { useFilter } from "~/context/use-filter";
import BgBackground from "~/utils/bg-bg";
import BgText from "~/utils/bg-text";
import LoadingSpinner from "~/utils/icons/loading";
import { PrimaryBg } from "~/utils/primary-bg";

export function RenderFilters() {
  const { filters, loading, handleSelect } = useFilter();
  if (loading) return <LoadingSpinner className="mx-auto mt-5" />;
  if (!filters) return <>Failed to fetch filters, try reloading</>;

  return (
    <div className="mt-10 divide-y-2 divide-opacity-30 space-y-4">
      {filters.map((category, index) => (
        <div key={index} className="py-4 divide-y divide-opacity-30 space-y-3">
          <BgText className="text-xl font-semibold text-opacity-50">
            {category.name}
          </BgText>
          <div className="flex flex-col w-full pt-4 gap-2">
            {category.filter.map((filterItem, index2) => (
              <button
                onClick={() => handleSelect(index, index2)}
                key={index2}
                className="flex justify-start"
              >
                <PrimaryBg className="flex items-center justify-between w-full p-1 px-3 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-md">
                  <BgText className="text-opacity-50">{filterItem.name}</BgText>
                  <BgBackground className="flex items-center justify-center w-5 h-5 border bg-opacity-100 rounded-md">
                    <CheckIcon
                      className={`w-7 h-7 transition-all duration-300 ${
                        filterItem.selected ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </BgBackground>
                </PrimaryBg>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
