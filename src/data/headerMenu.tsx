// ============ Nav Menu Item Definitions (translated in component) ============
export interface MenuItemDef {
  labelKey: string;
  href?: string;
  children?: { labelKey: string; href: string }[];
}

export const menuItemDefs: MenuItemDef[] = [
  {
    labelKey: "header.nav.company",
    children: [
      { labelKey: "header.nav.ceo_message", href: "/company/ceo-message" },
      { labelKey: "header.nav.history", href: "/company/history" },
      { labelKey: "header.nav.services", href: "/company/services" },
    ],
  },
  {
    labelKey: "header.nav.services_menu",
    children: [
      { labelKey: "header.nav.remittance", href: "/services/remittance" },
      { labelKey: "header.nav.loan", href: "/services/loan" },
      { labelKey: "header.nav.card", href: "/services/card" },
      { labelKey: "header.nav.payments", href: "/services/payments" },
      { labelKey: "header.nav.telecom", href: "/services/telecom" },
    ],
  },
  {
    labelKey: "header.nav.news",
    children: [
      { labelKey: "header.nav.notice", href: "/board/notice" },
      { labelKey: "header.nav.press", href: "/board/press" },
      { labelKey: "header.nav.blog", href: "/board/blog" },
    ],
  },
  {
    labelKey: "header.nav.support",
    children: [
      { labelKey: "header.nav.branches", href: "/support/branches" },
      { labelKey: "header.nav.social_channels", href: "/support/social-channels" },
      { labelKey: "header.nav.inquiry", href: "/support/inquiry" },
    ],
  },
];
