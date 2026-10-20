"use client";

import Image from "next/image";
import * as S from "./styles";
import SectionHeader from "@/components/ui/SectionHeader";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useTranslation } from "@/hooks/useTranslation";
import { CountryChip } from "@/components/service/remittance/molecules";
import { RemittanceSectionHeaderColor } from "@/components/service/remittance/styles";
import {
  COUNTRIES_PER_ROW,
  COUNTRY_ROW_OPACITIES,
  remittanceCountries,
} from "@/components/service/remittance/constants";

const getCountryOpacity = (index: number) => {
  const row = Math.floor(index / COUNTRIES_PER_ROW);
  return COUNTRY_ROW_OPACITIES[row] ?? COUNTRY_ROW_OPACITIES[COUNTRY_ROW_OPACITIES.length - 1];
};

const RegionsCoverage = () => {
  const { t } = useTranslation();
  const { registerSectionRef } = useScrollFadeIn();

  return (
    <section ref={registerSectionRef(0)} className={S.RegionsCoverageSection}>
      <Image
        src="/images/worldmap.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className={S.RegionsCoverageBackground}
      />
      <div className={S.RegionsCoverageContainer}>
        <SectionHeader
          title={t("services-remittance.regions.title")}
          title2={t("services-remittance.regions.title2")}
          description={t("services-remittance.regions.subtitle")}
          colorClass={RemittanceSectionHeaderColor}
          className={S.RegionsCoverageHeaderSpacing}
        />

        <div className={S.RegionsCoverageChipList}>
          {remittanceCountries.map((country, index) => (
            <CountryChip key={country} country={country} opacity={getCountryOpacity(index)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionsCoverage;
