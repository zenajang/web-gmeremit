"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import { JourneyYear } from "@/components/company/about-us/molecules";
import {
  AboutUsSection,
  AboutUsSectionEyebrow,
  AboutUsSectionTitle,
} from "@/components/company/about-us/styles";
import { ABOUT_US_NAMESPACE, aboutJourney } from "@/components/company/about-us/constants";

const CompanyJourney = () => {
  const { t } = useTranslation(ABOUT_US_NAMESPACE);

  return (
    <section className={AboutUsSection}>
      <div className={AboutUsSectionEyebrow}>{t("journey.eyebrow")}</div>
      <h2 className={AboutUsSectionTitle}>{t("journey.title")}</h2>
      <p className={S.CompanyJourneyIntro}>{t("journey.intro")}</p>
      <div className={S.CompanyJourneyTimeline}>
        {aboutJourney.map((year) => (
          <JourneyYear key={year.year} year={year} />
        ))}
      </div>
    </section>
  );
};

export default CompanyJourney;
