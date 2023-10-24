import { currentUser } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import { SidebarStateProvider } from "~/context/sidebar-context";
import { FavouriteProvider } from "~/context/use-favourite";
import { MenuProvider } from "~/context/use-menu";
import { OrderProvider } from "~/context/use-order";
import { TableProvider } from "~/context/use-table";
import BottomNav from "~/utils/bottom-nav";
import Sidebar from "~/utils/sidebar";

export const metadata: Metadata = {
  title: "Resturant",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  return (
    <SidebarStateProvider>
      <TableProvider>
        <MenuProvider>
          <FavouriteProvider>
            <OrderProvider>
              <main className="flex max-h-screen">
                <Sidebar user={user} />
                {children}
                <BottomNav />
              </main>
            </OrderProvider>
          </FavouriteProvider>
        </MenuProvider>
      </TableProvider>
    </SidebarStateProvider>
  );
}
