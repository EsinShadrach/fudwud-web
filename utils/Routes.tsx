"use client";
import Link from "next/link";
import { useTableData } from "~/context/use-table";
import AccentBg from "./accent-bg";
import BgText from "./bg-text";
import { HeartIcon } from "./icons/heart-active";
import ProfileIcon from "./icons/profile";
import ReceiptIcon from "./icons/reciept";
import { ShoppingBagIcon } from "./icons/shopping-bag";
import WalletIcon from "./icons/wallet";
import { PrimaryBg } from "./primary-bg";

const routes = [
  {
    name: "My Orders",
    href: "/resturant/orders",
    icon: ReceiptIcon,
    forLg: true,
    supportsNotification: true,
  },
  {
    name: "My Profile",
    href: "/profile",
    icon: ProfileIcon,
    forLg: true,
    supportsNotification: false,
  },
  {
    name: "Payment Methods",
    href: "/payments-method",
    icon: WalletIcon,
    forLg: true,
    supportsNotification: false,
  },
  {
    name: "Favourites",
    href: "/resturant/favourites",
    icon: HeartIcon,
    forLg: false,
    supportsNotification: true,
  },
];

export function Routes() {
  const { resturantID, table } = useTableData();
  const callBackPath = `/?redirect_url=/resturant/${resturantID}/?table=${table}`;
  return (
    <BgText className="mt-10 text-opacity-90">
      <div className="space-y-6">
        {routes.map((Route, index) => (
          <div
            key={index}
            className={`${Route.forLg ? "" : "md:block hidden"}`}
          >
            <Link href={`${Route.href}${callBackPath}`}>
              <PrimaryBg className="flex items-center p-2 gap-3 rounded-md transition-all duration-300 bg-opacity-0 hover:bg-opacity-10">
                <Route.icon className="w-6 h-6 text-[#9796A1]" />
                <div className="whitespace-nowrap">{Route.name}</div>
                {Route.supportsNotification && (
                  <AccentBg className="px-2 py-0.5 ml-auto rounded-md flex justify-center items-center bg-opacity-50">
                    <small>3</small>
                  </AccentBg>
                )}
              </PrimaryBg>
            </Link>
          </div>
        ))}
      </div>
    </BgText>
  );
}
