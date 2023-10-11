"use client";

import { createContext, useContext, useState } from "react";

interface SidebarInterface {
  opened: boolean;
  handleClose: () => void;
  handleToggle: () => void;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useSidebarState() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw Error("Sidebar context not found!");
  }
  return context;
}

export const SidebarContext = createContext<SidebarInterface | null>(null);

export function SidebarStateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);

  function handleClose() {
    setOpened(false);
  }

  function handleToggle() {
    setOpened((prev) => !prev);
  }

  const contextValues = {
    opened,
    handleClose,
    handleToggle,
    setOpened,
  };
  return (
    <SidebarContext.Provider value={contextValues}>
      {children}
    </SidebarContext.Provider>
  );
}
