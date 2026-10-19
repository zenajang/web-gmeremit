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
      { labelKey: "header.nav.about_us", href: "/company/about-us" },
      { labelKey: "header.nav.mission_vision", href: "/company/mission-vision" },
      { labelKey: "header.nav.our_team", href: "/company/our-team" },
      { labelKey: "header.link.careers", href: "/company/careers" },
    ],
  },
  {
    labelKey: "header.nav.services_menu",
    children: [
      { labelKey: "header.nav.remittance", href: "/products/remittance" },
      { labelKey: "header.nav.loan", href: "https://gmefinance.com" },
      { labelKey: "header.nav.card", href: "/products/card" },
      { labelKey: "header.nav.payments", href: "/products/payments" },
      { labelKey: "header.nav.telecom", href: "/products/telecom" },
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
      { labelKey: "header.nav.faq", href: "/support/faq" },
      { labelKey: "header.nav.inquiry", href: "/support/inquiry" },
    ],
  },
];
