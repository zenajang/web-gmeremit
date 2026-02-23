"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DesktopNav, { LanguageSelector } from "./header/DesktopNav";
import MobileNav from "./header/MobileNav";
import type { MenuItem } from "./header/DesktopNav";
import { useTranslation } from "@/hooks/useTranslation";
import { businessMenuSections, companyMenuSections, menuItemDefs } from "@/data/headerMenu";

// ============ Main Header ============
export default function Header() {
  const { t } = useTranslation("header");

  const menuItems: MenuItem[] = menuItemDefs.map((item) => ({
    label: t(item.labelKey),
    href: item.href,
    children: item.children?.map((child) => ({
      label: t(child.labelKey),
      href: child.href,
    })),
  }));

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-end h-10 gap-6">
            {/* 채용 */}
            <Link
              href="/company/careers"
              className="text-[13px] text-gray-500 hover:text-primary transition-colors"
            >
              {t("link.careers")}
            </Link>
            {/* Divider */}
            <div className="h-3 w-px bg-gray-300" />
            {/* GME Biz */}
            <a
              href="https://gmebiz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[13px] text-gray-500 hover:text-primary transition-colors"
            >
              <span>GME Biz</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className={`bg-white border-b transition-all duration-200 ${isScrolled ? "border-gray-200 shadow-[0_1px_0_rgba(0,0,0,0.04)]" : "border-gray-100"}`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center group shrink-0">
              <Image
                src="/images/common/GME-LOGO-HD.png"
                alt="GME Remit"
                width={160}
                height={48}
                className="h-8 w-auto lg:h-10 transition-transform duration-200 group-hover:scale-[1.02]"
                priority
              />
            </Link>

            {/* Desktop Navigation - 중앙 */}
            <DesktopNav
              menuItems={menuItems}
              businessMenuSections={businessMenuSections}
              companyMenuSections={companyMenuSections}
            />

            {/* Right Side */}
            <div className="flex items-center gap-4 lg:gap-6 shrink-0">
              {/* CTA Button */}
              <a
                href="/#app-download"
                className="hidden lg:flex items-center gap-2 px-5 py-2.5 text-[14px] font-semibold text-white bg-primary hover:bg-primary-dark rounded-full transition-colors"
              >
                {t("app_download", { ns: "button" })}
              </a>

              {/* Language */}
              <div className="hidden lg:block">
                <LanguageSelector />
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="lg:hidden p-2.5 rounded-xl text-dark hover:bg-gray-100 active:scale-95 transition-all duration-150 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                  )}
                </svg>
              </button>
            </div>
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
