import Image from "next/image";
import { useMenu } from "~/context/use-menu";
import notFound from "~/public/not-found.png";
import BgText from "~/utils/bg-text";
import LoadingSpinner from "~/utils/icons/loading";
import { SearchCardItem m } from "./SearchCardItem";

type WithSearch = string;

function RenderSearchItems({ search }: { search: WithSearch }) {
  const { loading, menu } = useMenu();
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (!menu) {
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        Failed to fetch items. Try reloading.
      </div>
    );
  }

  const filteredItems = menu.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const sortedItems = filteredItems
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      {sortedItems.length !== 0 ? (
        sortedItems.map((item, index) => (
          <SearchCardItem key={index} {...item} />
        ))
      ) : (
        <EmptySearch search={search} />
      )}
    </>
  );
}

export default RenderSearchItems;

export function EmptySearch({ search }: { search: WithSearch }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pt-5 gap-3">
      <Image alt="Not Found" src={notFound} className="w-full max-w-md" />
      <BgText className="text-2xl font-semibold text-opacity-75">
        Couldn&apos;t Find &ldquo;{search}&rdquo;
      </BgText>
    </div>
  );
}
