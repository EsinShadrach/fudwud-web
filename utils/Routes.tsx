"use client";
import Link from "next/link";
import AccentBg from "./accent-bg";
import BgText from "./bg-text";
import { HeartIcon } from "./icons/heart-active";
import ProfileIcon from "./icons/profile";
import ReceiptIcon from "./icons/reciept";
import { ShoppingBagIcon } from "./icons/shopping-bag";
import WalletIcon from "./icons/wallet";

const routes = [
  {
    name: "My Orders",
    href: "/orders",
    icon: ReceiptIcon,
    forLg: true,
    supportsNotification: false,
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
    href: "/favourites",
    icon: HeartIcon,
    forLg: false,
    supportsNotification: true,
  },
  {
    name: "Cart",
    href: "/cart",
    icon: ShoppingBagIcon,
    forLg: false,
    supportsNotification: true,
  },
];

export function Routes() {
  return (
    <BgText className="mt-10">
      <div className="space-y-6">
        {routes.map((Route, index) => (
          <div
            key={index}
            className={`${Route.forLg ? "" : "md:block hidden"}`}
          >
            <Link href={Route.href}>
              <div className="flex items-center p-2 hover:bg-gray-300/20 gap-3 rounded-md transition-all duration-300">
                <Route.icon className="w-6 h-6 text-[#9796A1]" />
                <div className="whitespace-nowrap">{Route.name}</div>
                {Route.supportsNotification && (
                  <AccentBg className="px-2 py-0.5 ml-auto rounded-md flex justify-center items-center">
                    <small>3</small>
                  </AccentBg>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </BgText>
  );
}
