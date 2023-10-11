// TODO:ADD IMAGE TO OPENGRAPH
import type { Metadata } from "next";
import Lorem1000 from "~/utils/lorem-1000";

type Props = {
  params: { id: string };
  searchParams: { table?: string };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const id = params.id;
  const tableNumber = searchParams.table ?? "";
  return {
    title: `Resturant ${id} | table - ${tableNumber}`,
  };
}

export default function ResturantPage({ params }: DynamicParamInterface) {
  return (
    <section className="container min-h-screen p-3 mx-auto overflow-auto">
      Resturant ID -&gt; <b>{params.id}</b>
      <Lorem1000 />
    </section>
  );
}
