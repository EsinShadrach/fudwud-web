import { currentUser } from "@clerk/nextjs/server";
import BgText from "~/utils/bg-text";
import UserImageButton from "~/utils/user-img-button";
import { BackButton } from "../../../back-button";
import { RenderCheckOuts } from "./RenderCheckOuts";

type Props = {
  params: {
    id: string;
    name: string;
  };
  searchParams: {
    redirect_url: string;
    table: string;
  };
};
export default async function CheckOut({ searchParams }: Props) {
  const user = await currentUser();
  const redirectUrl = searchParams.redirect_url;
  if (!user) return <>No user</>;
  return (
    <section className="container max-h-screen p-3 mx-auto overflow-auto">
      <div className="flex items-center justify-between">
        <div className="w-fit">
          <BackButton link={redirectUrl} hasMargin={false} />
        </div>
        <BgText className="text-xl font-semibold text-opacity-90 sm:text-2xl">
          Check Out
        </BgText>
        <UserImageButton imageUrl={user.imageUrl} username={user.username!} />
      </div>
      <RenderCheckOuts />
    </section>
  );
}
