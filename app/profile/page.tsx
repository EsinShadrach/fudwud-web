import { currentUser } from "@clerk/nextjs";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import BgBackground from "~/utils/bg-bg";
import BgText from "~/utils/bg-text";
import { LogoutButton } from "~/utils/logout-button";
import { PrimaryBg } from "~/utils/primary-bg";
import { PrimaryShadow } from "~/utils/primary-shadow";
import { titleCase } from "~/utils/titleCase";
import { AccountSettingsButton } from "./AccountSettingsButton";
import { FormLikeField } from "./FormLikeField";
import { UnAuthenticatedProfile } from "./UnAuthenticatedProfile";

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
      <PrimaryBg className="flex justify-between w-full h-40 rounded-b-2xl">
        <div className="p-3">
          <LogoutButton />
        </div>
        <Link href={`/profile/edit`} className="hidden p-3 md:block">
          <BgBackground className="flex items-center p-1 pr-2 rounded-full gap-1">
            <PencilSquareIcon className="w-6 h-6" />
            <span>Edit Profile</span>
          </BgBackground>
        </Link>
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
        <div className="container p-3 mx-auto -mt-10 text-center space-y-2">
          <BgText className="text-xl font-semibold sm:text-2xl">
            ~ {titleCase(user.username!)} ~
          </BgText>
          <div>
            <Link href={`/profile/edit`}>
              <BgText className="text-sm opacity-75">Edit Profile</BgText>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center text-start gap-3">
            <FormLikeField
              content={titleCase(user.username!)}
              fieldName="Username"
            />
            <FormLikeField
              content={user.emailAddresses[0].emailAddress}
              fieldName="Email"
            />
            <FormLikeField
              content={
                user.phoneNumbers[0]
                  ? user.phoneNumbers[0].phoneNumber
                  : "None added"
              }
              fieldName="Phone Number"
            />
            <AccountSettingsButton />
          </div>
        </div>
        <div className="fixed inset-x-0 bottom-0 pb-2 text-center">
          <BgText>Page still in development</BgText>
        </div>
      </div>
    </section>
  );
}
