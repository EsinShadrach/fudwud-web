interface ResturantPageInterface {
  params: { id: string };
}
export default function ResturantPage({ params }: ResturantPageInterface) {
  return (
    <section className="container flex items-center justify-center min-h-screen p-3 mx-autp">
      Resturant ID -&gt; <b>{params.id}</b>
    </section>
  );
}
