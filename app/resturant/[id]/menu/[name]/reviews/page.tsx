import { currentUser } from "@clerk/nextjs/server";
import { PencilIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import AccentBg from "~/utils/accent-bg";
import BgBackground from "~/utils/bg-bg";
import BgText from "~/utils/bg-text";
import { PrimaryBg } from "~/utils/primary-bg";
import { convertUnixTimestampToHumanReadable } from "~/utils/time-converter";
import UserImageButton from "~/utils/user-img-button";
import { BackButton } from "../../../back-button";

type ReviewPageProps = {
  params: {
    id: string;
    name: string;
  };
  searchParams: {
    redirect_url: string;
    table: string;
  };
};

export default async function ReviewPage({
  searchParams,
  params,
}: ReviewPageProps) {
  const user = await currentUser();
  if (!user) return <></>;
  return (
    <section className="container relative max-h-screen p-3 pb-16 mx-auto overflow-auto">
      <BgBackground className="fixed text-sm sm:bottom-6 sm:right-6 rounded-md bg-opacity-100 bottom-16 right-6">
        <button className="active:scale-95 group transition-all duration-300 will-change-transform">
          <PrimaryBg className="flex items-center p-2 rounded-md hover:bg-opacity-20 gap-3 bg-opacity-10 transition-all duration-300 group-focus:bg-opacity-20">
            <PencilIcon className="w-6 h-6" />
            <div className="hidden sm:block">Write a review</div>
          </PrimaryBg>
        </button>
      </BgBackground>
      <div className="flex items-center justify-between">
        <BackButton />
        <BgText className="text-xl font-semibold sm:text-2xl text-opacity-80">
          Reviews
        </BgText>
        <UserImageButton username={user.username!} imageUrl={user.imageUrl} />
      </div>
      <div className="flex flex-col items-center justify-center mt-5 gap-6">
        {Array.from({ length: 20 }).map((_, index) => (
          <ReviewCard key={index} />
        ))}
      </div>
    </section>
  );
}

export function ReviewCard() {
  return (
    <PrimaryBg className="w-full max-w-2xl p-2 rounded-md hover:bg-opacity-10 transition-all duration-300">
      <BgText className="text-opacity-80 space-y-3">
        <div className="flex items-center gap-6">
          <div className="relative">
            <AccentBg className="absolute p-1 text-xs font-medium bottom-1 bg-opacity-100 w-fit rounded-md -right-2">
              5.0
            </AccentBg>
            <Image
              src="https://picsum.photos/id/51/5000/3333"
              alt="username"
              height={48}
              draggable={"false"}
              width={48}
              className="object-cover w-12 h-12 rounded-full"
            />
          </div>
          <div className="text-xs font-medium space-y-1">
            <div>Alyce Lambo</div>
            <div>25/06/2020</div>
          </div>
          <button className="flex flex-col items-center justify-center w-8 h-8 ml-auto rounded-full gap-2 transition-all duration-300 hover:bg-slate-400/10 active:scale-95">
            <div className="w-2 h-2 bg-slate-300 rounded-md" />
            <div className="w-2 h-2 bg-slate-300 rounded-md" />
          </button>
        </div>
        <div className="text-sm text-opacity-80">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
          tempora nihil sed quidem quae perferendis eaque commodi, maiores rem,
          ab corrupti aliquid nemo sapiente sequi voluptates placeat
          reprehenderit recusandae expedita.
        </div>
      </BgText>
    </PrimaryBg>
  );
}
