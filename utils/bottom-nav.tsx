"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTableData } from "~/context/use-table";
import AccentBg from "./accent-bg";
import BgBackground from "./bg-bg";
import BgText from "./bg-text";
import { HeartIcon } from "./icons/heart-active";
import { HomeIcon } from "./icons/home";
import { ShoppingBagIcon } from "./icons/shopping-bag";

export default function BottomNav() {
  const { table, resturantID } = useTableData();
  const pathname = usePathname();
  const path = `/resturant/${resturantID}/?table=${table}`;
  const callBackPath = `/?redirect_url=/resturant/${resturantID}/?table=${table}`;

  const routes = [
    { name: "Home", path: path, icon: HomeIcon, supportsNotification: false },
    {
      name: "Cart",
      path: `/cart/${callBackPath}`,
      icon: ShoppingBagIcon,
      supportsNotification: true,
    },
    {
      name: "Favourites",
      path: `/resturant/favourites/${callBackPath}`,
      icon: HeartIcon,
      supportsNotification: true,
    },
  ];
  return (
    <BgBackground className="fixed inset-x-0 bottom-0 flex items-center justify-around p-3 sm:hidden bg-opacity-100">
      {routes.map((Route, index) => (
        <Link href={Route.path} key={index} className="relative">
          {Route.supportsNotification && (
            <AccentBg className="px-2 py-0.5 ml-auto rounded-md flex justify-center items-center absolute -top-3 -right-4 bg-opacity-100">
              <small className="text-xs">
                <BgText className="text-opacity-100">3</BgText>
              </small>
            </AccentBg>
          )}
          <Route.icon
            className={`w-6 h-6 transition-all duration-300 relative ${
              Route.path.includes(pathname) ? "" : "text-gray-300"
            }`}
          />
        </Link>
      ))}
    </BgBackground>
  );
}
