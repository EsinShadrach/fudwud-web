"use client";

import { createContext, useContext, useEffect, useState } from "react";

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw Error("Order Context Not added");
  }
  return context;
}

const OrderContext = createContext<Order | null>(null);
export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<CreateOrder[] | null>(null);

  useEffect(() => {
    async function getOrders() {
      try {
        const response = await fetch("/api/orders");
        if (response.ok) {
          const data = await response.json();
          const toCreateOrder = data as CreateOrder[];
          setOrders(toCreateOrder);
        } else {
          const errorResponse = await response.json();
          console.log(errorResponse);
        }
      } catch (error) {
        const errorM = error as Error;
        console.error(errorM.message);
      } finally {
        setLoading(false);
      }
    }
    getOrders();
  }, []);

  async function createOrder(order: CreateOrder) {
    try {
      // TODO: Make fetch request here to post to api endpoint to get orders
      const response = await fetch("/api/orders/", {
        method: "POST",
        body: JSON.stringify(order),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        const data = await response.json();
        console.error(data);
      }
    } catch (err) {
      const error = err as Error;
      console.error(error.message);
    }
    // ! Should I have a finally block to set the loading state????
  }

  const contextValue: Order = {
    loading,
    orders,
    createOrder,
  };
  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
}
