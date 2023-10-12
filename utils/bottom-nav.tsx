"use client";
import { usePathname } from "next/navigation";
import AccentBg from "./accent-bg";
import BgBackground from "./bg-bg";
import BgText from "./bg-text";
import { HeartIcon } from "./icons/heart-active";
import { HomeIcon } from "./icons/home";
import { ShoppingBagIcon } from "./icons/shopping-bag";

export default function BottomNav({ path }: { path: string }) {
  const pathname = usePathname();

  const routes = [
    { name: "Home", path: path, icon: HomeIcon, supportsNotification: false },
    {
      name: "Cart",
      path: "/cart",
      icon: ShoppingBagIcon,
      supportsNotification: true,
    },
    {
      name: "Favourites",
      path: "/favourites",
      icon: HeartIcon,
      supportsNotification: true,
    },
  ];
  return (
    <BgBackground className="fixed inset-x-0 bottom-0 flex items-center justify-around p-3 sm:hidden">
      {routes.map((Route, index) => (
        <div key={index} className="relative">
          {Route.supportsNotification && (
            <AccentBg className="px-2 py-0.5 ml-auto rounded-md flex justify-center items-center absolute -top-3 -right-4">
              <small className="text-xs">
                <BgText>3</BgText>
              </small>
            </AccentBg>
          )}
          <Route.icon
            className={`w-6 h-6 transition-all duration-300 relative ${
              Route.path.includes(pathname) ? "" : "text-gray-300"
            }`}
          />
        </div>
      ))}
    </BgBackground>
  );
}
