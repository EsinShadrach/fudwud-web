import { FilterProvider } from "~/context/use-filter";
import { MenuProvider } from "~/context/use-menu";
import { TableProvider } from "~/context/use-table";
import BottomNav from "~/utils/bottom-nav";

export default function RootLayout({ children }: Layout) {
  return (
    <MenuProvider>
      <FilterProvider>
        <TableProvider>
          {children}
          <BottomNav />
        </TableProvider>
      </FilterProvider>
    </MenuProvider>
  );
}
