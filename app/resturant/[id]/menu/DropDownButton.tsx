"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useDropDownOptions } from "~/context/use-dropdown";
import { PrimaryBg } from "~/utils/primary-bg";

export function DropDownButton() {
  const { option, handleOption, optionsArray } = useDropDownOptions();
  const [opened, setOpened] = useState(false);

  function handleToggle() {
    setOpened((prev) => !prev);
  }
  return (
    <button
      onClick={handleToggle}
      className="overflow-hidden rounded-lg shadow-lg bg-inherit group"
    >
      <PrimaryBg className="flex items-center justify-between w-full px-3 py-1 rounded-t-lg gap-3 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300">
        {option}
        <ChevronDownIcon
          className={`w-4 h-4 transition-all duration-300 ${
            opened && "rotate-180"
          }`}
        />
      </PrimaryBg>
      <div
        className={`min-h-0 grid overflow-hidden transition-all ${
          opened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className={`min-h-0 flex flex-col`}>
          {optionsArray.slice(1).map((item, index) => (
            <div
              key={index}
              tabIndex={1}
              role="button"
              onClick={() => handleOption(item)}
            >
              <PrimaryBg className="p-1 px-3 text-left bg-opacity-0 hover:bg-opacity-20 transition-all duration-300">
                {item}
              </PrimaryBg>
            </div>
          ))}
        </div>
      </div>
    </button>
  );
}
