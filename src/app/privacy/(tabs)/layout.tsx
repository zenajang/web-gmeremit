import { ReactNode } from "react";
import PublicLayout from "@/components/layout/PublicLayout";
import { LegalPageHero, LegalTabs } from "@/components/privacy/common";
import * as S from "@/components/privacy/styles";

const PrivacyLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PublicLayout className="bg-white">
      <LegalPageHero title="개인정보처리방침" />

      <section className={S.LegalContentSection} style={{ animationDelay: "0.1s" }}>
        <div className={S.LegalContentInner}>
          <LegalTabs />
          <div className={S.LegalContentPanel}>{children}</div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default PrivacyLayout;
