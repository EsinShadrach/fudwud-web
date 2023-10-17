"use client";
import notFound from "~/public/not-found.png";
import { useMenu } from "~/context/use-menu";
import Image from "next/image";
import LoadingSpinner from "~/utils/icons/loading";
import { BackButton } from "../../back-button";
import { HeartIcon } from "~/utils/icons/heart-active";
import { PrimaryBg } from "~/utils/primary-bg";
import BgText from "~/utils/bg-text";

// ! Even though the name of the catch all route is name I will not be using the name it'd be better if it was slug or something
type OrderDetailPageType = {
  params: {
    id: string;
    name: string | number;
  };
  searchParams: {
    table?: string;
  };
};

export default function DetailedPage({
  params,
  searchParams,
}: OrderDetailPageType) {
  const { menu, loading } = useMenu();
  if (loading) return <BackButton />;

  if (!menu) return <>Could not get menu</>;
  const paramName = Number(params.name);
  const selected = menu.find((item) => item.id === paramName);
  console.log(selected);
  if (!selected) return <NotFound />;
  return (
    <section className="container p-3 mx-auto">
      <div className="relative w-fit">
        <div className="absolute inset-x-0 flex items-center justify-between">
          <div className="p-3 w-fit">
            <BackButton hasMargin={false} />
          </div>
          {selected.customerFavorite && (
            <div className="p-3 w-fit">
              <PrimaryBg className="flex items-center justify-center p-1 text-white rounded-full bg-opacity-100">
                <HeartIcon className="w-5 h-5" />
              </PrimaryBg>
            </div>
          )}
        </div>
        <Image
          src={selected.image}
          alt={selected.name}
          height={500}
          width={500}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <section className="w-full min-h-screen">
      <div className="pl-3 w-fit">
        <BackButton />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full pt-5 gap-3">
        <Image
          alt="Not Found"
          src={notFound}
          className="w-full max-w-md"
          draggable={false}
        />
        <BgText className="text-2xl font-semibold text-opacity-75">
          Page Not found - 404
        </BgText>
      </div>
    </section>
  );
}
