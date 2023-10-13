"use client";
import { useColorScheme } from "~/context/ColorProvider";

export default function BgText({
  children,
  className,
  opacity,
}: ClassNameWithChildren) {
  const { colorSchemeState } = useColorScheme();
  return (
    <span
      style={{
        color: `rgb(${colorSchemeState.backgroundText}, ${opacity ?? "1"})`,
      }}
      className={className}
    >
      {children}
    </span>
  );
}
