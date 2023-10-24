"use client";

import { useState } from "react";
import BgBackground from "~/utils/bg-bg";
import BgText from "~/utils/bg-text";
import { PrimaryBg } from "~/utils/primary-bg";
import PrimaryBorder from "~/utils/primary-border";
const options = [
  {
    name: "Upi",
    icon: PayTM,
  },
  {
    name: "Phonepe Upi",
    icon: PayTM,
  },
  {
    name: "Wallets",
    icon: PayTM,
  },
  {
    name: "Cash Payments",
    icon: PayTM,
  },
];
export function RenderPaymentOptions() {
  const [selected, setSelected] = useState("");
  function handleClick(text: string) {
    setSelected(text);
  }
  return (
    <div className="h-full py-4 space-y-4">
      {options.map((Option, index) => (
        <button
          key={index}
          className="w-full rounded-lg"
          onClick={() => handleClick(Option.name)}
        >
          <PrimaryBg className="rounded-lg hover:bg-opacity-10 bg-opacity-0">
            <BgBackground
              className={`flex items-center p-3 text-xs sm:text-sm  rounded-md gap-3 hover:bg-opacity-10 transition-all duration-300 group-focus:bg-opacity-10 bg-opacity-100 shadow-md`}
            >
              <PrimaryBorder className="flex items-center justify-center w-5 h-5 border rounded-full">
                <PrimaryBg
                  className={`w-3 h-3 rounded-full bg-opacity-0 transition-all duration-300 ${
                    selected === Option.name && "bg-opacity-100"
                  }`}
                />
              </PrimaryBorder>
              <BgText className="font-medium text-opacity-70">
                {Option.name}
              </BgText>
              <div className="ml-auto w-fit">
                <Option.icon />
              </div>
            </BgBackground>
          </PrimaryBg>
        </button>
      ))}
    </div>
  );
}

function PayTM() {
  return (
    <div className="font-semibold w-fit">
      <span className="text-[#013470]">Pay</span>
      <span className="italic text-lg text-[#08B3FC]">tm</span>
    </div>
  );
}
