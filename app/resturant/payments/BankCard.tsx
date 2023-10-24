import AccentBg from "~/utils/accent-bg";
import formatCreditCardNumber from "./format-card-number";
import { VisaOrMasterCard } from "./VisaOrMasterCard";

export type BankCardProps = {
  cardNumber: string;
  isVisa: boolean;
  cvv: string;
  expiry: string;
};
export function BankCard({ cardNumber, isVisa, cvv, expiry }: BankCardProps) {
  return (
    <AccentBg className="w-full max-w-md mx-auto mt-5 rounded-lg bg-opacity-100 sm:h-52">
      <div className="flex flex-col justify-between w-full h-full p-3 rounded-lg bg-gradient-to-br from-transparent via-white/40 gap-6">
        <VisaOrMasterCard isVisa={isVisa} />
        <div className="text-xl font-semibold text-center text-white">
          {formatCreditCardNumber(cardNumber)}
        </div>
        <div className="flex items-center justify-between text-xs text-white">
          <div className="text-center">
            <div>CVV</div>
            <div>{cvv}</div>
          </div>
          <div className="text-center">
            <div>EXPIRES</div>
            <div>{expiry}</div>
          </div>
        </div>
      </div>
    </AccentBg>
  );
}
