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
    setOrders((prev) => {
      if (prev) {
        const existingOrderIndex = prev.findIndex((o) => o.id === order.id);

        if (existingOrderIndex !== -1) {
          // If the order with the same ID already exists, increment the count.
          const updatedOrders = [...prev];
          updatedOrders[existingOrderIndex].count += 1;
          return updatedOrders;
        } else {
          // If the order doesn't exist, add it to the orders array.
          return [...prev, order];
        }
      } else {
        // If there are no previous orders, create a new array with the order.
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
