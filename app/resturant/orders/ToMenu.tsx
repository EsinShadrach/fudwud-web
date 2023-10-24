import Link from "next/link";

function ToMenu({ children }: { children: React.ReactNode }) {
  return <Link>{children}</Link>;
}
