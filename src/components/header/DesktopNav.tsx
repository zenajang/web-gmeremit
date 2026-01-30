"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLanguage, languages } from "@/contexts/LanguageContext";

// ============ Types ============
export interface MenuItem {
  label: string;
  href: string;
  megaMenuType?: "business" | "company";
  children?: { label: string; href: string }[];
}

export interface MenuSubItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export interface MenuSection {
  title: string;
  items: MenuSubItem[];
}

// ============ Icons ============
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <ellipse cx="12" cy="12" rx="4" ry="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  );
}

// ============ Language Selector ============
export function LanguageSelector() {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
          isOpen ? "bg-[#f5f5f7] text-[#191c1f]" : "text-[#555] hover:text-[#191c1f] hover:bg-[#f5f5f7]"
        }`}
        aria-label="Select language"
      >
        <GlobeIcon className="text-current opacity-70" />
        <span className="text-[15px] font-medium hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDownIcon className={`opacity-50 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 z-50">
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] py-2 min-w-[200px] max-h-[320px] overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setLanguage(lang);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all duration-150 cursor-pointer ${
                  currentLanguage.code === lang.code
                    ? "bg-[#fef2f2] text-[#ed1c24]"
                    : "text-[#444] hover:bg-[#f5f5f7] hover:text-[#191c1f]"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-[15px] font-medium">{lang.nativeName}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============ Desktop Dropdown ============
export function DesktopDropdown({
  item,
  businessMenuSections,
  companyMenuSections,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: {
  item: MenuItem;
  businessMenuSections: MenuSection[];
  companyMenuSections: MenuSection[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  // Simple link without dropdown
  if (!item.children && !item.megaMenuType) {
    return (
      <Link
        href={item.href}
        className="relative text-[15px] text-[#444] hover:text-[#191c1f] font-medium transition-all duration-200 px-4 py-2 rounded-lg hover:bg-[#f5f5f7]"
        onMouseEnter={onMouseLeave}
      >
        {item.label}
      </Link>
    );
  }

  // Get dropdown items based on type
  let dropdownItems: { label: string; href: string }[] = [];

  if (item.megaMenuType) {
    const sections = item.megaMenuType === "business" ? businessMenuSections : companyMenuSections;
    // Flatten sections into simple items
    dropdownItems = sections.flatMap(section =>
      section.items.map(subItem => ({ label: subItem.label, href: subItem.href }))
    );
  } else if (item.children) {
    dropdownItems = item.children;
  }

  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button
        type="button"
        className={`flex items-center gap-1.5 text-[17px] font-medium transition-all duration-200 px-4 py-2 rounded-lg cursor-pointer ${
          isOpen ? "text-[#191c1f] bg-[#f5f5f7]" : "text-[#444] hover:text-[#191c1f] hover:bg-[#f5f5f7]"
        }`}
      >
        {item.label}
        <ChevronDownIcon className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
          {/* Pointer */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 shadow-[-2px_-2px_4px_rgba(0,0,0,0.04)] z-10 animate-[fadeIn_0.2s_ease-out]" />
          {/* Dropdown */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] py-2 min-w-[180px] animate-[menuReveal_0.3s_ease-out]">
            {/* Top highlight */}
            <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
            {dropdownItems.map((child, index) => (
              <Link
                key={child.label}
                href={child.href}
                className="group relative block px-5 py-3 text-[14px] text-[#555] hover:text-[#191c1f] transition-all duration-200 whitespace-nowrap text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="absolute inset-x-2 inset-y-1 rounded-lg bg-[#f5f5f7] opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
                <span className="relative">{child.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============ Desktop Nav ============
export default function DesktopNav({
  menuItems,
  businessMenuSections,
  companyMenuSections,
}: {
  menuItems: MenuItem[];
  businessMenuSections: MenuSection[];
  companyMenuSections: MenuSection[];
}) {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenuIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenuIndex(null), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
      {menuItems.map((item, index) => (
        <DesktopDropdown
          key={item.label}
          item={item}
          businessMenuSections={businessMenuSections}
          companyMenuSections={companyMenuSections}
          isOpen={openMenuIndex === index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </nav>
  );
}
