"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DesktopNav, { LanguageSelector } from "./header/DesktopNav";
import MobileNav from "./header/MobileNav";
import type { MenuSection, MenuItem } from "./header/DesktopNav";

// ============ Business Menu Icons ============
const FinancialServicesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="16" r="12" />
    <circle cx="16" cy="16" r="6" strokeDasharray="2 2" />
    <line x1="16" y1="4" x2="16" y2="8" />
    <line x1="16" y1="24" x2="16" y2="28" />
    <line x1="4" y1="16" x2="8" y2="16" />
    <line x1="24" y1="16" x2="28" y2="16" />
    <text x="16" y="18" textAnchor="middle" fontSize="8" fill="currentColor" stroke="none">$</text>
  </svg>
);

const GMESPSIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="16" r="12" />
    <rect x="10" y="12" width="12" height="8" rx="1" />
    <line x1="10" y1="15" x2="22" y2="15" />
    <text x="16" y="18" textAnchor="middle" fontSize="6" fill="currentColor" stroke="none">$</text>
  </svg>
);

const GMEVASIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="16" r="12" />
    <circle cx="16" cy="13" r="4" />
    <path d="M10 24c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <circle cx="22" cy="18" r="3" />
  </svg>
);

const ServiceFeaturesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 16v6" />
    <path d="M8 22h8" />
    <path d="M18 8l4 4-4 4" />
    <path d="M22 12h-6" />
  </svg>
);

const PartnersIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 20l4-4 4 4" />
    <path d="M16 16l4 4 4-4" />
    <path d="M12 16v8" />
    <path d="M20 20v4" />
    <circle cx="12" cy="10" r="3" />
    <circle cx="20" cy="10" r="3" />
  </svg>
);

const APIIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 8h16v6c0 2-2 4-4 4h-2" />
    <circle cx="16" cy="22" r="4" />
    <path d="M16 18v-4" />
    <rect x="11" y="4" width="10" height="4" rx="1" />
    <text x="16" y="8" textAnchor="middle" fontSize="5" fill="currentColor" stroke="none">API</text>
  </svg>
);

const DocumentationIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="4" width="16" height="24" rx="2" />
    <line x1="12" y1="10" x2="20" y2="10" />
    <line x1="12" y1="14" x2="20" y2="14" />
    <line x1="12" y1="18" x2="16" y2="18" />
    <circle cx="18" cy="22" r="4" fill="white" />
    <path d="M16 22h4M18 20v4" />
  </svg>
);

const GMEHoMIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 14l10-8 10 8" />
    <path d="M8 14v10h16V14" />
    <path d="M10 12v-2h4v4" />
    <line x1="12" y1="24" x2="12" y2="18" />
    <line x1="16" y1="24" x2="16" y2="18" />
    <line x1="20" y1="24" x2="20" y2="18" />
  </svg>
);

const CollectGloballyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="6" width="16" height="12" rx="2" />
    <path d="M12 18v4h8v-4" />
    <path d="M10 26h12" />
    <path d="M14 22v4" />
    <path d="M18 22v4" />
    <line x1="12" y1="10" x2="20" y2="10" />
    <line x1="12" y1="13" x2="17" y2="13" />
  </svg>
);

const PaymentsGloballyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="16" r="10" />
    <ellipse cx="16" cy="16" rx="4" ry="10" />
    <line x1="6" y1="16" x2="26" y2="16" />
    <path d="M8 10h16" />
    <path d="M8 22h16" />
  </svg>
);

const MultiplePaymentIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 6v4M12 8l4-2 4 2" />
    <path d="M8 14l4 4-4 4" />
    <path d="M24 14l-4 4 4 4" />
    <path d="M16 22v4M12 24l4 2 4-2" />
    <circle cx="16" cy="16" r="3" />
  </svg>
);

const CollectPayChinaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 10h16" />
    <path d="M10 10l2-4h8l2 4" />
    <path d="M10 10v4c0 4 6 8 6 8s6-4 6-8v-4" />
    <circle cx="16" cy="14" r="2" />
    <path d="M12 26h8" />
    <path d="M16 22v4" />
  </svg>
);

// ============ Company Menu Icons ============
const CEOMessageIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="10" r="5" />
    <path d="M8 28v-4c0-4 4-6 8-6s8 2 8 6v4" />
    <rect x="6" y="22" width="20" height="6" rx="1" />
    <line x1="10" y1="28" x2="10" y2="24" />
    <line x1="22" y1="28" x2="22" y2="24" />
  </svg>
);

const ServicesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="16" r="4" />
    <circle cx="16" cy="16" r="8" strokeDasharray="3 3" />
    <circle cx="8" cy="8" r="2" />
    <circle cx="24" cy="8" r="2" />
    <circle cx="8" cy="24" r="2" />
    <circle cx="24" cy="24" r="2" />
    <line x1="10" y1="10" x2="13" y2="13" />
    <line x1="22" y1="10" x2="19" y2="13" />
    <line x1="10" y1="22" x2="13" y2="19" />
    <line x1="22" y1="22" x2="19" y2="19" />
  </svg>
);

const HistoryIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 28V10h2V28" />
    <path d="M8 10h6" />
    <path d="M10 10c0-4 1-6 6-6" />
    <line x1="18" y1="28" x2="18" y2="16" />
    <line x1="22" y1="28" x2="22" y2="16" />
    <line x1="16" y1="16" x2="24" y2="16" />
    <path d="M16 16c0-2 1-4 4-4" />
  </svg>
);

const BlogAllIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="6" y="6" width="20" height="20" rx="2" />
    <line x1="10" y1="11" x2="22" y2="11" />
    <line x1="10" y1="16" x2="22" y2="16" />
    <line x1="10" y1="21" x2="16" y2="21" />
    <path d="M18 19l3 3 3-3" />
    <line x1="21" y1="22" x2="21" y2="18" />
  </svg>
);

const EventIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="6" y="8" width="20" height="18" rx="2" />
    <line x1="6" y1="14" x2="26" y2="14" />
    <line x1="11" y1="6" x2="11" y2="10" />
    <line x1="21" y1="6" x2="21" y2="10" />
    <rect x="10" y="18" width="4" height="4" rx="0.5" />
    <rect x="18" y="18" width="4" height="4" rx="0.5" />
  </svg>
);

const NewsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="6" width="18" height="20" rx="2" />
    <path d="M22 10h4v14a2 2 0 01-2 2h-2" />
    <line x1="8" y1="11" x2="18" y2="11" />
    <line x1="8" y1="15" x2="18" y2="15" />
    <rect x="8" y="18" width="5" height="4" rx="0.5" />
    <line x1="15" y1="19" x2="18" y2="19" />
    <line x1="15" y1="22" x2="18" y2="22" />
  </svg>
);

const PerksBenefitsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="8" r="4" />
    <path d="M16 12v2" />
    <path d="M10 20c0 0 2-4 6-4s6 4 6 4" />
    <path d="M8 18l-2 6h4" />
    <path d="M24 18l2 6h-4" />
    <circle cx="16" cy="8" r="2" strokeDasharray="1 1" />
  </svg>
);

const OurStaffIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="14" r="5" />
    <path d="M16 8v-4" />
    <path d="M14 5l2-2 2 2" />
    <path d="M8 28c0-4 4-7 8-7s8 3 8 7" />
  </svg>
);

const JoinUsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="5" />
    <path d="M6 26c0-4 3-6 6-6" />
    <circle cx="22" cy="14" r="4" />
    <path d="M22 18v4" />
    <path d="M20 20h4" />
  </svg>
);

const CustomerServiceIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="14" r="6" />
    <path d="M10 14c0-3.3 2.7-6 6-6" />
    <path d="M6 14v4a2 2 0 002 2h2v-6H8a2 2 0 00-2 2z" />
    <path d="M26 14v4a2 2 0 01-2 2h-2v-6h2a2 2 0 012 2z" />
    <path d="M22 20v2a4 4 0 01-4 4h-2" />
    <circle cx="16" cy="26" r="2" />
  </svg>
);

const BranchesIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 26h20" />
    <path d="M8 26V14l8-6 8 6v12" />
    <line x1="12" y1="26" x2="12" y2="20" />
    <line x1="16" y1="26" x2="16" y2="20" />
    <line x1="20" y1="26" x2="20" y2="20" />
    <line x1="10" y1="20" x2="22" y2="20" />
    <path d="M14 14h4v3h-4z" />
  </svg>
);

// ============ Menu Data ============
const businessMenuSections: MenuSection[] = [
  {
    title: "Solutions",
    items: [
      { label: "Financial Services", href: "/business/financial-services", icon: <FinancialServicesIcon /> },
      { label: "GME – SPS", href: "/business/gme-sps", icon: <GMESPSIcon /> },
      { label: "GME – VAS", href: "/business/gme-vas", icon: <GMEVASIcon /> },
      { label: "Service Features", href: "/business/service-features", icon: <ServiceFeaturesIcon /> },
      { label: "Partners", href: "/business/partners", icon: <PartnersIcon /> },
    ],
  },
  {
    title: "Developers",
    items: [
      { label: "API", href: "/developers/api", icon: <APIIcon /> },
      { label: "View Documentation", href: "/developers/documentation", icon: <DocumentationIcon /> },
    ],
  },
  {
    title: "Platform",
    items: [
      { label: "GME-HoM", href: "/platform/gme-hom", icon: <GMEHoMIcon /> },
      { label: "Collect globally", href: "/platform/collect-globally", icon: <CollectGloballyIcon /> },
      { label: "Make payments globally", href: "/platform/payments-globally", icon: <PaymentsGloballyIcon /> },
      { label: "Multiple payment methods", href: "/platform/multiple-payments", icon: <MultiplePaymentIcon /> },
      { label: "Collect & Pay China", href: "/platform/collect-pay-china", icon: <CollectPayChinaIcon /> },
    ],
  },
];

