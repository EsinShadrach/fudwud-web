import { currentUser } from "@clerk/nextjs/server";
import { PencilIcon } from "@heroicons/react/24/solid";
import BgBackground from "~/utils/bg-bg";
import BgText from "~/utils/bg-text";
import Lorem1000 from "~/utils/lorem-1000";
import { PrimaryBg } from "~/utils/primary-bg";
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
      <div className="mt-5">
        <ReviewCard />
      </div>
    </section>
  );
}

export function ReviewCard() {
  return (
    <div>
      <BgText className="text-opacity-80">
        <div></div>
        <div></div>
      </BgText>
    </div>
  );
}
