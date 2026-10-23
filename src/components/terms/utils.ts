import { DEFAULT_TERMS_TAB, TERMS_TABS } from "@/components/terms/constants";
import type { TermsTabKey } from "@/components/terms/types";

/** 주소에서 지금 보고 있는 약관을 알아낸다. 구버전 경로도 해당 약관 탭으로 친다 */
export function resolveTermsTab(pathname: string): TermsTabKey {
  const matched = TERMS_TABS.find(
    (tab) => pathname === tab.href || pathname.startsWith(`${tab.href}/`)
  );
  return matched?.key ?? DEFAULT_TERMS_TAB;
}
