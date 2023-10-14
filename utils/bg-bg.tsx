"use client";
import { useColorScheme } from "~/context/ColorProvider";

export default function BgBackground({
  children,
  className,
}: ClassNameWithChildren) {
  const { colorSchemeState } = useColorScheme();
  return (
    <div
      style={{
        backgroundColor: `rgb(${colorSchemeState.background} / var(--tw-bg-opacity))`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}
