"use client";
import Image from "next/image";
import logo from "~/public/logo-new.png";
import { usePathname } from "next/navigation";

export default function SignUpTitle() {
  const pathName = usePathname();
  const isVerifyPath = pathName.includes("verify-email-address");
  return (
    <div
      className={`flex flex-col w-full max-w-xl px-3 gap-3 ${
        isVerifyPath ? "items-start" : "items-center"
      }`}
    >
      <Image alt={"Fudwud logo"} src={logo} />
      <div className="text-xl font-semibold sm:text-2xl">
        {isVerifyPath ? "Verify your" : "Create a"} fudwud account
      </div>
    </div>
  );
}
