"use client";
import Image from "next/image";
import BgText from "~/utils/bg-text";
import { PrimaryBg } from "~/utils/primary-bg";
import PrimaryBorder from "~/utils/primary-border";

type AddOnButtonType = {
  selected: boolean;
  name: string;
  image: string;
  price: string;
};
export function AddOnButton({ image, name, selected, price }: AddOnButtonType) {
  return (
    <PrimaryBg
      className={`flex items-center p-2 text-xs sm:text-sm rounded-md gap-3 hover:bg-opacity-10 transition-all duration-300 group-focus:bg-opacity-10 ${
        selected ? "bg-opacity-10" : "bg-opacity-0"
      }`}
    >
      <Image
        alt={name}
        src={image}
        width={42}
        height={42}
        draggable={"false"}
        className="object-cover w-auto h-auto rounded-md"
      />
      <BgText className="font-medium text-opacity-70">{name}</BgText>
      <BgText className="ml-auto text-xs text-opacity-70">{price}</BgText>
      <PrimaryBorder className="flex items-center justify-center w-5 h-5 border rounded-full">
        <PrimaryBg
          className={`w-3 h-3 rounded-full bg-opacity-100 transition-all duration-300 ${
            !selected && "opacity-0"
          }`}
        />
      </PrimaryBorder>
    </PrimaryBg>
  );
}
