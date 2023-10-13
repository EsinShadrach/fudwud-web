// ! Even though the name of the catch all route is name I will not be using the name it'd be better if it was slug or something
type OrderDetailPageType = {
  params: {
    id: string;
    name: string;
  };
  searchParams: {
    table?: string;
  };
};

export default function DetailedPage({
  params,
  searchParams,
}: OrderDetailPageType) {
  return <div>For product with name of =&gt; {params.name}</div>;
}
