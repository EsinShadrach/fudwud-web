import { currentUser } from "@clerk/nextjs/server";
import BgText from "~/utils/bg-text";
import UserImageButton from "~/utils/user-img-button";
import { BackButton } from "../[id]/back-button";
import { RenderFavourites } from "./RenderFavourites";

type BaseProps = {
  params: { id: string };
  searchParams: { redirect_url?: string };
};

export default async function FavouritePage({ searchParams }: BaseProps) {
  const redirect_url = searchParams.redirect_url ?? "/resturant";
  const user = await currentUser();
  if (!user) return <>Login</>;
  return (
    <section className="container min-h-screen p-3 mx-auto overflow-auto">
      <div className="flex items-center justify-between py-3">
        <div>
          <BackButton link={redirect_url} />
        </div>
        <BgText className="text-xl font-semibold sm:text-2xl text-opacity-80">
          Payment Info
        </BgText>
        <UserImageButton imageUrl={user.imageUrl} username={user.username!} />
      </div>
      <RenderFavourites />
    </section>
  );
}
