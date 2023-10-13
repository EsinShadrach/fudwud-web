import {TableProvider} from "~/context/use-table";
import BottomNav from "~/utils/bottom-nav";

export default function RootLayout({ children }: Layout) {
  return (
    <TableProvider>
      {children}
      <BottomNav/>
    </TableProvider>
  );
}
