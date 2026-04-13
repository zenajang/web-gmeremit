"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { languages } from "@/lib/language";
import type { MenuItem } from "./DesktopNav";

// ============ Icons ============
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-primary shrink-0">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

// ============ Language Bottom Sheet ============
export function MobileLanguageBottomSheet({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white z-[70] rounded-t-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "pointer-events-none translate-y-full"
        }`}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3">
          <div className="w-9 h-[3px] bg-gray-200 rounded-full" />
        </div>

        {/* Title */}
        <div className="px-5 pt-5 pb-3">
          <h3 className="text-[15px] font-semibold text-dark">언어 선택</h3>
        </div>

        {/* Language List */}
        <div className="overflow-y-auto max-h-[65vh] pb-8">
          {languages.map((lang, i) => {
            const isSelected = currentLanguage.code === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setLanguage(lang);
                  onClose();
                }}
                className={`w-full flex items-center justify-between px-5 py-4 transition-colors duration-100 cursor-pointer ${
                  isSelected ? "bg-gray-50" : "hover:bg-gray-50"
                } ${i !== 0 ? "border-t border-gray-100" : ""}`}
              >
                <div className="flex flex-col items-start gap-0.5">
                  <span className={`text-[15px] leading-snug ${isSelected ? "font-semibold text-primary" : "font-medium text-dark"}`}>
                    {lang.nativeName}
                  </span>
                  {lang.nativeName !== lang.name && (
                    <span className="text-xs text-gray-400">{lang.name}</span>
                  )}
                </div>
                {isSelected && <CheckIcon />}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

// ============ Mobile Accordion ============
export function MobileAccordion({
  item,
  onClose,
}: {
  item: MenuItem;
  onClose: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Simple link
  if (!item.children) {
    return (
      <Link
        href={item.href ?? "#"}
        className="block px-4 py-3 text-base text-dark hover:bg-gray-50 font-medium border-b border-gray-100"
        onClick={onClose}
      >
        {item.label}
      </Link>
    );
  }

  // Regular accordion
  return (
    <div className="border-b border-gray-100">
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 text-base text-dark hover:bg-gray-50 font-medium cursor-pointer"
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
              {...(child.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
              className="block px-6 py-2.5 text-sm text-dark hover:bg-gray-100 hover:text-primary"
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
  careersLabel = "Careers",
}: {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  careersLabel?: string;
}) {
  return (
    <>
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-black/20 z-40 transition-opacity duration-250 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto transition-all duration-250 ease-out ${
          isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav className="pb-6">
          {menuItems.map((item) => (
            <MobileAccordion
              key={item.label}
              item={item}
              onClose={onClose}
            />
          ))}
          <div className="px-4 pt-4">
            <Link
              href={{ pathname: "/", hash: "app-download" }}
              className="block w-full bg-primary-dark hover:bg-primary text-white font-semibold px-6 py-3 rounded-full text-center transition-colors duration-200"
              onClick={onClose}
            >
              Download App
            </Link>
            <div className="flex items-center justify-center gap-3 mt-4 pb-2">
              <Link
                href="/company/careers"
                className="text-sm text-gray-500 hover:text-primary transition-colors"
                onClick={onClose}
              >
                {careersLabel}
              </Link>
              <span className="text-gray-300">|</span>
              <a
                href="https://gmebiz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-primary transition-colors"
                onClick={onClose}
              >
                GME Biz
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
