type Props = {
  params: { id: string };
  searchParams: { table?: string };
};

export default function FilterPage({ params, searchParams }: Props) {
  console.log(params.id);
  return <section>THIS IS FILTER PAGE FOR TABLE: {searchParams.table}</section>;
}
