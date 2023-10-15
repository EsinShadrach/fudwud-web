"use client";
import { createContext, useContext, useState } from "react";

type Options = "all" | "popular" | "featured" | "least priced" | "most priced";

interface DropDownInterface {
  option: Options;
  handleOption: (selected: Options) => void;
  optionsArray: Options[];
}

export function useDropDownOptions() {
  const context = useContext(DropDownContext);
  if (!context) {
    throw new Error("DropDownOptions not set");
  }
  return context;
}

export const DropDownContext = createContext<DropDownInterface | null>(null);

export function DropDownProvider({ children }: { children: React.ReactNode }) {
  const [option, setOption] = useState<Options>("all");
  const [optionsArray, setOptionsArray] = useState<Options[]>([
    "all",
    "popular",
    "featured",
    "least priced",
    "most priced",
  ]);

  function handleOption(selected: Options) {
    const selectedIndex = optionsArray.indexOf(selected);
    if (selectedIndex !== -1) {
      const updatedOptionsArray = [...optionsArray];
      updatedOptionsArray.splice(selectedIndex, 1);
      updatedOptionsArray.unshift(selected);
      setOption(selected);
      setOptionsArray(updatedOptionsArray);
    }
  }

  const contextValue = {
    option,
    handleOption,
    optionsArray,
  };
  return (
    <DropDownContext.Provider value={contextValue}>
      {children}
    </DropDownContext.Provider>
  );
}
