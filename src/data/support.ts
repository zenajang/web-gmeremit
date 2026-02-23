export const supportTabs = [
  { key: "branches", labelKey: "tabs.branches", href: "/support/branches" },
  { key: "social-channels", labelKey: "tabs.social_channels", href: "/support/social-channels" },
];

export interface SupportStat {
  image: { src: string; alt: string; width: number; height: number };
  labelKey: string;
  valueKey: string;
  unitKey: string;
}

export const supportStats: SupportStat[] = [
  {
    image: { src: "/images/common/pin.png", alt: "Pin", width: 160, height: 160 },
    labelKey: "stats.branches_label",
    valueKey: "stats.branches_value",
    unitKey: "stats.branches_unit",
  },
  {
    image: { src: "/images/common/cs.png", alt: "cs", width: 180, height: 180 },
    labelKey: "stats.countries_label",
    valueKey: "stats.countries_value",
    unitKey: "stats.countries_unit",
  },
  {
    image: { src: "/images/common/grid.png", alt: "grid", width: 160, height: 160 },
    labelKey: "stats.services_label",
    valueKey: "stats.services_value",
    unitKey: "stats.services_unit",
  },
];

export interface NetworkLine {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  opacity: number;
}

export const networkLines: NetworkLine[] = [
  { x1: "3%", y1: "12%", x2: "9%", y2: "24%", opacity: 0.07 },
  { x1: "9%", y1: "24%", x2: "6%", y2: "38%", opacity: 0.06 },
  { x1: "9%", y1: "24%", x2: "2%", y2: "19%", opacity: 0.08 },
  { x1: "94%", y1: "8%", x2: "97%", y2: "18%", opacity: 0.07 },
  { x1: "97%", y1: "18%", x2: "91%", y2: "28%", opacity: 0.06 },
  { x1: "5%", y1: "68%", x2: "8%", y2: "82%", opacity: 0.08 },
  { x1: "8%", y1: "82%", x2: "3%", y2: "91%", opacity: 0.06 },
  { x1: "93%", y1: "65%", x2: "98%", y2: "78%", opacity: 0.07 },
  { x1: "98%", y1: "78%", x2: "95%", y2: "88%", opacity: 0.08 },
  { x1: "98%", y1: "78%", x2: "92%", y2: "72%", opacity: 0.05 },
];

export interface NetworkNode {
  cx: string;
  cy: string;
  r: number;
  opacity: number;
}

export const networkNodes: NetworkNode[] = [
  { cx: "3%", cy: "12%", r: 2, opacity: 0.08 },
  { cx: "9%", cy: "24%", r: 5, opacity: 0.13 },
  { cx: "6%", cy: "38%", r: 3, opacity: 0.09 },
  { cx: "2%", cy: "19%", r: 2, opacity: 0.07 },
  { cx: "94%", cy: "8%", r: 3, opacity: 0.1 },
  { cx: "97%", cy: "18%", r: 4, opacity: 0.11 },
  { cx: "91%", cy: "28%", r: 2, opacity: 0.08 },
  { cx: "5%", cy: "68%", r: 3, opacity: 0.09 },
  { cx: "8%", cy: "82%", r: 5, opacity: 0.12 },
  { cx: "3%", cy: "91%", r: 2, opacity: 0.08 },
  { cx: "93%", cy: "65%", r: 2, opacity: 0.07 },
  { cx: "98%", cy: "78%", r: 4, opacity: 0.11 },
  { cx: "95%", cy: "88%", r: 3, opacity: 0.1 },
  { cx: "92%", cy: "72%", r: 2, opacity: 0.06 },
];
