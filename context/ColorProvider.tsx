"use client";
import { createContext, useContext, useEffect, useState } from "react";
import colorScheme from "~/colorScheme.json";

interface ContextInterface {
  colorSchemeState: ColorSchemeInterface;
}

export function useColorScheme() {
  const context = useContext(ColorSchemeContext);
  if (!context) {
    throw Error("Color Context not Provided");
  }
  return context;
}

export const ColorSchemeContext = createContext<ContextInterface | null>(null);

export function ColorProvider({ children }: { children: React.ReactNode }) {
  const [colorSchemeState, setColorSchemeState] =
    useState<ColorSchemeInterface>(colorScheme);

  const contextValue = { colorSchemeState };

  useEffect(() => {
    async function getColor() {
      const response = await fetch("/api/colors");
      if (response.ok) {
        console.log("Response is okay");
        const data: ColorSchemeInterface = await response.json();
        setColorSchemeState(data);
        console.log(data);
      } else {
        console.log("Response is not okay");
      }
    }
    getColor();
  }, []);

  return (
    <ColorSchemeContext.Provider value={contextValue}>
      <main
        className="min-h-screen"
        style={{
          color: colorSchemeState.primary,
          backgroundColor: colorSchemeState.background,
        }}
      >
        {children}
      </main>
    </ColorSchemeContext.Provider>
  );
}
