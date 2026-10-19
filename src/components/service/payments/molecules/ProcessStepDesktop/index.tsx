"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";

interface ProcessStepDesktopProps {
  step: string;
  index: number;
  hasConnector: boolean;
}

const ProcessStepDesktop = ({ step, index, hasConnector }: ProcessStepDesktopProps) => {
  const { t } = useTranslation();

  return (
    <div className={S.ProcessStepDesktopWrapper}>
      {hasConnector && (
        <div className={S.ProcessStepDesktopConnector}>
          <svg
            className={S.ProcessStepDesktopConnectorIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      )}
      <div className={S.ProcessStepDesktopBody}>
        <div className={S.ProcessStepDesktopHead}>
          <span className={S.ProcessStepDesktopNumber}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className={S.ProcessStepDesktopRule} />
        </div>

        <h3 className={S.ProcessStepDesktopTitle}>
          {t(`services-payments.process.${step}.title`)}
        </h3>
        <p className={S.ProcessStepDesktopDescription}>
          {t(`services-payments.process.${step}.description`)}
        </p>
      </div>
    </div>
  );
};

export default ProcessStepDesktop;
