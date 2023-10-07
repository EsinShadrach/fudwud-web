"use client";

import { FacebookLogo } from "~/utils/icons/facebook";
import { GoogleLogo } from "~/utils/icons/google";
import { OauthButton } from "~/utils/oauth-button";
import { useRouter } from "next/navigation";

export function OAuthRow() {
  const router = useRouter();
  function goToSignupPage() {
    router.push("/sign-up");
  }
  return (
    <div className="flex justify-between w-full max-w-md mx-auto gap-3">
      <OauthButton
        onClick={goToSignupPage}
        name="Facebook"
        className="w-full max-w-[]"
      >
        <FacebookLogo className="w-12 h-12" />
      </OauthButton>
      <OauthButton
        onClick={goToSignupPage}
        name="Google"
        className="w-full py-2 pl-2"
      >
        <GoogleLogo className="w-8 h-8" />
      </OauthButton>
    </div>
  );
}
