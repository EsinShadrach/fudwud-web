"use client";

import { useColorScheme } from "~/context/ColorProvider";

export function PrimaryBg({ className, children }: ClassNameWithChildren) {
  const { colorSchemeState } = useColorScheme();
  return (
    <div
      className={className}
      style={{ backgroundColor: colorSchemeState.primary }}
    >
      {children}
    </div>
  );
}
