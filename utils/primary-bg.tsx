"use client";

import { useColorScheme } from "~/context/ColorProvider";

export function PrimaryBg({
  className,
  children,
  opacity,
}: ClassNameWithChildren) {
  const { colorSchemeState } = useColorScheme();
  return (
    <div
      className={className}
      style={{
        backgroundColor: `rgb(${colorSchemeState.primary}, ${opacity ?? "1"})`,
      }}
    >
      {children}
    </div>
  );
}
