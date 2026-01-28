"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage, languages } from "@/contexts/LanguageContext";
import type { MenuItem, MenuSection } from "./DesktopNav";

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

// ============ Mobile Language Selector ============
export function MobileLanguageSelector({ onClose }: { onClose: () => void }) {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 text-[#191c1f] hover:bg-gray-50 font-medium cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <GlobeIcon className="text-gray-500" />
          <span>Language</span>
          <span className="text-gray-500">({currentLanguage.nativeName})</span>
        </div>
        <ChevronDownIcon className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
      </button>

      {isExpanded && (
        <div className="bg-gray-50 max-h-[240px] overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                setLanguage(lang);
                onClose();
              }}
              className={`w-full flex items-center gap-3 px-6 py-2.5 text-left hover:bg-gray-100 transition-colors duration-150 cursor-pointer ${
                currentLanguage.code === lang.code ? "bg-gray-100 text-[#ed1c24]" : "text-[#191c1f]"
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm">{lang.nativeName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ============ Mobile Accordion ============
export function MobileAccordion({
  item,
  onClose,
  businessMenuSections,
  companyMenuSections,
}: {
  item: MenuItem;
  onClose: () => void;
  businessMenuSections: MenuSection[];
  companyMenuSections: MenuSection[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Simple link
  if (!item.children && !item.megaMenuType) {
    return (
      <Link
        href={item.href}
        className="block px-4 py-3 text-[#191c1f] hover:bg-gray-50 font-medium border-b border-gray-100"
        onClick={onClose}
      >
        {item.label}
      </Link>
    );
  }

  // Mega menu for mobile (Business or Company)
  if (item.megaMenuType) {
    const sections = item.megaMenuType === "business" ? businessMenuSections : companyMenuSections;

    return (
      <div className="border-b border-gray-100">
        <button
          type="button"
          className="w-full flex items-center justify-between px-4 py-3 text-[#191c1f] hover:bg-gray-50 font-medium cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>{item.label}</span>
          <ChevronDownIcon className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
        </button>

        {isExpanded && (
          <div className="bg-gray-50 pb-2">
            {sections.map((section) => (
              <div key={section.title} className="px-4 py-2">
                <h4 className="text-[#ed1c24] font-semibold text-sm mb-2">{section.title}</h4>
                {section.items.map((subItem) => (
                  <Link
                    key={subItem.label}
                    href={subItem.href}
                    className="block px-2 py-2 text-[#191c1f] hover:text-[#ed1c24]"
                    onClick={onClose}
                  >
                    <span className="text-sm">{subItem.label}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Regular accordion
  return (
    <div className="border-b border-gray-100">
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 text-[#191c1f] hover:bg-gray-50 font-medium cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>{item.label}</span>
        <ChevronDownIcon className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
      </button>

      {isExpanded && (
        <div className="bg-gray-50">
          {item.children?.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="block px-6 py-2.5 text-[#191c1f] hover:bg-gray-100 hover:text-[#ed1c24]"
              onClick={onClose}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ============ Mobile Nav ============
export default function MobileNav({
  isOpen,
  onClose,
  menuItems,
  businessMenuSections,
  companyMenuSections,
}: {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  businessMenuSections: MenuSection[];
  companyMenuSections: MenuSection[];
}) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="lg:hidden fixed inset-0 top-16 bg-black/20 z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto">
        <nav className="pb-6">
          {menuItems.map((item) => (
            <MobileAccordion
              key={item.label}
              item={item}
              onClose={onClose}
              businessMenuSections={businessMenuSections}
              companyMenuSections={companyMenuSections}
            />
          ))}
          <Link
            href="/download"
            className="block px-4 py-3 text-[#191c1f] hover:bg-gray-50 font-medium border-b border-gray-100"
            onClick={onClose}
          >
            Download App
          </Link>
          <Link
            href="/company/careers"
            className="block px-4 py-3 text-[#191c1f] hover:bg-gray-50 font-medium border-b border-gray-100"
            onClick={onClose}
          >
            Careers
          </Link>
          <MobileLanguageSelector onClose={onClose} />
          <div className="px-4 pt-4">
            <Link
              href="/download"
              className="block w-full bg-[#ed1c24] hover:bg-[#c41920] text-white font-semibold px-6 py-3 rounded-full text-center transition-colors duration-200"
              onClick={onClose}
            >
              Download App
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
