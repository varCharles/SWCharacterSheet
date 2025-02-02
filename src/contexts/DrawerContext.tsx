"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface DrawerContextType {
  openDrawer: (content: string) => void;
  closeDrawer: () => void;
  isDrawerOpen: boolean;
  drawerContent: string;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState("");

  const openDrawer = (content: string) => {
    setDrawerContent(content);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <DrawerContext.Provider
      value={{ openDrawer, closeDrawer, isDrawerOpen, drawerContent }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
}
