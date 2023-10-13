"use client";

import { useColorScheme } from "~/context/ColorProvider";

export default function PrimaryBorder({
  children,
  className,
  opacity,
}: ClassNameWithChildren) {
  const { colorSchemeState } = useColorScheme();
  return (
    <div
      className={className}
      style={{
        borderColor: `rgb(${colorSchemeState.primary}, ${opacity ?? "1"})`,
      }}
    >
      {children}
    </div>
  );
}
