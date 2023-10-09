import {currentUser} from "@clerk/nextjs";
import Image from "next/image";
import BgBackground from "~/utils/bg-bg";
import BgText from "~/utils/bg-text";
import {LogoutButton} from "~/utils/logout-button";
import {PrimaryBg} from "~/utils/primary-bg";
import {PrimaryShadow} from "~/utils/primary-shadow";
import {titleCase} from "~/utils/titleCase";
import {UnAuthenticatedProfile} from "./UnAuthenticatedProfile";

export async function generateMetadata() {
  const user = await currentUser();
  return {
    title: user?.username ? `${titleCase(user.username)} - Profile` : "Profile",
  };
}

export default async function ProfilePage() {
  const user = await currentUser();
  if (!user) {
    return <UnAuthenticatedProfile />;
  }
  return (
    <section className="container mx-auto">
      <PrimaryBg className="w-full h-40 rounded-b-2xl">
        <div className="p-3">
          <LogoutButton />
        </div>
      </PrimaryBg>
      <div className={``}>
        <BgBackground className="p-2 mx-auto rounded-full shadow-xl -translate-y-1/2 w-fit">
          <PrimaryShadow className="rounded-full">
            <Image
              alt={`${user.username}'s Profile Photo`}
              src={user.imageUrl}
              width={75}
              height={75}
              draggable={"false"}
              className={`rounded-full mx-auto hover:opacity-75 transition-all duration-300`}
            />
          </PrimaryShadow>
        </BgBackground>
        <div className="text-center -translate-y-1/2">
          <BgText className="text-xl font-semibold sm:text-2xl">
            ~ {titleCase(user.username!)} ~
          </BgText>
        </div>
        <div className="fixed inset-x-0 bottom-0 pb-2 text-center">
          <BgText>Page still in development</BgText>
        </div>
      </div>
    </section>
  );
}
