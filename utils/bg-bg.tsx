"use client";
import { useColorScheme } from "~/context/ColorProvider";

export default function BgBackground({
  children,
  className,
  opacity,
}: ClassNameWithChildren) {
  const { colorSchemeState } = useColorScheme();
  return (
    <div
      style={{
        backgroundColor: `rgb(${colorSchemeState.background}, ${
          opacity ?? "1"
        })`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
