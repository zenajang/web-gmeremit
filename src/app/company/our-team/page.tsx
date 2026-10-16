"use client";

import Image from "next/image";
import PublicLayout from "@/components/layout/PublicLayout";
import { useTranslation } from "@/hooks/useTranslation";
import { teamMembers } from "@/data/ourTeam";
import "./our-team.css";

const NS = "company-our-team";

export default function OurTeamPage() {
  const { t } = useTranslation(NS);

  return (
    <PublicLayout className="bg-white">
      <div className="our-team-page">
        <h1>{t("hero.title")}</h1>
        <div className="rule" />
        <p className="lead">{t("hero.lead")}</p>

        <section className="team">
          {teamMembers.map((member) => (
            <article key={member.id} className="person">
              <div className="portrait">
                <Image
                  src={member.src}
                  alt={t(`people.${member.id}.name`)}
                  width={900}
                  height={1200}
                />
              </div>
              <h3>{t(`people.${member.id}.name`)}</h3>
              <div className="role">{t(`people.${member.id}.role`)}</div>
              <div className="bio">{t(`people.${member.id}.bio`)}</div>
            </article>
          ))}
        </section>
      </div>
    </PublicLayout>
  );
}
