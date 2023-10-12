"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SearchField({ table }: { table?: string }) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathame = usePathname();
  let redirectPath = `${pathame}/search/?table=${table}&search=${search}`;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(redirectPath);
    console.log(search);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full px-2 overflow-hidden bg-gray-200 border border-gray-300 rounded-lg"
    >
      <MagnifyingGlassIcon className="w-6 h-6" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 font-semibold bg-transparent focus:outline-none"
      />
    </form>
  );
}
