"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TERMS_TABS } from "@/components/terms/constants";
import { resolveTermsTab } from "@/components/terms/utils";
import * as S from "@/components/terms/styles";

const TermsTabs = () => {
  const activeTab = resolveTermsTab(usePathname());

  return (
    <div className={S.TermsTabsWrapper}>
      <div className={S.TermsTabsRow}>
        {TERMS_TABS.map((tab) => (
          <Link
            key={tab.key}
            href={tab.href}
            scroll={false}
            className={activeTab === tab.key ? S.TermsTabActive : S.TermsTabIdle}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TermsTabs;
