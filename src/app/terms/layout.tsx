import { ReactNode } from "react";
import PublicLayout from "@/components/layout/PublicLayout";
import { TermsTabs } from "@/components/terms/common";
import * as S from "@/components/terms/styles";

const TermsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PublicLayout className="bg-white">
      <section className={S.TermsHeroSection}>
        <div className={S.TermsHeroInner}>
          <div className={S.TermsHeroCenter}>
            <div className={S.TermsHeroTitleBox}>
              <div className={S.TermsHeroGlow} />
              <div className={S.TermsHeroDot} />
              <h1 className={S.TermsHeroTitle}>이용약관</h1>
            </div>
          </div>
        </div>
      </section>

      <section className={S.TermsContentSection} style={{ animationDelay: "0.1s" }}>
        <div className={S.TermsContentInner}>
          <TermsTabs />
          <div className={S.TermsContentPanel}>{children}</div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default TermsLayout;
