import {FilterProvider} from "~/context/use-filter";
import {MenuProvider} from "~/context/use-menu";

export default function RootLayout({ children }: Layout) {
  return (
    <MenuProvider>
      <FilterProvider>{children}</FilterProvider>
    </MenuProvider>
  );
}
