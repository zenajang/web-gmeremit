"use client";

import { useState } from "react";
import PublicLayout from "@/components/layout/PublicLayout";
import CollectionAgreementContent from "@/components/privacy/CollectionAgreementContent";
import TreatmentPolicyContent from "@/components/privacy/TreatmentPolicyContent";
import { LegalPageHero, LegalTabs } from "@/components/privacy/organisms";
import { PRIVACY_TABS } from "@/components/privacy/constants";
import type { PrivacyTabKey } from "@/components/privacy/types";
import * as S from "@/components/privacy/styles";

const PrivacyPolicyTemplate = () => {
  const [activeTab, setActiveTab] = useState<PrivacyTabKey>("treatment");

  return (
    <PublicLayout className="bg-white">
      <LegalPageHero title="개인정보처리방침" />

      <section className={S.LegalContentSection} style={{ animationDelay: "0.1s" }}>
        <div className={S.LegalContentInner}>
          <LegalTabs tabs={PRIVACY_TABS} activeTab={activeTab} onSelect={setActiveTab} />
          <div className={S.LegalContentPanel}>
            {activeTab === "treatment" ? <TreatmentPolicyContent /> : <CollectionAgreementContent />}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default PrivacyPolicyTemplate;
