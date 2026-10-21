"use client";

import { FcConferenceCall, FcDownload, FcExternal } from "react-icons/fc";
import * as S from "./styles";
import SectionHeader from "@/components/ui/SectionHeader";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useTranslation } from "@/hooks/useTranslation";
import { ProcessStepCard } from "@/components/service/remittance/molecules";
import {
  RemittanceSection,
  RemittanceSectionHeaderColor,
} from "@/components/service/remittance/styles";
import { processStepKeys } from "@/components/service/remittance/constants";

const processStepIcons = [
  <FcDownload key="step1" className={S.RemittanceProcessIcon} />,
  <FcConferenceCall key="step2" className={S.RemittanceProcessIcon} />,
  <FcExternal key="step3" className={S.RemittanceProcessIcon} />,
];

const RemittanceProcess = () => {
  const { t } = useTranslation();
  const { registerSectionRef } = useScrollFadeIn();

  return (
    <section ref={registerSectionRef(0)} className={RemittanceSection}>
      <div className={S.RemittanceProcessContainer}>
        <SectionHeader
          title={t("services-remittance.process.title")}
          title2={t("services-remittance.process.title2")}
          description={t("services-remittance.process.subtitle")}
          colorClass={RemittanceSectionHeaderColor}
        />

        <div className={S.RemittanceProcessGrid}>
          {processStepKeys.map((step, index) => (
            <ProcessStepCard
              key={step}
              step={step}
              index={index}
              icon={processStepIcons[index]}
              hasConnector={index < processStepKeys.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RemittanceProcess;
