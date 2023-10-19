"use client";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import BgBackground from "~/utils/bg-bg";
import { PrimaryBg } from "~/utils/primary-bg";
import { PrimaryShadow } from "~/utils/primary-shadow";

export function AddToCartButton() {
  return (
    <button className="mt-auto rounded-full w-fit active:scale-95 transition-all duration-300">
      <PrimaryBg className="p-1 pr-3 mt-auto rounded-full w-fit bg-opacity-100">
        <PrimaryShadow>
          <div className="flex items-center gap-3">
            <BgBackground className="p-2 rounded-full">
              <ShoppingBagIcon className="w-4 h-4" />
            </BgBackground>
            <div className="text-sm font-medium text-white">Add to cart</div>
          </div>
        </PrimaryShadow>
      </PrimaryBg>
    </button>
  );
}
