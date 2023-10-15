"use client";
import { useMenu } from "~/context/use-menu";
import BgText from "~/utils/bg-text";

export function NumberOfItemsInMenu() {
  const { itemCount } = useMenu();
  return (
    <small>
      <BgText className="text-opacity-70">
        {itemCount} item{itemCount > 1 ? "s" : ""} in menu
      </BgText>
    </small>
  );
}
