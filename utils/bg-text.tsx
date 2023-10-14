"use client";
import { useColorScheme } from "~/context/ColorProvider";

export default function BgText({ children, className }: ClassNameWithChildren) {
  const { colorSchemeState } = useColorScheme();
  return (
    <span
      style={{
        color: `rgb(${colorSchemeState.backgroundText} / var(--tw-text-opacity))`,
      }}
      className={className}
    >
      {children}
    </span>
  );
}
