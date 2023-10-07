"use client";
import { useColorScheme } from "~/context/ColorProvider";

export default function BgText({ children, className }: ClassNameWithChildren) {
  const { colorSchemeState } = useColorScheme();
  return (
    <span
      style={{ color: colorSchemeState.backgroundText }}
      className={className}
    >
      {children}
    </span>
  );
}
