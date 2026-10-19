"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import { AboutUsSection, AboutUsSectionTitle } from "@/components/company/about-us/styles";
import { ABOUT_US_NAMESPACE, aboutServiceKeys } from "@/components/company/about-us/constants";

const OnlineServices = () => {
  const { t } = useTranslation(ABOUT_US_NAMESPACE);

  return (
    <section className={AboutUsSection}>
      <h2 className={AboutUsSectionTitle}>{t("services.title")}</h2>
      <div className={S.OnlineServicesGrid}>
        {aboutServiceKeys.map((key) => (
          <div key={key} className={S.OnlineServicesCard}>
            <h3 className={S.OnlineServicesCardTitle}>{t(`services.items.${key}`)}</h3>
          </div>
        ))}
      </div>
      <div className={S.OnlineServicesNetworkLine}>
        <strong>{t("network.title")}</strong>
        <br />
        {t("network.branches")}
      </div>
    </section>
  );
};

export default OnlineServices;
