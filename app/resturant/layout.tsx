import type { Metadata } from "next";
import { SidebarStateProvider } from "~/context/sidebar-context";
import { FavouriteProvider } from "~/context/use-favourite";
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
        <FavouriteProvider>
          <main className="flex max-h-screen">
            <Sidebar />
            {children}
            <BottomNav />
          </main>
        </FavouriteProvider>
      </TableProvider>
    </SidebarStateProvider>
  );
}
