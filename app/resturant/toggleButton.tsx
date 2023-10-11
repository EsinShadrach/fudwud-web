"use client";

import { useSidebarState } from "~/context/sidebar-context";

export function OpenNavButton() {
  const { buttonRef, handleToggle } = useSidebarState();
  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      className="px-6 py-2 bg-red-300 rounded-full"
    >
      OPEN NAV
    </button>
  );
}
