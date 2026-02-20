"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { scrollToTop, scrollToSection } from "@/utils/scroll";

const navSectionDefs = [
  { id: "hero", key: "home" },
  { id: "gme-payments", key: "services" },
  { id: "testimonials", key: "testimonials" },
  { id: "app-download", key: "app_download" },
];

// 실제 감지할 모든 섹션들 (서비스 하위 섹션 포함)
const allSections = [
  "hero",
  "app",
  "gme-payments",
  "payments-section",
  "overseas-remittance",
  "online-loan",
  "gme-cards",
  "testimonials",
  "app-download",
];

// 서비스 관련 섹션 ID들
const serviceSectionIds = [
  "gme-payments",
  "payments-section",
  "overseas-remittance",
  "online-loan",
  "gme-cards",
];

export default function SectionNav() {
  const { t } = useTranslation("home.section_nav");
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 처음부터 표시
    setIsVisible(true);

    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // 현재 활성 섹션 찾기
      for (let i = allSections.length - 1; i >= 0; i--) {
        const sectionId = allSections[i];
        const element = sectionId === "hero"
          ? document.querySelector(".snap-section")
          : document.getElementById(sectionId);

        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2) {
            // 서비스 관련 섹션이면 "gme-payments"로 매핑
            if (serviceSectionIds.includes(sectionId)) {
              setActiveSection("gme-payments");
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (sectionId: string) => {
    if (sectionId === "hero") {
      scrollToTop();
      return;
    }
    const offset = sectionId === "testimonials" ? 40 : 0;
    scrollToSection(sectionId, offset);
  };

  return (
    <nav
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {navSectionDefs.map((section) => (
        <button
          key={section.id}
          onClick={() => handleNav(section.id)}
          className="group relative flex items-center cursor-pointer"
          aria-label={t(section.key)}
        >
          {/* Dot */}
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? "bg-primary scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
          {/* Tooltip */}
          <span className="absolute left-8 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-gray-700 text-xs font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none shadow-sm ring-1 ring-gray-200/60">
            {t(section.key)}
          </span>
        </button>
      ))}
    </nav>
  );
}
