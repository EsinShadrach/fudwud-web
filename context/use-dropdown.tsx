"use client";
import { createContext, useContext, useState } from "react";

type Options = "popular" | "featured" | "least priced" | "most priced";

interface DropDownInterface {
  option: Options;
  handleOption: (selected: Options) => void;
  optionsArray: string[];
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
  const [option, setOption] = useState<Options>("popular");
  const optionsArray = ["popular", "featured", "least priced", "most priced"];

  function handleOption(selected: Options) {
    setOption(selected);
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
