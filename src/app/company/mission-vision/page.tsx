"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import { useTranslation } from "@/hooks/useTranslation";
import "./mission-vision.css";

const NS = "company-mission-vision";
const missionNumbers = ["01", "02"] as const;

export default function MissionVisionPage() {
  const { t } = useTranslation(NS);

  return (
    <PublicLayout className="bg-white">
      <div className="mission-vision-page">
        <div className="mv8-wrap">
          <header className="mv8-head">
            <h1>{t("hero.title")}</h1>
          </header>

          <section className="mv8-vision">
            <div className="mv8-label">{t("vision.label")}</div>
            <div className="mv8-vision-content">
              <span className="mv8-accent" />
              <h2>{t("vision.title")}</h2>
            </div>
          </section>

          <section className="mv8-mission">
            <div className="mv8-label">{t("mission.label")}</div>
            <div className="mv8-mission-row">
              {missionNumbers.map((no) => (
                <article key={no}>
                  <span className="mv8-no">{no}</span>
                  <p>{t(`mission.items.${no}`)}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PublicLayout>
  );
}
