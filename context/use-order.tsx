"use client";

import { createContext, useContext, useState } from "react";

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw Error("Order Context Not added");
  }
  return context;
}

const OrderContext = createContext<Order | null>(null);
export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<CreateOrder[] | null>(null);

  function createOrder(order: CreateOrder) {
    // ! So we don't want a person to be able to add more than one item
    setOrders((prev) => {
      if (prev) {
        return [...prev, order];
      } else {
        return [order];
      }
    });
  }
  const contextValue: Order = {
    orders,
    createOrder,
  };
  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
}
