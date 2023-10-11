import type { Metadata } from "next";
import { SidebarStateProvider } from "~/context/sidebar-context";
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
      <main className="flex max-h-screen">
        <Sidebar />
        {children}
      </main>
    </SidebarStateProvider>
  );
}
