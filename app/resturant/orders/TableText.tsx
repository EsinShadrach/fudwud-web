import BgText from "~/utils/bg-text";

type TableTypeProps = {
  name: string;
  price: string;
  isTotal?: boolean;
};

export function TableText({ name, price, isTotal }: TableTypeProps) {
  return (
    <div className="py-2.5 flex items-center justify-between text-sm">
      <BgText className={`${isTotal && "font-medium"} text-opacity-90`}>
        {name}
      </BgText>
      <BgText className="font-medium text-opacity-90">${price}</BgText>
    </div>
  );
}
