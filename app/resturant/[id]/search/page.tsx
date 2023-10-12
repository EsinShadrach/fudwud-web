type Props = {
  params: { id: string };
  searchParams: { table?: string; search?: string };
};

export default function SearchPage({ params, searchParams }: Props) {
  console.log(params);
  return <>Searching for {searchParams.search}</>;
}
