import { DropDownProvider } from "~/context/use-dropdown";

export default function RootLayout({ children }: Layout) {
  return <DropDownProvider>{children}</DropDownProvider>;
}
