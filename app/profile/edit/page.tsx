import {
  ChevronRightIcon,
  LockClosedIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import BgText from "~/utils/bg-text";

export default async function EditProfilePage() {
  return (
    <section className="container flex flex-col min-h-screen p-3 pb-0 mx-auto">
      <div className="text-center">
        <h1 className="text-xl font-semibold sm:text-2xl">
          <BgText>Account Settings</BgText>
        </h1>
        <div className="opacity-75">
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

interface ActionTileInterface {
  title: string;
  subtitle: string;
  route: string;
  icon: JSX.Element;
}

function ActionTile({ route, subtitle, title, icon }: ActionTileInterface) {
  return (
    <Link href={route} className="w-full">
      <div className="flex items-center w-full max-w-xl p-3 border-b hover:bg-gray-300/20 transition-all duration-300 gap-3 group border-inherit">
        <BgText>{icon}</BgText>
        <div>
          <div>
            <BgText>{title}</BgText>
          </div>
          <div className="opacity-50">
            <small className="max-w-xs overflow-hidden text-xs sm:text-sm whitespace-nowrap">
              <BgText>{subtitle}</BgText>
            </small>
          </div>
        </div>
        <div className="ml-auto transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
          <ChevronRightIcon className="w-6 h-6" />
        </div>
      </div>
    </Link>
  );
}
