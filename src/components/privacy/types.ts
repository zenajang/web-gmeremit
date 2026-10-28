export type PrivacyTabKey = "treatment" | "collection-agreement";

export interface PrivacyTab {
  key: PrivacyTabKey;
  label: string;
  href: string;
}
