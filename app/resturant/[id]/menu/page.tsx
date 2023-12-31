import Image from "next/image";
import largePizza from "~/public/large-pizza.png";
import BgText from "~/utils/bg-text";
import FilterButton from "../../filter-button";
import { BackButton } from "../back-button";
import { DropDownButton } from "./DropDownButton";
import { NumberOfItemsInMenu } from "./NumberOfItemsInMenu";
import { RenderMenu } from "./RenderMenu";
// ! GET NAME OF RESTURANT HERE
export default function Menu({ params, searchParams }: BaseProps) {
  return (
    <section className="container max-h-screen p-3 pt-0 pr-0 mx-auto overflow-auto">
      <div className="relative flex items-baseline overflow-x-clip">
        <div className="absolute left-0 -top-4">
          <BackButton />
        </div>
        <div className="pb-16 mt-auto">
          <h1 className="text-2xl font-semibold leading-tight sm:text-5xl">
            <BgText className="text-opacity-90">Resturant {params.id}</BgText>
            <div>Menu</div>
          </h1>
          <NumberOfItemsInMenu />
        </div>
        <Image
          alt="A pizza"
          src={largePizza}
          placeholder="blur"
          className="w-full max-w-sm ml-auto"
          draggable={"false"}
        />
      </div>
      <div className="pr-3">
        <div className="flex items-start justify-between max-w-xl">
          <div className="flex items-baseline text-sm gap-2">
            <small>
              <BgText className="text-opacity-90">Sort by:</BgText>
            </small>
            <DropDownButton />
          </div>
          <div>
            <FilterButton />
          </div>
        </div>
        <RenderMenu />
      </div>
    </section>
  );
}
