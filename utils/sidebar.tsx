import { User } from "@clerk/nextjs/server";
import BgBackground from "./bg-bg";
import { SidebarMain } from "./SidebarMain";

export default function Sidebar({ user }: { user: User | null }) {
  if (!user) return <></>;
  return (
    <BgBackground className="bg-opacity-100">
      <SidebarMain
        username={user.username!}
        imageUrl={user.imageUrl!}
        emailAddresses={user.emailAddresses[0].emailAddress}
      />
    </BgBackground>
  );
}
