"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { WhyGmeCard } from "@/components/company/careers/molecules";
import {
  CareersCardGrid,
  CareersContainer,
  CareersSectionMuted,
  CareersSectionTitle,
} from "@/components/company/careers/styles";
import { whyGmeIcons, whyGmeKeys } from "@/components/company/careers/constants";

const WhyGme = () => {
  const { t } = useTranslation();

  return (
    <section className={CareersSectionMuted}>
      <div className={CareersContainer}>
        <h2 className={CareersSectionTitle}>{t("company-careers.why_gme.title")}</h2>
        <div className={CareersCardGrid}>
          {whyGmeKeys.map((key, index) => (
            <WhyGmeCard key={key} itemKey={key} iconPath={whyGmeIcons[index]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGme;
