"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useOrder } from "~/context/use-order";
import BgBackground from "~/utils/bg-bg";
import { ShoppingBagIcon } from "~/utils/icons/shopping-bag";
import { PrimaryBg } from "~/utils/primary-bg";
import { PrimaryShadow } from "~/utils/primary-shadow";

export function AddToCartButton({
  count,
  id,
  instructions,
  status,
}: CreateOrder) {
  const searchParams = useSearchParams();
  const { createOrder } = useOrder();
  const table = searchParams.get("table");
  const pathName = usePathname();
  const router = useRouter();
  const href = `${pathName}/orders/?redirect_url=${pathName}&table=${table}&count=${count}&id=${id}`;
  function redirectUrl() {
    const order = {
      id,
      count,
      instructions,
      status,
    };
    console.log("Before if block");
    if (count > 0) {
      createOrder(order);
      console.log("Running function");
      router.push(href);
    }
  }
  return (
    <button
      onClick={redirectUrl}
      className="mt-5 rounded-full w-fit active:scale-95"
    >
      <PrimaryBg className="p-1 pr-3 rounded-full w-fit bg-opacity-100">
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
