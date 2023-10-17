"use client";
import { useState } from "react";
import { useFavourite } from "~/context/use-favourite";
import { PrimaryBg } from "~/utils/primary-bg";
import burgerKing from "~/public/burger-king.png";
import Image from "next/image";
import BgText from "~/utils/bg-text";
import PrimaryBorder from "~/utils/primary-border";

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
  const { resturants } = useFavourite();
  return (
    <div className="flex flex-wrap gap-6">
      {resturants.map((resturant, index) => (
        <div
          key={index}
          className="w-full max-w-md p-3 border border-gray-100 shadow-lg rounded-md bg-inherit hover:shadow-xl duration-300 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg shadow-xl w-fit">
              <Image
                alt={resturant.name}
                src={resturant.logo}
                height={64}
                width={64}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <small>#2939292</small>
              <BgText className="font-semibold text-opacity-90">
                {resturant.name}
              </BgText>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex items-center justify-between">
              <BgText className="flex flex-col text-opacity-50 gap-0.5">
                <small>Estimated Arrival</small>
                <div className="font-semibold">
                  25{" "}
                  <sup>
                    <small>mins</small>
                  </sup>
                </div>
              </BgText>
              <PrimaryBg className="p-1 text-sm bg-opacity-10 rounded-md">
                $30
              </PrimaryBg>
            </div>
            <div className="mx-6 mt-5">
              <button className="w-full overflow-hidden rounded-full transition-all active:scale-95 duration-300">
                <PrimaryBg className="transition-all duration-300 hover:bg-opacity-10">
                  <PrimaryBorder className="border text-center rounded-full py-1.5">
                    Cancel
                  </PrimaryBorder>
                </PrimaryBg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
