"use client";

import { FcFlashOn, FcGlobe, FcMoneyTransfer, FcPhone } from "react-icons/fc";
import { MdQrCode2, MdSignalCellularAlt } from "react-icons/md";
import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";

const telecomFeatureIcons: Record<string, React.ReactNode> = {
  multilang: <FcGlobe className={S.TelecomFeatureCardIcon} />,
  affordable: <FcMoneyTransfer className={S.TelecomFeatureCardIcon} />,
  network: <MdSignalCellularAlt className={S.TelecomFeatureCardMonoIcon} />,
  esim: <MdQrCode2 className={S.TelecomFeatureCardMonoIcon} />,
  activation: <FcFlashOn className={S.TelecomFeatureCardIcon} />,
  intl_call: <FcPhone className={S.TelecomFeatureCardIcon} />,
};

interface TelecomFeatureCardProps {
  featureKey: string;
}

const TelecomFeatureCard = ({ featureKey }: TelecomFeatureCardProps) => {
  const { t } = useTranslation();

  return (
    <div className={S.TelecomFeatureCardWrapper}>
      <div className={S.TelecomFeatureCardIconBox}>{telecomFeatureIcons[featureKey]}</div>
      <h3 className={S.TelecomFeatureCardTitle}>
        {t(`common.telecom-page-client.features.${featureKey}.title`)}
      </h3>
      <p className={S.TelecomFeatureCardDescription}>
        {t(`common.telecom-page-client.features.${featureKey}.description`)}
      </p>
    </div>
  );
};

export default TelecomFeatureCard;
