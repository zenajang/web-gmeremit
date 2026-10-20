"use client";

import Image from "next/image";
import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import { OUR_TEAM_NAMESPACE } from "@/components/company/our-team/constants";
import type { TeamMember } from "@/components/company/our-team/types";

interface TeamMemberCardProps {
  member: TeamMember;
  isPriority?: boolean;
}

const TeamMemberCard = ({ member, isPriority = false }: TeamMemberCardProps) => {
  const { t } = useTranslation(OUR_TEAM_NAMESPACE);

  return (
    <article className={S.TeamMemberCardArticle}>
      <div className={S.TeamMemberCardPortrait}>
        <Image
          className={S.TeamMemberCardPortraitImage}
          src={member.src}
          alt={t(`people.${member.id}.name`)}
          width={900}
          height={1200}
          priority={isPriority}
        />
      </div>
      <h3 className={S.TeamMemberCardName}>{t(`people.${member.id}.name`)}</h3>
      <div className={S.TeamMemberCardRole}>{t(`people.${member.id}.role`)}</div>
      <div className={S.TeamMemberCardBio}>{t(`people.${member.id}.bio`)}</div>
    </article>
  );
};

export default TeamMemberCard;
