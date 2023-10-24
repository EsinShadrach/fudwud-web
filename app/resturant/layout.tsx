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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarStateProvider>
      <TableProvider>
        <MenuProvider>
          <FavouriteProvider>
            <OrderProvider>
              <main className="flex max-h-screen">
                <Sidebar />
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
