"use client";

import { useOrder } from "~/context/use-order";

export function RenderCheckOuts() {
  const { orders } = useOrder();
  return <div>apple {JSON.stringify(orders)}</div>;
}
