type ReviewPageProps = {
  params: {
    id: string;
    name: string;
  };
  searchParams: {
    redirect_url: string;
    table: string;
  };
};

export default function ReviewPage({ searchParams, params }: ReviewPageProps) {
  return (
    <div>
      review for resturant -&gt; {params.id} <br /> for food item -&gt;{" "}
      {params.name} <br /> from table -&gt; {searchParams.table}
    </div>
  );
}
