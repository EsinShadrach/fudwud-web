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
      style={{
        borderColor: `rgb(${colorSchemeState.primary} / var(--tw-border-opacity)`,
      }}
    >
      {children}
    </div>
  );
}
