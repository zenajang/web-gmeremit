"use client";

import Image from "next/image";
import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import { AboutUsSection, AboutUsSectionTitle } from "@/components/company/about-us/styles";
import { ABOUT_US_NAMESPACE, aboutPartnerLogos } from "@/components/company/about-us/constants";

const GlobalPartnerships = () => {
  const { t } = useTranslation(ABOUT_US_NAMESPACE);

  return (
    <section className={AboutUsSection}>
      <h2 className={AboutUsSectionTitle}>{t("partners.title")}</h2>
      <div className={S.GlobalPartnershipsGrid}>
        {aboutPartnerLogos.map((logo) => (
          <article key={logo.src} className={S.GlobalPartnershipsCard}>
            <div className={S.GlobalPartnershipsLogoBox}>
              <Image
                className={S.GlobalPartnershipsLogo}
                src={logo.src}
                alt={logo.alt}
                width={210}
                height={92}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GlobalPartnerships;
