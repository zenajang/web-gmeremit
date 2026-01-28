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
        className="flex items-center gap-2 px-3 py-2 text-[#191c1f] hover:text-[#ed1c24] transition-colors duration-200 cursor-pointer"
        aria-label="Select language"
      >
        <GlobeIcon className="text-gray-500" />
        <span className="text-sm font-medium hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDownIcon className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 z-50">
          <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[180px] max-h-[320px] overflow-y-auto">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setLanguage(lang);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-150 cursor-pointer ${
                  currentLanguage.code === lang.code ? "bg-gray-50 text-[#ed1c24]" : "text-[#191c1f]"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.nativeName}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============ Mega Menu ============
function MegaMenu({ sections, columns }: { sections: MenuSection[]; columns: number }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
      <div className={`bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 ${columns === 4 ? "min-w-[850px]" : "min-w-[700px]"}`}>
        <div className={`grid gap-8 ${columns === 4 ? "grid-cols-4" : "grid-cols-3"}`}>
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[#ed1c24] font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[#191c1f] hover:text-[#ed1c24] transition-colors duration-150"
                    >
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============ Desktop Dropdown ============
export function DesktopDropdown({
  item,
  businessMenuSections,
  companyMenuSections,
}: {
  item: MenuItem;
  businessMenuSections: MenuSection[];
  companyMenuSections: MenuSection[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Simple link without dropdown
  if (!item.children && !item.megaMenuType) {
    return (
      <Link
        href={item.href}
        className="text-[#191c1f] hover:text-[#ed1c24] font-medium transition-colors duration-200 py-2"
      >
        {item.label}
      </Link>
    );
  }

  // Mega Menu (Business or Company)
  if (item.megaMenuType) {
    const sections = item.megaMenuType === "business" ? businessMenuSections : companyMenuSections;
    const columns = item.megaMenuType === "company" ? 4 : 3;

    return (
      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button
          type="button"
          className="flex items-center gap-1 text-[#191c1f] hover:text-[#ed1c24] font-medium transition-colors duration-200 py-2 cursor-pointer"
        >
          {item.label}
          <ChevronDownIcon className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>
        {isOpen && <MegaMenu sections={sections} columns={columns} />}
      </div>
    );
  }

  // Regular dropdown
  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        type="button"
        className="flex items-center gap-1 text-[#191c1f] hover:text-[#ed1c24] font-medium transition-colors duration-200 py-2 cursor-pointer"
      >
        {item.label}
        <ChevronDownIcon className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-white rounded-lg shadow-xl border border-gray-100 min-w-[200px] py-2">
            {item.children?.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                className="block px-4 py-2.5 text-[#191c1f] hover:bg-gray-50 hover:text-[#ed1c24] transition-colors duration-150"
              >
                {child.label}
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
  return (
    <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
      {menuItems.map((item) => (
        <DesktopDropdown
          key={item.label}
          item={item}
          businessMenuSections={businessMenuSections}
          companyMenuSections={companyMenuSections}
        />
      ))}
    </nav>
  );
}
