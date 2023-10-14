import { MenuProvider } from "~/context/use-menu";
import { TableProvider } from "~/context/use-table";
import BottomNav from "~/utils/bottom-nav";

export default function RootLayout({ children }: Layout) {
  return (
    <MenuProvider>
      <TableProvider>
        {children}
        <BottomNav />
      </TableProvider>
    </MenuProvider>
  );
}
