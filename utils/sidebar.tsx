import { currentUser } from "@clerk/nextjs";
import BgBackground from "./bg-bg";
import { SidebarMain } from "./SidebarMain";

export default async function Sidebar() {
  const user = await currentUser();
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
