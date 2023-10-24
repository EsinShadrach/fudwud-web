"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import AccentBg from "~/utils/accent-bg";
import formatCreditCardNumber from "./format-card-number";
import { VisaOrMasterCard } from "./VisaOrMasterCard";

export type BankCardProps = {
  cardNumber: string;
  isVisa: boolean;
  cvv: string;
  expiry: string;
};
export function BankCard({ cardNumber, isVisa, cvv, expiry }: BankCardProps) {
  const [reveal, setReveal] = useState(false);
  function handleReveal() {
    setReveal((prev) => !prev);
  }
  return (
    <AccentBg className="w-full max-w-md mx-auto mt-5 rounded-lg bg-opacity-100 sm:h-52">
      <div className="flex flex-col justify-between w-full h-full p-3 rounded-lg bg-gradient-to-br from-transparent via-white/40 gap-6">
        <div className="flex">
          <button
            onClick={handleReveal}
            className="flex items-center justify-center p-1 rounded-full hover:bg-red-50/30 h-7 w-7 transition-all duration-300 active:scale-95"
          >
            {reveal ? (
              <EyeSlashIcon className="w-6 h-6" />
            ) : (
              <EyeIcon className="w-6 h-6" />
            )}
          </button>
          <div
            className={`ml-auto transition-all duration-300 ${
              !reveal && "blur-3xl"
            }`}
          >
            <VisaOrMasterCard isVisa={isVisa} />
          </div>
        </div>
        <div className="text-xl font-semibold text-center text-white">
          {reveal ? formatCreditCardNumber(cardNumber) : "**** **** **** ****"}
        </div>
        <div className="flex items-center justify-between text-xs text-white">
          <div className="text-center">
            <div>CVV</div>
            <div>{reveal ? cvv : "***"}</div>
          </div>
          <div className="text-center">
            <div>EXPIRES</div>
            <div>{reveal ? expiry : "**/**"}</div>
          </div>
        </div>
      </div>
    </AccentBg>
  );
}
