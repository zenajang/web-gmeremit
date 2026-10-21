"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";

interface ProcessStepMobileProps {
  step: string;
  index: number;
  hasConnector: boolean;
}

const ProcessStepMobile = ({ step, index, hasConnector }: ProcessStepMobileProps) => {
  const { t } = useTranslation();

  return (
    <div className={S.ProcessStepMobileWrapper}>
      <div className={S.ProcessStepMobileTimeline}>
        <div className={S.ProcessStepMobileDot}>
          <span className={S.ProcessStepMobileDotNumber}>{index + 1}</span>
        </div>
        {hasConnector && <div className={S.ProcessStepMobileLine} />}
      </div>
      <div className={S.ProcessStepMobileBody}>
        <h3 className={S.ProcessStepMobileTitle}>
          {t(`services-payments.process.${step}.title`)}
        </h3>
        <p className={S.ProcessStepMobileDescription}>
          {t(`services-payments.process.${step}.description`)}
        </p>
      </div>
    </div>
  );
};

export default ProcessStepMobile;
