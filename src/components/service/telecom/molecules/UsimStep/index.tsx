"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";

interface UsimStepProps {
  labelKey: string;
  icon: React.ReactNode;
  hasArrow: boolean;
}

const UsimStep = ({ labelKey, icon, hasArrow }: UsimStepProps) => {
  const { t } = useTranslation();

  return (
    <div className="contents">
      <div className={S.UsimStepWrapper}>
        <div className={S.UsimStepIconBox}>{icon}</div>
        <p className={S.UsimStepLabel}>{t(labelKey)}</p>
      </div>
      {hasArrow && <span className={S.UsimStepArrow}>▶</span>}
    </div>
  );
};

export default UsimStep;
