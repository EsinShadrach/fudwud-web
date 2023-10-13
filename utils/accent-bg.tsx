"use client";

import { useColorScheme } from "~/context/ColorProvider";

export default function AccentBg({
  children,
  className,
  opacity,
}: ClassNameWithChildren) {
  const { colorSchemeState } = useColorScheme();
  return (
    <div
      className={className}
      style={{
        backgroundColor: `rgb(${colorSchemeState.accent}, ${opacity ?? "1"})`,
      }}
    >
      {children}
    </div>
  );
}
