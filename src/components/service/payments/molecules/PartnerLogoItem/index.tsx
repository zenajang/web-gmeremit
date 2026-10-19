import Image from "next/image";
import * as S from "./styles";
import type { PaymentPartnerLogo } from "@/components/service/payments/types";

interface PartnerLogoItemProps {
  partner: PaymentPartnerLogo;
}

const PartnerLogoItem = ({ partner }: PartnerLogoItemProps) => {
  return (
    <div className={S.PartnerLogoItemWrapper}>
      <Image
        src={partner.src}
        alt={partner.name}
        width={160}
        height={56}
        className={S.PartnerLogoItemImage}
      />
    </div>
  );
};

export default PartnerLogoItem;
