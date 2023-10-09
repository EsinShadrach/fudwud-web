"use client";
import { useColorScheme } from "~/context/ColorProvider";

export function PrimaryShadow({ className, children }: ClassNameWithChildren) {
  const { colorSchemeState } = useColorScheme();
  return (
    <div
      className={className}
      style={{
        boxShadow: `0px 0px 400px 20px ${colorSchemeState.primary}`,
      }}
    >
      {children}
    </div>
  );
}
