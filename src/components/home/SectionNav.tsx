"use client";

import { useEffect, useState } from "react";

// 네비게이션에 표시될 섹션들 (5개)
const navSections = [
  { id: "hero", label: "홈" },
  { id: "app", label: "환율 계산기" },
  { id: "gme-payments", label: "서비스" },
  { id: "testimonials", label: "고객 후기" },
  { id: "app-download", label: "앱 다운로드" },
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

  const scrollToSection = (sectionId: string) => {
    const headerHeight = window.innerWidth >= 1024 ? 80 : 64;

    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.offsetTop - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {navSections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center cursor-pointer"
          aria-label={section.label}
        >
          {/* Dot */}
          <span
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? "bg-[#ed1c24] scale-125"
                : "bg-[#d1d5db] hover:bg-[#9ca3af]"
            }`}
          />
          {/* Tooltip */}
          <span className="absolute left-8 px-4 py-2 rounded-lg bg-[#191c1f] text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
            {section.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
