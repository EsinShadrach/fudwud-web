import Image from "next/image";
import AccentBg from "~/utils/accent-bg";
import BgText from "~/utils/bg-text";
import { PrimaryBg } from "~/utils/primary-bg";
import { convertISOToReadableDate } from "~/utils/time-converter";

export function ReviewCard({ date, name, photo, rating, review }: Review) {
  return (
    <PrimaryBg className="w-full max-w-2xl p-2 rounded-md hover:bg-opacity-10 transition-all duration-300">
      <BgText className="text-opacity-80 space-y-3">
        <div className="flex items-center gap-6">
          <div className="relative">
            <AccentBg className="absolute p-1 text-xs font-medium bottom-1 bg-opacity-100 w-fit rounded-md -right-2">
              {rating}
            </AccentBg>
            <Image
              src={photo}
              alt={name}
              height={48}
              draggable={"false"}
              width={48}
              className="object-cover w-12 h-12 rounded-full"
            />
          </div>
          <div className="text-xs font-medium space-y-1">
            <div>{name}</div>
            <div>{convertISOToReadableDate(date)}</div>
          </div>
          <button className="flex flex-col items-center justify-center w-8 h-8 ml-auto rounded-full gap-2 transition-all duration-300 hover:bg-slate-400/10 active:scale-95">
            <div className="w-2 h-2 bg-slate-300 rounded-md" />
            <div className="w-2 h-2 bg-slate-300 rounded-md" />
          </button>
        </div>
        <div className="text-sm text-opacity-80">{review}</div>
      </BgText>
    </PrimaryBg>
  );
}
