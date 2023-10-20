"use client";

import { useOrder } from "~/context/use-order";

export function RenderCheckOuts({ id, count }: { id: string; count: string }) {
  const { orders } = useOrder();
  return (
    <div>
      apple Item Id = {id} <br /> Order Count = {count}
      <div>{JSON.stringify(orders)}</div>
    </div>
  );
}
