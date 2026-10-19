"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import { TeamMemberCard } from "@/components/company/our-team/molecules";
import { OUR_TEAM_NAMESPACE, teamMembers } from "@/components/company/our-team/constants";

const OurTeamTemplate = () => {
  const { t } = useTranslation(OUR_TEAM_NAMESPACE);

  return (
    <div className={S.OurTeamTemplatePage}>
      <h1 className={S.OurTeamTemplateTitle}>{t("hero.title")}</h1>
      <div className={S.OurTeamTemplateRule} />
      <p className={S.OurTeamTemplateLead}>{t("hero.lead")}</p>

      <section className={S.OurTeamTemplateGrid}>
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </section>
    </div>
  );
};

export default OurTeamTemplate;
