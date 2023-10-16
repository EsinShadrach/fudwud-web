// TODO:ADD IMAGE TO OPENGRAPH
import { currentUser } from "@clerk/nextjs";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import type { Metadata } from "next";
import BgText from "~/utils/bg-text";
import UserImageButton from "~/utils/user-img-button";
import FilterButton from "../filter-button";
import RenderFeaturedItems from "../render-featured-items";
import SearchField from "../search-field";
import { ToggleButton } from "../toggleButton";
import { ViewAllLink } from "./ViewAllLink";

type Props = {
  params: { id: string };
  searchParams: { table?: string };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const id = params.id;
  const tableNumber = searchParams.table ?? "";
  return {
    title: `Resturant ${id} | table - ${tableNumber}`,
  };
}

export default async function ResturantPage({ searchParams }: Props) {
  const user = await currentUser();
  if (!user) return <>Login</>;
  return (
    <section className="container min-h-screen p-3 mx-auto overflow-auto">
      <div className="flex items-center justify-between gap-3">
        <ToggleButton />
        <div className="flex flex-col items-center justify-center gap-0.5">
          <BgText className="flex items-center justify-center text-sm text-opacity-75 gap-3">
            <div>Deliver to</div>
            <ChevronDownIcon className="w-4 h-4" />
          </BgText>
          <div className="sm:mr-auto">
            <small>Table - {searchParams.table}</small>
          </div>
        </div>
        <UserImageButton imageUrl={user.imageUrl} username={user.username!} />
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
          <BgText className="text-opacity-90">Place order for table</BgText>{" "}
          {searchParams.table}
        </h1>
      </div>
      <div className="flex items-center w-full max-w-lg my-10 gap-6">
        <SearchField table={searchParams.table} />
        <FilterButton />
      </div>
      <div className="flex items-center justify-between my-5 gap-3">
        <BgText className="text-lg font-semibold sm:text-xl text-opacity-90">
          Featured Items
        </BgText>
        <ViewAllLink table={searchParams.table} />
      </div>
      <RenderFeaturedItems />
    </section>
  );
}
