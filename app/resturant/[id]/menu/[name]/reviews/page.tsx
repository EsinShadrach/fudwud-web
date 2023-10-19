import { currentUser } from "@clerk/nextjs/server";
import BgBackground from "~/utils/bg-bg";
import BgText from "~/utils/bg-text";
import UserImageButton from "~/utils/user-img-button";
import { BackButton } from "../../../back-button";
import { RenderReviews } from "./RenderReviews";
import { WriteReviewButton } from "./WriteReviewButton";

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
  const redirect_url = searchParams.redirect_url;
  return (
    <section className="container relative max-h-screen p-3 pb-16 mx-auto overflow-auto">
      <BgBackground className="fixed text-sm sm:bottom-6 sm:right-6 rounded-md bg-opacity-100 bottom-16 right-6">
        <WriteReviewButton />
      </BgBackground>
      <div className="flex items-center justify-between">
        <BackButton link={redirect_url ?? null} />
        <BgText className="text-xl font-semibold sm:text-2xl text-opacity-80">
          Reviews
        </BgText>
        <UserImageButton username={user.username!} imageUrl={user.imageUrl} />
      </div>
      <RenderReviews />
    </section>
  );
}
