// TODO:ADD IMAGE TO OPENGRAPH
import type { Metadata } from "next";
import { OpenNavButton } from "../toggleButton";

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

export default function ResturantPage({ params, searchParams }: Props) {
  return (
    <section className="container min-h-screen p-3 mx-auto overflow-auto">
      <OpenNavButton />
      <br />
        <br />
      Resturant ID -&gt; <b>{params.id}</b>
      <br />
      TABLE NUMBER =&gt; <b>{searchParams.table}</b>
    </section>
  );
}
