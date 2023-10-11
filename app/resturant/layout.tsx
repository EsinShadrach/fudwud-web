import type { Metadata } from "next";
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
    <main className="flex max-h-screen">
      <Sidebar />
      {children}
    </main>
  );
}
