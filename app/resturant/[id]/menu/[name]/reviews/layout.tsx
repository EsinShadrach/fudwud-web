import { ReviewProvider } from "~/context/use-review";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReviewProvider>{children}</ReviewProvider>;
}
