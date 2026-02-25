"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

interface CompanyTabsProps {
  activeTab: "ceo-message" | "history" | "services";
}

export default function CompanyTabs({ activeTab }: CompanyTabsProps) {
  const { t } = useTranslation("company.tabs");

  const tabs = [
    { id: "ceo-message", labelKey: "ceo_message", href: "/company/ceo-message" },
    { id: "history", labelKey: "history", href: "/company/history" },
    { id: "services", labelKey: "services", href: "/company/services" },
  ];

  return (
    <div className="mb-8 sm:mb-12 lg:mb-16">
      <div className="mb-6 sm:mb-8 lg:mb-12 relative">
        {/* Gradient Decoration Boxes */}
        <div className="absolute -top-6 -left-2 w-20 h-20 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl" />
        <div className="absolute -top-4 left-0 w-4 h-4 bg-gradient-to-br from-primary to-primary/60 rounded-sm" />

        <p className="typo-eyebrow text-primary mb-3 relative z-10">
          About Us
        </p>
        <h2 className="typo-page-title tracking-tight relative z-10">
          {t("title")}
        </h2>
      </div>
      <div className="flex gap-1 sm:gap-2 border-b border-gray-200">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={`px-3 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-lg font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? "text-primary border-primary"
                : "text-gray-400 hover:text-dark border-transparent hover:border-gray-300"
            }`}
          >
            {t(tab.labelKey)}
          </Link>
        ))}
      </div>
    </div>
  );
}
