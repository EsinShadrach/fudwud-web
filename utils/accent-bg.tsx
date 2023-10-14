"use client";

import { useColorScheme } from "~/context/ColorProvider";

export default function AccentBg({
  children,
  className,
}: ClassNameWithChildren) {
  const { colorSchemeState } = useColorScheme();
  return (
    <div
      className={className}
      style={{
        backgroundColor: `rgb(${colorSchemeState.accent} / var(--tw-bg-opacity))`,
      }}
    >
      {children}
    </div>
  );
}
