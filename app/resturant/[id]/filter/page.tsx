import BgText from "~/utils/bg-text";
import { BackButton } from "../back-button";
import { DoneButton } from "./DoneButton";
import { RenderFilters } from "./RenderFilters";

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
        <DoneButton />
      </div>
      <RenderFilters />
    </section>
  );
}
