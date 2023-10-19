"use client";
import {
  MinusSmallIcon,
  PencilSquareIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useMenu } from "~/context/use-menu";
import BgText from "~/utils/bg-text";
import { HeartIcon } from "~/utils/icons/heart-active";
import LoadingSpinner from "~/utils/icons/loading";
import StarIcon from "~/utils/icons/star";
import { PrimaryBg } from "~/utils/primary-bg";
import PrimaryBorder from "~/utils/primary-border";
import { BackButton } from "../../back-button";
import { AddOnButton } from "./AddOnButton";
import { AddToCartButton } from "./AddToCartButton.1";
import { AutoResizableTextArea } from "./AutoResizableTextArea";
import { NotFound } from "./NotFound";
// TODO: Add path to review
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
  const [orderCount, setOrderCount] = useState(0);
  const pathName = usePathname();
  const [edit, setEdit] = useState(true);
  const toEditRef = useRef<HTMLTextAreaElement>(null);
  const content = `Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh chopped. Spices – chili powder, cumin, onion powder. Nutrient values include protein and cabonhydrates`;

  function toggleEdit() {
    setEdit((prev) => !prev);
    if (!edit) {
      console.log("apple");
      toEditRef.current?.focus();
    }
  }

  function increment() {
    setOrderCount((prevValue) => prevValue + 1);
  }

  function decrement() {
    setOrderCount((prevValue) => (prevValue === 0 ? prevValue : prevValue - 1));
  }

  const { menu, loading, handleSelect } = useMenu();
  if (loading) return <LoadingSpinner />;

  if (!menu) return <>Could not get menu</>;
  const paramName = Number(params.name);
  const selected = menu.find((item) => item.id === paramName);
  if (!selected) return <NotFound />;
  return (
    <section className="container max-h-screen p-3 pb-16 mx-auto overflow-auto">
      <div className="flex flex-col items-center md:flex-row gap-3">
        <div className="relative mx-auto md:mx-0 w-fit">
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
            priority
            fetchPriority="high"
            src={selected.image}
            alt={selected.name}
            height={512}
            width={512}
            className="object-cover w-auto h-auto rounded-lg"
          />
        </div>
        <div className="w-full max-w-lg py-3 mx-auto space-y-3">
          <BgText className="pl-2 text-xl font-semibold sm:text-2xl text-opacity-90">
            {selected.name}
          </BgText>
          <div className="flex items-center text-xs sm:text-sm gap-1">
            <StarIcon className="w-6 h-6" />
            <BgText className="font-semibold text-opacity-70">
              {selected.rating}
            </BgText>
            <BgText className="text-opacity-25">
              +({selected.ratingCount - 1})
            </BgText>
            <PrimaryBg className="p-1 px-2 rounded-full transition-all duration-300 bg-opacity-0 hover:bg-opacity-10">
              <Link
                href={`${pathName}/reviews/?redirect_url=${pathName}&table=${searchParams.table}`}
                className="underline underline-offset-2"
              >
                See reviews
              </Link>
            </PrimaryBg>
          </div>
          <div className="flex items-center justify-between pl-2 text-lg font-semibold sm:text-xl">
            ${selected.price}
            <div className="flex items-center gap-3">
              <button
                onClick={decrement}
                className="rounded-full transition-all duration-300 active:scale-95"
              >
                <PrimaryBorder className="p-0.5 border rounded-full">
                  <MinusSmallIcon className="w-4 h-4" />
                </PrimaryBorder>
              </button>
              <div className="flex items-center justify-center w-9">
                <BgText className="text-opacity-100">{orderCount}</BgText>
              </div>
              <button
                onClick={increment}
                className="rounded-full transition-all duration-300 active:scale-95"
              >
                <PrimaryBg className="p-1 text-white rounded-full bg-opacity-100 stroke-white">
                  <PlusIcon className="w-4 h-4" />
                </PrimaryBg>
              </button>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between px-2">
              <small>Cooking instructions</small>
              <button
                onClick={toggleEdit}
                className="rounded-full active:scale-95 transition-all duration-300 group"
              >
                <PrimaryBg className="p-1 rounded-full hover:bg-opacity-10 bg-opacity-0 transition-all duration-300 group-focus:bg-opacity-10">
                  <PencilSquareIcon className="w-5 h-5" />
                </PrimaryBg>
              </button>
            </div>
            <div>
              <BgText className="text-opacity-40">
                <PrimaryBorder
                  className={`border transition-all duration-300 rounded-md overflow-hidden ${
                    edit ? "border-opacity-0" : "border-opacity-100"
                  }`}
                >
                  <AutoResizableTextArea
                    textContent={content}
                    disabled={edit}
                  />
                </PrimaryBorder>
              </BgText>
            </div>
          </div>
          <div className="mx-2 italic">
            <small>Time to prepare: {selected.prepareTime}</small>
          </div>
          <div className="hidden md:block">
            <AddToCartButton />
          </div>
        </div>
      </div>
      <div className="mt-5 space-y-3">
        <div className="mx-2">
          <BgText className="text-base italic font-semibold sm:text-lg text-opacity-80">
            Choice of Add On
          </BgText>
        </div>
        <div className="flex flex-wrap mx-2 gap-3">
          {selected.addOns.map((item, index) => (
            <button
              onClick={() => handleSelect(selected.id, item.name)}
              key={index}
              className="w-full max-w-xs rounded-md group"
            >
              <AddOnButton {...item} price="+$2.30" image={selected.image} />
            </button>
          ))}
        </div>
      </div>
      <div className="block mx-auto mt-5 md:hidden w-fit">
        <AddToCartButton />
      </div>
    </section>
  );
}
