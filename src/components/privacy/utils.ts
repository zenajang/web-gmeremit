import { DEFAULT_PRIVACY_TAB, PRIVACY_TABS } from "@/components/privacy/constants";
import type { PrivacyTabKey } from "@/components/privacy/types";

/** 주소에서 지금 보고 있는 문서를 알아낸다. 구버전 경로도 해당 문서 탭으로 친다 */
export function resolvePrivacyTab(pathname: string): PrivacyTabKey {
  const matched = PRIVACY_TABS.find(
    (tab) => pathname === tab.href || pathname.startsWith(`${tab.href}/`)
  );
  return matched?.key ?? DEFAULT_PRIVACY_TAB;
}
