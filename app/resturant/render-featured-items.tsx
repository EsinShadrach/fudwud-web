import Image from "next/image";
import sampleImg from "~/public/sample-food.png";
import BgBackground from "~/utils/bg-bg";
import BgText from "~/utils/bg-text";
import { HeartIcon } from "~/utils/icons/heart-active";
import StarIcon from "~/utils/icons/star";
import { PrimaryBg } from "~/utils/primary-bg";
export default function RenderFeaturedItems() {
  return (
    <>
      <FeaturedItemCard />
    </>
  );
}

function FeaturedItemCard() {
  return (
    <div className="w-full max-w-md overflow-hidden shadow-xl rounded-xl">
      <div className="relative">
        <div className="absolute inset-0 flex items-start justify-between p-3 bg-black/20">
          <BgBackground className="flex items-center p-1 px-2 rounded-full">
            <BgText className="text-sm font-semibold">4.5</BgText>
            <StarIcon className="w-6 h-6" />
            <BgText className="text-xs opacity-50">(25+)</BgText>
          </BgBackground>
          <PrimaryBg className="flex items-center justify-center p-1 text-white rounded-full">
            <HeartIcon className="w-5 h-5" />
          </PrimaryBg>
        </div>
        <Image src={sampleImg} alt="foodname" width={448} height={200} />
      </div>
      <div className="p-3">apple</div>
    </div>
  );
}
