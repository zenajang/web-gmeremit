"use client";

import * as S from "@/components/privacy/styles";

interface LegalPageHeroProps {
  title: string;
  subtitle?: string;
}

const LegalPageHero = ({ title, subtitle }: LegalPageHeroProps) => {
  return (
    <section className={S.LegalHeroSection}>
      <div className={S.LegalHeroInner}>
        <div className={S.LegalHeroCenter}>
          <div className={S.LegalHeroTitleBox}>
            <div className={S.LegalHeroGlow} />
            <div className={S.LegalHeroDot} />
            <h1 className={S.LegalHeroTitle}>{title}</h1>
            {subtitle && <span className={S.LegalHeroSubtitle}>({subtitle})</span>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalPageHero;
