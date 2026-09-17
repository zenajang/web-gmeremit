"use client";

import { useCardTranslation } from "@/hooks/useCardTranslation";

const CardGridTitle = () => {
  const { t } = useCardTranslation("card");
  return (
    <div className="relative text-center mb-10 lg:mb-12 overflow-visible">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-20 h-[2px] bg-gradient-to-r from-transparent to-primary/20 fade-step" />
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-20 h-[2px] bg-gradient-to-l from-transparent to-primary/20 fade-step" />
        <div className="absolute left-[15%] top-0 w-1.5 h-1.5 rounded-full bg-primary/20 fade-step" />
        <div className="absolute right-[20%] top-2 w-1 h-1 rounded-full bg-primary/30 fade-step" />
        <div className="absolute left-[25%] bottom-0 w-1 h-1 rounded-full bg-gray-300 fade-step" />
        <div className="absolute right-[12%] bottom-1 w-1.5 h-1.5 rounded-full bg-gray-200 fade-step" />
      </div>
      <div className="flex items-center justify-center gap-2 mb-4 fade-step">
        <span className="w-6 h-[2px] bg-primary/40 rounded-full" />
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        <span className="w-6 h-[2px] bg-primary/40 rounded-full" />
      </div>
      <h2 className="relative typo-section-title mb-5">
        {t("grid.title")}
      </h2>
      <p className="relative text-gray-500 max-w-2xl mx-auto text-sm">
        {t("grid.subtitle")}
      </p>
    </div>
  )
}
export default CardGridTitle