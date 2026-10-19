"use client";

import Image from "next/image";
import * as S from "./styles";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useTranslation } from "@/hooks/useTranslation";

const TrustCompliance = () => {
  const { t } = useTranslation();
  const { registerSectionRef } = useScrollFadeIn();

  return (
    <section ref={registerSectionRef(0)} className={S.TrustComplianceSection}>
      <div className={S.TrustComplianceContainer}>
        <h2 className={S.TrustComplianceTitle}>{t("services-remittance.trust.title")}</h2>
        <p className={S.TrustComplianceDescription}>{t("services-remittance.trust.desc")}</p>
        <Image
          src="/images/license.png"
          alt="GME License"
          width={1200}
          height={700}
          className={S.TrustComplianceImage}
        />
        <p className={S.TrustComplianceNote}>* {t("services-remittance.trust.insurance")}</p>
      </div>
    </section>
  );
};

export default TrustCompliance;
