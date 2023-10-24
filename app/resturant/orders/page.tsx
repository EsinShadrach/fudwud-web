import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import BgText from "~/utils/bg-text";
import { PrimaryBg } from "~/utils/primary-bg";
import UserImageButton from "~/utils/user-img-button";
import { BackButton } from "../[id]/back-button";
import { EditInstructionsArea } from "./EditInstructionsArea";
import { RenderOrders } from "./RenderOrders";
import { TableText } from "./TableText";

type BaseProps = {
  params: { id: string };
  searchParams: { redirect_url?: string };
};

export default async function OrdersPage({ searchParams }: BaseProps) {
  const redirect_url = searchParams.redirect_url ?? "/resturant";
  const user = await currentUser();
  if (!user) return <>Login</>;
  return (
    <section className="container max-h-screen p-3 pt-0 mx-auto overflow-auto">
      <div className="flex items-center justify-between">
        <div className="m-0">
          <BackButton link={redirect_url} />
        </div>
        <BgText className="text-xl font-semibold sm:text-2xl text-opacity-80">
          My Orders
        </BgText>
        <UserImageButton imageUrl={user.imageUrl} username={user.username!} />
      </div>
      <RenderOrders />
      <div className="flex items-center justify-center">
        <Link
          href={redirect_url}
          className="w-full max-w-sm mx-auto rounded-full"
        >
          <PrimaryBg className="w-full max-w-sm py-2 mx-auto rounded-full bg-opacity-100">
            <div className="font-medium text-center text-white">
              Add More Items
            </div>
          </PrimaryBg>
        </Link>
      </div>
      <div className="w-full max-w-md mx-auto mt-8 divide-y">
        <TableText name="Discount" price="0.00" />
        <TableText name="Subtotal" price="27.30" />
        <TableText name="Tax and Fees" price="5.30" />
        <TableText isTotal name="Total" price="33.60" />
      </div>
      <div>
        <EditInstructionsArea content="this is for the first item Instructions" />
        <EditInstructionsArea content="this is for the second item Instructions" />
      </div>
      <div className="flex items-center justify-center mt-6">
        <Link
          href={`/resturant/payments/?redirect_url=${redirect_url}`}
          className="w-full max-w-md mx-auto rounded-full"
        >
          <PrimaryBg className="w-full max-w-md py-2 mx-auto rounded-full bg-opacity-10">
            <div className="font-medium text-center">Add Payment Method</div>
          </PrimaryBg>
        </Link>
      </div>
    </section>
  );
}
