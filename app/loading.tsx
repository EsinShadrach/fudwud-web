import BgText from "~/utils/bg-text";
import { PrimaryBg } from "~/utils/primary-bg";
import logo from "~/public/logo-new.png";
import Image from "next/image";

export default function LoadingPage() {
  return (
    <PrimaryBg
      className={`min-h-screen flex justify-center items-center bg-slate-950 flex-col gap-0`}
    >
      <div
        className={`bg-white rounded-xl p-3 flex justify-center items-center animate-bounce`}
      >
        <Image alt="Fudwud Logo" src={logo} />
      </div>
      <BgText className="text-4xl font-semibold text-opacity-100">
        FudWud
      </BgText>
    </PrimaryBg>
  );
}
