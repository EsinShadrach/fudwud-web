import BgText from "~/utils/bg-text";
import { PrimaryBg } from "~/utils/primary-bg";
import { BackButton } from "../back-button";
import {RenderFilters} from "./RenderFilters";

type Props = {
  params: { id: string };
  searchParams: { table?: string };
};

export default function FilterPage({}: Props) {
  return (
    <section className="container max-h-screen p-3 mx-auto overflow-auto">
      <div className="flex items-center justify-between">
        <BackButton />
        <BgText className="text-2xl font-semibold sm:text-3xl text-opacity-50">
          Filters
        </BgText>
        <button className="rounded-full group active:scale-95 transition-all duration-300">
          <PrimaryBg className="px-3 py-1 text-sm rounded-full bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 group-focus:bg-opacity-10">
            <BgText className="text-opacity-100">Done</BgText>
          </PrimaryBg>
        </button>
      </div>
      <RenderFilters />
    </section>
  );
}


