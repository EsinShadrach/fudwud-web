import Image from "next/image";
import largePizza from "~/public/large-pizza.png";
import BgText from "~/utils/bg-text";
//TODO: Render all the food items here
// ! GET NUMBER OF ITEMS HERE
// ! GET NAME OF RESTURANT HERE
export default function Menu({ params, searchParams }: BaseProps) {
  return (
    <section className="container p-3 pt-0 pr-0 mx-auto overflow-x-hidden">
      <div className="flex items-baseline">
        <div className="pb-20 mt-auto">
          <h1 className="text-2xl font-semibold leading-tight sm:text-5xl">
            <BgText className="text-opacity-90">Resturant {params.id}</BgText>
            <div>Menu</div>
          </h1>
          <small>
            <BgText className="text-opacity-70">80 items in menu</BgText>
          </small>
        </div>
        <Image
          alt="A pizza"
          src={largePizza}
          className="w-full max-w-sm ml-auto"
          draggable={"false"}
        />
      </div>
      <div className="-mt-12">
        <div>
          <small><BgText className="text-opacity-90">Sort by:</BgText></small>
        </div>
      </div>
    </section>
  );
}
