import Image from "next/image";
import largePizza from "~/public/large-pizza.png";
import BgText from "~/utils/bg-text";
import FilterButton from "../../filter-button";
import { DropDownButton } from "./DropDownButton";
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
      <div className="pr-3 -mt-12">
        <div className="flex items-center justify-between max-w-xl">
          <div className="flex items-center text-sm gap-2">
            <small>
              <BgText className="text-opacity-90">Sort by:</BgText>
            </small>
            <DropDownButton />
          </div>
          <div>
            <FilterButton table={searchParams.table} />
          </div>
        </div>
      </div>
    </section>
  );
}
