export type TermsTabKey =
  | "real-name-verification"
  | "remittance"
  | "open-banking"
  | "electronic-finance"
  | "gmepay";

export interface TermsTab {
  key: TermsTabKey;
  label: string;
  href: string;
}
