// ============ Nav Menu Item Definitions (translated in component) ============
export interface MenuItemDef {
  labelKey: string;
  href?: string;
  children?: { labelKey: string; href: string }[];
}

export const menuItemDefs: MenuItemDef[] = [
  {
    labelKey: "nav.company",
    children: [
      { labelKey: "nav.ceo_message", href: "/company/ceo-message" },
      { labelKey: "nav.history", href: "/company/history" },
      { labelKey: "nav.services", href: "/company/services" },
    ],
  },
  {
    labelKey: "nav.services_menu",
    children: [
      { labelKey: "nav.remittance", href: "/services/remittance" },
      { labelKey: "nav.card", href: "/services/card" },
      { labelKey: "nav.loan", href: "/services/loan" },
      { labelKey: "nav.payments", href: "/services/payments" },
    ],
  },
  {
    labelKey: "nav.news",
    children: [
      { labelKey: "nav.notice", href: "/board/notice" },
      { labelKey: "nav.press", href: "/board/press" },
      { labelKey: "nav.blog", href: "/board/blog" },
    ],
  },
  {
    labelKey: "nav.support",
    children: [
      { labelKey: "nav.branches", href: "/support/branches" },
      { labelKey: "nav.social_channels", href: "/support/social-channels" },
    ],
  },
];
