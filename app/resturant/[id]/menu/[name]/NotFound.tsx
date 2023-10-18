"use client";
import Image from "next/image";
import notFound from "~/public/not-found.png";
import BgText from "~/utils/bg-text";
import { BackButton } from "../../back-button";

export function NotFound() {
  return (
    <section>
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
