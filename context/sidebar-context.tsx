"use client";
// TODO:  Sync this state to the state of the navbar so that when this is clicked the nav bar closes to...?
// TODO: Maybe pass in a ref gotten from this provider
import { createContext, useContext, useEffect, useRef, useState } from "react";

interface SidebarInterface {
  opened: boolean;
  handleClose: () => void;
  handleToggle: () => void;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarRef: React.RefObject<HTMLDivElement>;
  buttonRef: React.RefObject<HTMLButtonElement>;
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
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  function handleClose() {
    setOpened(false);
  }

  function handleToggle() {
    setOpened((prev) => !prev);
  }

  useEffect(() => {
    function handleClicks(e: MouseEvent): void {
      const isButton = buttonRef.current?.contains(e.target as Node);
      const isSidebar = sidebarRef.current?.contains(e.target as Node);
      if (isSidebar || isButton) {
        return;
      }
      setOpened(false);
    }
    window.addEventListener("click", handleClicks);
    return () => {
      window.removeEventListener("click", handleClicks);
    };
  }, []);

  const contextValues = {
    opened,
    handleClose,
    handleToggle,
    setOpened,
    sidebarRef,
    buttonRef,
  };
  return (
    <SidebarContext.Provider value={contextValues}>
      {children}
    </SidebarContext.Provider>
  );
}
