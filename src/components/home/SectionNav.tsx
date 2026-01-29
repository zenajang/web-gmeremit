"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "홈" },
  { id: "app", label: "환율 계산기" },
  { id: "gme-payments", label: "서비스" },
  { id: "payments-section", label: "Payments" },
  { id: "overseas-remittance", label: "해외송금" },
  { id: "online-loan", label: "대출" },
  { id: "gme-cards", label: "카드" },
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
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = section.id === "hero"
          ? document.querySelector(".snap-section")
          : document.getElementById(section.id);

        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2) {
            setActiveSection(section.id);
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
      {sections.map((section) => (
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
          <span className="absolute left-6 px-2.5 py-1 rounded-md bg-[#191c1f] text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {section.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
