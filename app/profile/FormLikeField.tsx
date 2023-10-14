import Link from "next/link";
import BgText from "~/utils/bg-text";
import PrimaryBorder from "~/utils/primary-border";

interface FormLikeFieldInterface {
  fieldName: string;
  content: string;
}
export function FormLikeField({ content, fieldName }: FormLikeFieldInterface) {
  return (
    <div className="w-full max-w-md rounded-md">
      <small className="opacity-90">
        <BgText className="text-opacity-100">{fieldName}</BgText>
      </small>
      <Link href={`/profile/edit`}>
        <PrimaryBorder className="max-w-md p-3 border rounded-md hover:bg-gray-300/20 transition-all duration-300">
          <BgText className="text-opacity-100">{content}</BgText>
        </PrimaryBorder>
      </Link>
    </div>
  );
}