const companyMenuSections: MenuSection[] = [
  {
    title: "About Us",
    items: [
      { label: "CEO's Message", href: "/company/ceo-message", icon: <CEOMessageIcon /> },
      { label: "Services", href: "/company/services", icon: <ServicesIcon /> },
      { label: "History", href: "/company/history", icon: <HistoryIcon /> },
    ],
  },
  {
    title: "Blog",
    items: [
      { label: "All", href: "/company/blog", icon: <BlogAllIcon /> },
      { label: "Event", href: "/company/blog/event", icon: <EventIcon /> },
      { label: "News", href: "/company/blog/news", icon: <NewsIcon /> },
    ],
  },
  {
    title: "Careers",
    items: [
      { label: "Perks & Benefits", href: "/company/careers/perks-benefits", icon: <PerksBenefitsIcon /> },
      { label: "Our Staff", href: "/company/careers/our-staff", icon: <OurStaffIcon /> },
      { label: "Join Us", href: "/company/careers/join-us", icon: <JoinUsIcon /> },
    ],
  },
  {
    title: "Contact Us",
    items: [
      { label: "Customer Service", href: "/contact/customer-service", icon: <CustomerServiceIcon /> },
      { label: "Branches", href: "/contact/branches", icon: <BranchesIcon /> },
    ],
  },
];

const menuItems: MenuItem[] = [
  {
    label: "About Us",
    href: "/company",
    children: [
      { label: "CEO Message", href: "/company/ceo-message" },
      { label: "History", href: "/company/history" },
      { label: "Our Services", href: "/company/services" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "GME App Remittance", href: "/services/remittance" },
      { label: "GME Card", href: "/services/card" },
      { label: "GME Loan", href: "/services/loan" },
      { label: "GME Payments (B2B)", href: "/services/payments" },
    ],
  },
  {
    label: "News / Blog",
    href: "/news",
    children: [
      { label: "Business News", href: "/news/business" },
      { label: "Blog", href: "/news/blog" },
    ],
  },
  {
    label: "Customer Support",
    href: "/support",
    children: [
      { label: "Branches & Contact", href: "/support/branches" },
      { label: "Social Channels", href: "/support/social-channels" },
    ],
  },
];

// ============ Main Header ============
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-[#f3d6cc]">
      <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-6">
        <div className="relative flex items-center justify-between h-16 lg:h-20">
          {/* Logo + Biz Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/common/GME-LOGO-HD.png"
                alt="GME Remit"
                width={160}
                height={48}
                className="h-8 w-auto lg:h-10"
                priority
              />
            </Link>
            {/* Toggle Style Switcher */}
            <div className="hidden lg:flex items-center bg-[#f5f5f7] rounded-full p-[3px]">
              <span className="px-3.5 py-1.5 text-[13px] font-semibold text-white bg-[#191c1f] rounded-full">
                GME Remit
              </span>
              <a
                href="https://gmebiz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-medium text-[#666] hover:text-[#191c1f] transition-colors"
              >
                GME Biz
                <svg className="w-3 h-3 opacity-40 group-hover:opacity-70 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <DesktopNav
            menuItems={menuItems}
            businessMenuSections={businessMenuSections}
            companyMenuSections={companyMenuSections}
          />

          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            {/* CTA Button & Language */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="/company/careers"
                className="text-[13px] text-[#666] hover:text-[#191c1f] font-medium transition-colors px-3 py-2"
              >
                채용
              </Link>
              <LanguageSelector />
              <Link
                href="/download"
                className="flex items-center gap-1.5 bg-[#191c1f] hover:bg-[#2d3036] text-white text-[13px] font-semibold px-4 py-2 rounded-full transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                앱 다운로드
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-[#191c1f] hover:bg-gray-100 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileNav
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        menuItems={menuItems}
        businessMenuSections={businessMenuSections}
        companyMenuSections={companyMenuSections}
      />
    </header>
  );
}
