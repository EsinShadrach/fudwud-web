import { currentUser } from "@clerk/nextjs/server";
import BgText from "~/utils/bg-text";
import UserImageButton from "~/utils/user-img-button";
import { BankCard } from "./BankCard";
import { GoBackButton } from "./GoBackButton";

type BaseProps = {
  params: { id: string };
  searchParams: { redirect_url?: string };
};

export default async function PaymentPage() {
  const user = await currentUser();
  if (!user) return <>Login</>;
  return (
    <section className="container max-h-screen p-3 py-0 mx-auto overflow-auto">
      <div className="flex items-center justify-between">
        <div className="m-0">
          <GoBackButton />
        </div>
        <BgText className="text-xl font-semibold sm:text-2xl text-opacity-80">
          Payment Info
        </BgText>
        <UserImageButton imageUrl={user.imageUrl} username={user.username!} />
      </div>
      <BankCard
        cardNumber="0000000000000000"
        isVisa={false}
        cvv="123"
        expiry="08/23"
      />
    </section>
  );
}
