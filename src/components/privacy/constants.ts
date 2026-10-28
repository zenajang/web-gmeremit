import type { PrivacyTab, PrivacyTabKey } from "@/components/privacy/types";

export const DEFAULT_PRIVACY_TAB: PrivacyTabKey = "treatment";

export const PRIVACY_TABS: PrivacyTab[] = [
  { key: "treatment", label: "개인정보 처리방침", href: "/privacy/treatment" },
  {
    key: "collection-agreement",
    label: "개인정보 수집·이용 동의",
    href: "/privacy/collection-agreement",
  },
];
