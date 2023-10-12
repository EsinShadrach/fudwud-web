import { currentUser } from "@clerk/nextjs";

export default async function RenderFeaturedItems() {
  const user = await currentUser();
  return <>{user?.username}</>;
}
