"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import {
  AboutUsCardText,
  AboutUsCardTitle,
  AboutUsSection,
  AboutUsSectionTitle,
} from "@/components/company/about-us/styles";
import { ABOUT_US_NAMESPACE, aboutTechKeys } from "@/components/company/about-us/constants";

const Technology = () => {
  const { t } = useTranslation(ABOUT_US_NAMESPACE);

  return (
    <section className={AboutUsSection}>
      <h2 className={AboutUsSectionTitle}>{t("tech.title")}</h2>
      <div className={S.TechnologyGrid}>
        {aboutTechKeys.map((key) => (
          <div key={key} className={S.TechnologyCard}>
            <h3 className={AboutUsCardTitle}>{t(`tech.items.${key}.title`)}</h3>
            <p className={AboutUsCardText}>{t(`tech.items.${key}.desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
