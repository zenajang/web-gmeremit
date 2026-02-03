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
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 cursor-pointer ${
          isOpen ? "bg-[#f5f5f7] text-[#191c1f]" : "text-[#111] hover:text-[#191c1f] hover:bg-[#f5f5f7]"
        }`}
        aria-label="Select language"
      >
        <span className="text-[13px] font-medium">{currentLanguage.code.toUpperCase()}</span>
        <GlobeIcon className="text-current opacity-70" />
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
  isOpen,
  onMouseEnter,
}: {
  item: MenuItem;
  isOpen: boolean;
  onMouseEnter: () => void;
}) {
  // Simple link without dropdown
  if (!item.children && !item.megaMenuType) {
    return (
      <Link
        href={item.href}
        className="relative text-lg text-[#111] hover:text-[#191c1f] font-medium transition-all duration-200 px-3 py-2 hover:after:absolute hover:after:-bottom-[28px] hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-[#ed1c24]"
        onMouseEnter={onMouseEnter}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="relative group" onMouseEnter={onMouseEnter}>
      <button
        type="button"
        className={`relative flex items-center gap-1.5 text-lg font-medium transition-all duration-300 ease-out px-3 py-2 cursor-pointer ${
          isOpen ? "text-[#ed1c24]" : "text-[#111] hover:text-[#191c1f]"
        }`}
      >
        {item.label}
      </button>
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
  const [hoveredColumnIndex, setHoveredColumnIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenuIndex(index);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenuIndex(null), 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Helper function: 각 메뉴 아이템의 서브메뉴 가져오기
  const getSubMenuItems = (item: MenuItem) => {
    if (item.megaMenuType) {
      const sections = item.megaMenuType === "business" ? businessMenuSections : companyMenuSections;
      return sections.flatMap(section =>
        section.items.map(subItem => ({ label: subItem.label, href: subItem.href }))
      );
    }
    if (item.children) {
      return item.children;
    }
    return [];
  };

  // 모든 메뉴의 서브메뉴 컬럼들
  const dropdownColumnsAll = menuItems.map((item) => ({
    title: item.label,
    items: getSubMenuItems(item)
  }));

  const hasDropdownContent = dropdownColumnsAll.some(column => column.items.length > 0);

  // 어떤 컬럼을 하이라이트할지 결정
  const activeColumnIndex = hoveredColumnIndex !== null ? hoveredColumnIndex : openMenuIndex;

  return (
    <>
      <div
        className="hidden lg:block absolute left-1/2 -translate-x-1/2 z-50"
        style={{
          width: openMenuIndex !== null ? "1024px" : "auto",
          transition: "width 350ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
        onMouseEnter={() => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }}
        onMouseLeave={handleMouseLeave}
      >
        <nav className="relative w-full" style={{ minHeight: "40px" }}>
          {menuItems.map((item, index) => {
            const openWidth = 1024;
            const gap = 24;
            const columnWidth = (openWidth - (gap * 3)) / 4; // 238px

            let leftFromCenter = 0;
            if (openMenuIndex === null) {
              // Closed state - calculate centered positions
              const closedGap = 180; // Spacing between menu items when closed
              const totalItems = menuItems.length;
              const itemSpacing = closedGap;
              // Position items centered with equal spacing
              const totalSpacing = (totalItems - 1) * itemSpacing;
              const startOffset = -totalSpacing / 2;
              leftFromCenter = startOffset + index * itemSpacing;
            } else {
              // Open state - positioned in grid columns
              const columnCenterFromLeft = index * (columnWidth + gap) + columnWidth / 2;
              leftFromCenter = columnCenterFromLeft - openWidth / 2;
            }

            return (
              <div
                key={item.label}
                className="absolute top-0 flex justify-center"
                style={{
                  left: "50%",
                  transform: `translateX(calc(${leftFromCenter}px - 50%))`,
                  transition: "transform 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms ease-out",
                  whiteSpace: "nowrap",
                  opacity: 1,
                }}
              >
                <DesktopDropdown
                  item={item}
                  isOpen={openMenuIndex === index}
                  onMouseEnter={() => handleMouseEnter(index)}
                />
              </div>
            );
          })}
        </nav>
      </div>

      {/* Backdrop Overlay */}
      {hasDropdownContent && (
        <div
          className="fixed inset-0 bg-black/40 z-30 transition-opacity duration-400 ease-out pointer-events-none"
          style={{
            top: "120px",
            opacity: openMenuIndex !== null ? 1 : 0
          }}
          onMouseEnter={handleMouseLeave}
        />
      )}

      {/* Full-width Dropdown Panel */}
      {hasDropdownContent && (
        <div
          className="absolute left-0 right-0 top-full bg-white border-t border-gray-200 z-40 transition-all duration-400 ease-out"
          style={{
            marginTop: "-2px",
            opacity: openMenuIndex !== null ? 1 : 0,
            transform: openMenuIndex !== null ? "translateY(0)" : "translateY(-10px)",
            pointerEvents: openMenuIndex !== null ? "auto" : "none"
          }}
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={() => {
            handleMouseLeave();
            setHoveredColumnIndex(null);
          }}
        >
          <div className="max-w-5xl mx-auto">
            {/* 서브메뉴 컬럼들 - 전체 너비에 균등 분배 */}
            <div className="grid grid-cols-4 gap-6">
              {dropdownColumnsAll.map((column, idx) => (
                <div
                  key={column.title}
                  className={`py-8 px-6 transition-all duration-300 ease-out ${
                    activeColumnIndex === idx
                      ? "bg-[#f5f5f7] border-t-2 border-t-[#ed1c24]"
                      : "bg-[#fffff] border-t-2 border-t-transparent"
                  }`}
                  onMouseEnter={() => setHoveredColumnIndex(idx)}
                  onMouseLeave={() => setHoveredColumnIndex(null)}
                >
                  <div className="space-y-7">
                    {column.items.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block text-base text-center text-[#444] hover:text-[#ed1c24] transition-colors duration-250 ease-out"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
