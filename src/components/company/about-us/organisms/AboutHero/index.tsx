"use client";

import Image from "next/image";
import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import { ABOUT_US_NAMESPACE } from "@/components/company/about-us/constants";

const AboutHero = () => {
  const { t } = useTranslation(ABOUT_US_NAMESPACE);

  return (
    <>
      <div className={S.AboutHeroEyebrow}>{t("hero.eyebrow")}</div>
      <h1 className={S.AboutHeroTitle}>{t("hero.title")}</h1>
      <div className={S.AboutHeroRule} />
      <p className={S.AboutHeroLead}>{t("hero.lead")}</p>
      <Image
        className={S.AboutHeroImage}
        src="/images/company/about/gme-team.jpg"
        alt={t("hero.title")}
        width={1600}
        height={900}
        priority
      />
    </>
  );
};

export default AboutHero;
