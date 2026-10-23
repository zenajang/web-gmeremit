"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { PRIVACY_TABS } from "@/components/privacy/constants";
import { resolvePrivacyTab } from "@/components/privacy/utils";
import * as S from "@/components/privacy/styles";

const LegalTabs = () => {
  const activeTab = resolvePrivacyTab(usePathname());

  // 다른 페이지에서 들어왔을 때만 맨 위로 올린다. 탭 사이 이동은 레이아웃이 유지돼 실행되지 않는다
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={S.LegalTabsWrapper}>
      <div className={S.LegalTabsRow}>
        {PRIVACY_TABS.map((tab) => (
          <Link
            key={tab.key}
            href={tab.href}
            scroll={false}
            className={activeTab === tab.key ? S.LegalTabActive : S.LegalTabIdle}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LegalTabs;
