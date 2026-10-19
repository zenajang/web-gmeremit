"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import {
  MISSION_VISION_NAMESPACE,
  missionNumbers,
} from "@/components/company/mission-vision/constants";

const MissionVisionTemplate = () => {
  const { t } = useTranslation(MISSION_VISION_NAMESPACE);

  return (
    <div className={S.MissionVisionTemplatePage}>
      <div className={S.MissionVisionTemplateWrapper}>
        <header className={S.MissionVisionTemplateHead}>
          <h1 className={S.MissionVisionTemplateTitle}>{t("hero.title")}</h1>
        </header>

        <section className={S.MissionVisionTemplateVision}>
          <div className={S.MissionVisionTemplateLabel}>{t("vision.label")}</div>
          <div className={S.MissionVisionTemplateVisionContent}>
            <span className={S.MissionVisionTemplateVisionAccent} />
            <h2 className={S.MissionVisionTemplateVisionTitle}>{t("vision.title")}</h2>
          </div>
        </section>

        <section className={S.MissionVisionTemplateMission}>
          <div className={S.MissionVisionTemplateLabel}>{t("mission.label")}</div>
          <div className={S.MissionVisionTemplateMissionRow}>
            {missionNumbers.map((no) => (
              <article key={no} className={S.MissionVisionTemplateMissionItem}>
                <span className={S.MissionVisionTemplateMissionNumber}>{no}</span>
                <p className={S.MissionVisionTemplateMissionText}>{t(`mission.items.${no}`)}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MissionVisionTemplate;
