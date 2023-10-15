type Props = {
  params: { id: string };
  searchParams: { table?: string };
};

export default function FilterPage({ params, searchParams }: Props) {
  return (
    <section className="container max-h-screen p-3 mx-auto overflow-auto">
      Filter for table {searchParams.table} in resturant {params.id}
    </section>
  );
}
