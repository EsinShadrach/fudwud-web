import { LockClosedIcon, StarIcon, UserIcon } from "@heroicons/react/24/solid";
import BgText from "~/utils/bg-text";
import { ActionTile } from "./ActionTile";

export default async function EditProfilePage() {
  return (
    <section className="container flex flex-col min-h-screen p-3 pb-0 mx-auto">
      <div className="text-center space-y-2">
        <h1 className="text-xl font-semibold sm:text-2xl">
          <BgText>Account Settings</BgText>
        </h1>
        <div className="text-sm opacity-75 sm:text-base">
          <BgText>
            Update your account settings like password and profile edit
          </BgText>
        </div>
      </div>
      <div className="flex flex-col mt-10 gap-3 md:flex-row">
        <ActionTile
          route="/profile/edit/profile-info"
          subtitle="Change your account information here"
          title="Profile Information"
          icon={<UserIcon className="w-6 h-6" />}
        />
        <ActionTile
          route="/profile/edit/password"
          subtitle="Change your password here"
          title="Change Password"
          icon={<LockClosedIcon className="w-4 h-4" />}
        />
      </div>
      <div className="mt-auto">
        <div className="font-semibold">
          <BgText>More</BgText>
        </div>
        <ActionTile
          route="#"
          title="Rate Us"
          subtitle="Rate us on playstore, appstore"
          icon={<StarIcon className="w-6 h-6 text-yellow-500" />}
        />
      </div>
    </section>
  );
}
