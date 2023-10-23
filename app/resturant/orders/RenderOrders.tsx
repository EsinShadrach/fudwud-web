"use client";
import sampleFood from "~/public/sample-food.png";
import Image from "next/image";
import { useState } from "react";
import { useOrder } from "~/context/use-order";
import BgText from "~/utils/bg-text";
import { PrimaryBg } from "~/utils/primary-bg";
import PrimaryBorder from "~/utils/primary-border";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  MinusSmallIcon,
  PlusIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/solid";
import LoadingSpinner from "~/utils/icons/loading";
import { useMenu } from "~/context/use-menu";

export function RenderOrders() {
  const [isUpcoming, setIsUpcoming] = useState(true);
  return (
    <div className="pb-16 mt-5">
      <div className="relative flex max-w-md mx-auto border rounded-full overflow-clip gap-2">
        <PrimaryBg
          className={`absolute w-1/2 h-10 rounded-full bg-opacity-100 transition-all duration-300 ${
            isUpcoming ? "translate-x-0" : "translate-x-full"
          }`}
        />
        <button
          onClick={() => setIsUpcoming(true)}
          className="relative w-full p-2 font-semibold text-center rounded-full"
        >
          <div
            className={`transition-all duration-300 ${
              isUpcoming ? "text-white" : ""
            }`}
          >
            Upcoming
          </div>
        </button>
        <button
          onClick={() => setIsUpcoming(false)}
          className="relative w-full p-2 font-semibold text-center"
        >
          <div
            className={`transition-all duration-300 ${
              isUpcoming ? "" : "text-white"
            }`}
          >
            History
          </div>
        </button>
      </div>
      <div className="mt-5">
        <UpcomingOrHistory isUpcoming={isUpcoming} />
      </div>
    </div>
  );
}

function UpcomingOrHistory({ isUpcoming }: { isUpcoming: boolean }) {
  const { pending, completed } = useOrder();
  if (!pending) return <LoadingSpinner />;
  return (
    <div className="pt-3 space-y-6">
      {pending.map((order, index) => (
        <OrderCard key={index} {...order} />
      ))}
    </div>
  );
}

function OrderCard({ count, id, instructions, status }: CreateOrder) {
  const { getById } = useMenu();
  const order = getById(id);
  console.log(order);
  return (
    <PrimaryBg className="flex w-full max-w-md mx-auto transition-all duration-300 rounded-md bg-opacity-0 hover:bg-opacity-10 gap-3">
      <div className="w-32">
        <Image
          src={sampleFood}
          alt="Sample food"
          height={96}
          width={96}
          quality={100}
          className="object-cover w-24 h-24 rounded-md"
        />
      </div>
      <div className="flex flex-col justify-between w-full p-2">
        <div className="flex items-center justify-between">
          <BgText className="font-semibold sm:text-lg text-opacity-80">
            Apples
          </BgText>
          <PrimaryBg className="rounded-full active:scale-95 transition-all duration-300 bg-opacity-0 hover:bg-opacity-20">
            <button className="p-1 rounded-full">
              <XMarkIcon className="w-4 h-4" />
            </button>
          </PrimaryBg>
        </div>
        <div>
          <small>
            <BgText className="font-medium text-opacity-40">
              butter, apple
            </BgText>
          </small>
        </div>
        <div className="flex items-center justify-between">
          <small className="font-medium">$24</small>
          <div className="flex items-center gap-3">
            <button className="rounded-full transition-all duration-300 active:scale-95">
              <PrimaryBorder className="p-px border rounded-full w-fit">
                <MinusSmallIcon className="w-4 h-4" />
              </PrimaryBorder>
            </button>
            <BgText className="font-medium text-opacity-80">0</BgText>
            <button className="rounded-full transition-all duration-300 active:scale-95">
              <PrimaryBg className="p-0.5 rounded-full bg-opacity-100 w-fit">
                <PlusSmallIcon className="w-4 h-4 text-white stroke-white" />
              </PrimaryBg>
            </button>
          </div>
        </div>
      </div>
    </PrimaryBg>
  );
}
