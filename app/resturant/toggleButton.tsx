"use client";

import { useSidebarState } from "~/context/sidebar-context";

export function ToggleButton() {
  const { buttonRef, handleToggle } = useSidebarState();
  return (
    <button
      ref={buttonRef}
      onClick={handleToggle}
      className="p-2 shadow-xl bg-inherit rounded-md space-y-2 py-2.5 transition-all duration-300 hover:opacity-40 active:scale-95 sm:hidden"
    >
      <div className="w-6 h-0.5 bg-slate-900 rounded-full" />
      <div className="w-4 h-0.5 bg-slate-900 rounded-full" />
    </button>
  );
}
