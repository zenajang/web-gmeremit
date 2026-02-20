"use client";

import { useTranslation } from "@/hooks/useTranslation";

interface ServiceHeroProps {
  translationKey: string;
  color: "primary" | "loan" | "payments";
  ctaHref: string;
  ctaTextKey?: string;
  isExternal?: boolean;
  gradientVia?: string;
}

const colorStyles = {
  primary: {
    text: "text-primary",
    bg: "bg-primary",
    hover: "hover:bg-primary-dark",
    gradient: "from-gray-800/[0.12] via-[#f5f5f5] to-primary/[0.14]",
  },
  "primary-gray100": {
    text: "text-primary",
    bg: "bg-primary",
    hover: "hover:bg-primary-dark",
    gradient: "from-gray-800/[0.12] via-gray-100 to-primary/[0.14]",
  },
  loan: {
    text: "text-loan",
    bg: "bg-loan",
    hover: "hover:bg-loan-dark",
    gradient: "from-gray-800/[0.12] via-gray-100 to-loan/[0.14]",
  },
  payments: {
    text: "text-payments",
    bg: "bg-payments",
    hover: "hover:bg-[#2563eb]",
    gradient: "from-gray-800/[0.12] via-[#f5f5f5] to-payments/[0.14]",
  },
} as const;

function getStyleKey(color: string, gradientVia?: string): keyof typeof colorStyles {
  if (color === "primary" && gradientVia === "gray-100") return "primary-gray100";
  return color as keyof typeof colorStyles;
}

export default function ServiceHeroSection({
  translationKey,
  color,
  ctaHref,
  ctaTextKey = "hero.cta",
  isExternal = false,
  gradientVia,
}: ServiceHeroProps) {
  const { t } = useTranslation(translationKey);
  const styles = colorStyles[getStyleKey(color, gradientVia)];

  return (
    <section className="relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient}`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className={`text-sm font-semibold ${styles.text} tracking-wide uppercase mb-3`}>
              {t("hero.badge")}
            </p>
            <h1 className="typo-sub-page-title leading-tight mb-3">
              {t("hero.title1")} <span className={styles.text}>{t("hero.title2")}</span>
            </h1>
            <p className="text-gray-500 max-w-lg">
              {t("hero.description")}
            </p>
          </div>
          <a
            href={ctaHref}
            {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
            className={`inline-flex items-center gap-2 px-5 py-2.5 ${styles.bg} text-white text-sm font-semibold rounded-lg ${styles.hover} transition-colors shrink-0`}
          >
            {t(ctaTextKey)}
            {isExternal ? (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            )}
          </a>
        </div>
      </div>
    </section>
  );
}
