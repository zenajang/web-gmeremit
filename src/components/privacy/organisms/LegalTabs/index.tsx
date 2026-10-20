"use client";

import * as S from "@/components/privacy/styles";
import type { PrivacyTab, PrivacyTabKey } from "@/components/privacy/types";

interface LegalTabsProps {
  tabs: PrivacyTab[];
  activeTab: PrivacyTabKey;
  onSelect: (key: PrivacyTabKey) => void;
}

const LegalTabs = ({ tabs, activeTab, onSelect }: LegalTabsProps) => {
  return (
    <div className={S.LegalTabsWrapper}>
      <div className={S.LegalTabsRow}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => onSelect(tab.key)}
            className={activeTab === tab.key ? S.LegalTabActive : S.LegalTabIdle}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LegalTabs;
