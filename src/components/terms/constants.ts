import type { TermsTab, TermsTabKey } from "@/components/terms/types";

export const DEFAULT_TERMS_TAB: TermsTabKey = "real-name-verification";

export const TERMS_TABS: TermsTab[] = [
  {
    key: "real-name-verification",
    label: "불법 · 탈법 차명거래 금지 실명 확인 동의",
    href: "/terms/real-name-verification",
  },
  { key: "remittance", label: "소액해외송금", href: "/terms/remittance" },
  { key: "open-banking", label: "오픈뱅킹", href: "/terms/open-banking" },
  { key: "electronic-finance", label: "전자금융거래", href: "/terms/electronic-finance" },
  { key: "gmepay", label: "지엠이페이", href: "/terms/gmepay" },
];
