"use client";

import { useState, useRef, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { languages } from "@/lib/language";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useTranslation } from "@/hooks/useTranslation";
import { servedEntries } from "@/data/servedCountries";
import { useRouter } from "next/navigation";

// ============ Types ============
export interface MenuItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

// ============ Language Selector ============
export function LanguageSelector() {
  const { currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-200 cursor-pointer border ${
          isOpen ? "bg-gray-100 text-dark border-gray-300" : "text-dark hover:bg-gray-100 border-gray-200"
        }`}
        aria-label="Select language"
      >
        <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <ellipse cx="12" cy="12" rx="4" ry="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
        <span>{currentLanguage.nativeName}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 z-50">
          <div
            className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] py-1.5 min-w-[220px] max-h-[360px] overflow-y-auto overscroll-contain"
            onWheel={(e) => e.stopPropagation()}
          >
            {languages.map((lang) => {
              const isSelected = currentLanguage.code === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setLanguage(lang);
                    setIsOpen(false);
                  }}
                  className={`group w-full flex items-center gap-3 px-3.5 py-2 text-left transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-gray-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span
                    className="text-[13px] font-bold w-7 h-7 shrink-0 flex items-center justify-center rounded-md transition-colors duration-150 group-hover:bg-white group-hover:shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
                    style={{ color: lang.color }}
                  >
                    {lang.label}
                  </span>
                  <span className={`text-[14px] ${isSelected ? "text-dark font-semibold" : "text-gray-700 font-medium"}`}>
                    {lang.nativeName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ============ Countries Dropdown ============
export function CountriesDropdown({ label }: { label: string }) {
  const { t } = useTranslation("home.hero");
  const { setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const countriesWithNames = useMemo(
    () =>
      servedEntries.map((c) => ({
        ...c,
        name: c.nameNs === "header" ? t(c.nameKey, { ns: "header" }) : t(c.nameKey),
      })),
    [t]
  );

  const getRenderFlag = (code: string, flagSrc?: string) => {
    switch (code) {
      case "AFRICA":
        return <span className="w-5 h-5 flex items-center justify-center text-base shrink-0">🌍</span>;
      case "ARAB":
        return <span className="w-5 h-5 flex items-center justify-center text-base shrink-0">🌐</span>;
      case "SPANISH_LATAM":
        return <span className="w-5 h-5 flex items-center justify-center text-base shrink-0">🌎</span>;
      case "RUSSIA_CIS":
        return <span className="w-5 h-5 flex items-center justify-center text-base shrink-0">🗺️</span>;
      default:
        return <img src={flagSrc} alt="" className="w-5 h-5 rounded-full object-cover shrink-0" />;
    }
  }
  
  const CountryNamesEn: Record<string, string> = {
    PH: "Philippines",
    ID: "Indonesia",
    MY: "Malaysia",
    SG: "Singapore",
    HK: "Hong Kong",
    TW: "Taiwan",
    CN: "China",
    JP: "Japan",
    KR: "Korea",
    TH: "Thailand",
    VN: "Vietnam",
    IN: "India",
    BD: "Bangladesh",
    PK: "Pakistan",
    AF: "Afghanistan",
    BT: "Bhutan",
    BN: "Brunei",
    KH: "Cambodia",
    MM: "Myanmar",
    LA: "Laos",
    MN: "Mongolia",
    NP: "Nepal",
    KZ: "Kazakhstan",
    KG: "Kyrgyzstan",
    LK: "Sri Lanka",
    UZ: "Uzbekistan",
  };

  const clickCountry = (code: string, langCode: string) => {
    setSelectedCode(code);
    setIsOpen(false);
    const matched = languages.find((lang) => lang.code === langCode);
    setLanguage(matched ?? languages.find((lang) => lang.code === "en")!);
    router.push(`/country/${CountryNamesEn[code]}`);
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center gap-1.5 text-lg text-dark hover:text-dark font-medium transition-all duration-200 px-3 py-2 cursor-pointer"
        aria-label="Select country"
      >
        <span>{label}</span>
        <svg
          className={`w-4 h-4 text-neutral-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 w-fit">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] p-8">
            <div className="grid grid-cols-[auto_auto] gap-x-10 gap-y-5">
              {countriesWithNames.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => clickCountry(c.code, c.langCode)}
                  className={`inline-flex items-center gap-1 bg-transparent border-0 p-0 text-[15px] font-medium whitespace-nowrap cursor-pointer transition-colors duration-150 ${
                    selectedCode === c.code ? "text-primary" : "text-[#181818] hover:text-primary"
                  }`}
                >
                  {getRenderFlag(c.code, c.flagSrc)}
                  <span>{c.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============ Nav Item Dropdown (Company / Services / News / Support) ============
export function NavDropdown({ item }: { item: MenuItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  // Simple link without dropdown
  if (!item.children) {
    return (
      <Link
        href={item.href ?? "#"}
        className="relative text-lg text-dark hover:text-dark font-medium transition-all duration-200 px-3 py-2 hover:after:absolute hover:after:-bottom-[28px] hover:after:left-0 hover:after:right-0 hover:after:h-[2px] hover:after:bg-primary"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center gap-1.5 text-lg text-dark hover:text-dark font-medium transition-all duration-200 px-3 py-2 cursor-pointer"
      >
        <span>{item.label}</span>
        <svg
          className={`w-4 h-4 text-neutral-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50">
          <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] flex flex-col gap-4 p-6 min-w-[200px]">
            {item.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                onClick={() => setIsOpen(false)}
                {...(child.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                className="inline-flex items-center gap-1 bg-transparent border-0 p-0 text-[15px] font-medium text-[#181818] whitespace-nowrap cursor-pointer transition-colors duration-150 hover:text-primary"
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
  countriesLabel,
}: {
  menuItems: MenuItem[];
  countriesLabel: string;
}) {
  return (
    <div className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2 z-50">
      {menuItems.slice(0, 2).map((item) => (
        <NavDropdown key={item.label} item={item} />
      ))}
      <CountriesDropdown label={countriesLabel} />
      {menuItems.slice(2).map((item) => (
        <NavDropdown key={item.label} item={item} />
      ))}
    </div>
  );
}
