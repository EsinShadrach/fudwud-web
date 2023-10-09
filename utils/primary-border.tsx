"use client";

import { useColorScheme } from "~/context/ColorProvider";

export default function PrimaryBorder({
  children,
  className,
}: ClassNameWithChildren) {
  const { colorSchemeState } = useColorScheme();
  return (
    <div
      className={className}
      style={{ borderColor: colorSchemeState.primary }}
    >
      {children}
    </div>
  );
}
