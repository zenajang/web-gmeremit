"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import {
  AboutUsSection,
  AboutUsSectionEyebrow,
  AboutUsSectionTitle,
} from "@/components/company/about-us/styles";
import { ABOUT_US_NAMESPACE, aboutGlanceRows } from "@/components/company/about-us/constants";

const CompanyGlance = () => {
  const { t } = useTranslation(ABOUT_US_NAMESPACE);

  return (
    <section className={AboutUsSection}>
      <div className={AboutUsSectionEyebrow}>{t("glance.eyebrow")}</div>
      <h2 className={AboutUsSectionTitle}>{t("glance.title")}</h2>
      <div className={S.CompanyGlanceTable}>
        {aboutGlanceRows.map((row) => (
          <div key={row} className={S.CompanyGlanceRow}>
            <div className={S.CompanyGlanceLabel}>{t(`glance.rows.${row}.label`)}</div>
            <div className={S.CompanyGlanceValue}>{t(`glance.rows.${row}.value`)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyGlance;
