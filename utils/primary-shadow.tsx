"use client";
import { useColorScheme } from "~/context/ColorProvider";

export function PrimaryShadow({
  className,
  children,
  opacity,
}: ClassNameWithChildren) {
  const { colorSchemeState } = useColorScheme();
  const opc = opacity ?? "1";
  return (
    <div
      className={className}
      style={{
        boxShadow: `0px 0px 400px 20px rbg(${colorSchemeState.primary}, ${opc})`,
      }}
    >
      {children}
    </div>
  );
}
