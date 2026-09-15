"use client";

import React, { createContext, useContext, useState } from "react";

interface QuoteModalContextType {
  isOpen: boolean;
  preselectedProduct: string | null;
  openQuoteModal: (productSkuOrName?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState<string | null>(null);

  const openQuoteModal = (productSkuOrName?: string) => {
    setPreselectedProduct(productSkuOrName || null);
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
    setPreselectedProduct(null);
  };

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        preselectedProduct,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
