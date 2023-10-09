"use client";
import { useColorScheme } from "~/context/ColorProvider";

export default function BgBackground({
  children,
  className,
}: ClassNameWithChildren) {
  const { colorSchemeState } = useColorScheme();
  return (
    <div
      style={{ backgroundColor: colorSchemeState.background }}
      className={className}
    >
      {children}
    </div>
  );
}
