"use client";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PrimaryBg } from "~/utils/primary-bg";
import PrimaryBorder from "~/utils/primary-border";
import RenderSearchItems from "./RenderSearchItems";

// TODO: So get all food items here and search based on the url params
type Props = {
  params: { id: string };
  searchParams: { table?: string; search?: string };
};

export default function SearchPage({ params, searchParams }: Props) {
  const resturantId = params.id;
  const searchQuery = searchParams.search ?? "";
  const [search, setSearch] = useState(searchQuery);
  const router = useRouter();
  const path = `/resturant/${params.id}/?table=${searchParams.table}`;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    const searchRoute = `/resturant/${resturantId}/search?table=4&search=${search}`;
    router.push(searchRoute);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const searchRoute = `/resturant/${resturantId}/search?table=4&search=${search}`;
    router.push(searchRoute);
  }

  return (
    <section className="container min-h-screen p-3 mx-auto overflow-auto">
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full max-w-xl mx-auto gap-2"
      >
        <PrimaryBorder
          opacity="0.5"
          className="flex items-center w-full max-w-xl pl-2 mx-auto border-2 rounded-lg"
        >
          <div>
            <MagnifyingGlassIcon className="w-6 h-6" />
          </div>
          <input
            type="search"
            value={search}
            placeholder={"Search"}
            onChange={handleChange}
            className="w-full p-2 rounded-lg outline-none focus:outline-none"
          />
        </PrimaryBorder>
        <Link href={path}>
          <PrimaryBg className="p-1 rounded-full" opacity="0.05">
            <XMarkIcon className="w-6 h-6" />
          </PrimaryBg>
        </Link>
      </form>
      <div className="flex flex-wrap mt-5 gap-6">
        <RenderSearchItems search={search} />
      </div>
    </section>
  );
}
