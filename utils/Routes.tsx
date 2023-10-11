"use client";
import Link from "next/link";
import BgText from "./bg-text";
import ProfileIcon from "./icons/profile";
import ReceiptIcon from "./icons/reciept";
import WalletIcon from "./icons/wallet";

const routes = [
  { name: "My Orders", href: "/orders", icon: ReceiptIcon },
  { name: "My Profile", href: "/profile", icon: ProfileIcon },
  { name: "Payment Methods", href: "/payments-method", icon: WalletIcon },
];

export function Routes() {
  return (
    <BgText className="mt-10">
      <div className="space-y-6">
        {routes.map((Route, index) => (
          <div key={index}>
            <Link href={Route.href}>
              <div className="flex items-center p-2 hover:bg-gray-200/20 gap-3 rounded-md transition-all duration-300">
                <Route.icon className="w-6 h-6" />
                <div>{Route.name}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </BgText>
  );
}
