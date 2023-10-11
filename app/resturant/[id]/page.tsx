// TODO:ADD IMAGE TO OPENGRAPH
import type { Metadata } from "next";

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
    <section className="container flex items-center justify-center min-h-screen p-3 mx-autp">
      Resturant ID -&gt; <b>{params.id}</b>
    </section>
  );
}
