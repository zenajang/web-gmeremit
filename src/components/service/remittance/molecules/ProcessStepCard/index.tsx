"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import {
  RemittanceCardDescription,
  RemittanceCardTitle,
} from "@/components/service/remittance/styles";

interface ProcessStepCardProps {
  step: string;
  index: number;
  icon: React.ReactNode;
  hasConnector: boolean;
}

const ProcessStepCard = ({ step, index, icon, hasConnector }: ProcessStepCardProps) => {
  const { t } = useTranslation();

  return (
    <div className={S.ProcessStepCardWrapper}>
      {hasConnector && (
        <div className={S.ProcessStepCardConnector}>
          <div className={S.ProcessStepCardConnectorLine} />
        </div>
      )}

      <div className={S.ProcessStepCardBody}>
        <div className={S.ProcessStepCardIconBox}>{icon}</div>
        <p className={S.ProcessStepCardNumber}>STEP {String(index + 1).padStart(2, "0")}</p>
        <h3 className={RemittanceCardTitle}>
          {t(`services-remittance.process.${step}.title`)}
        </h3>
        <p className={RemittanceCardDescription}>
          {t(`services-remittance.process.${step}.desc`)}
        </p>
      </div>
    </div>
  );
};

export default ProcessStepCard;
