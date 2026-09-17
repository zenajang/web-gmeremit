"use client";

import { CardBenefit } from "@/data/cards";
import { useCardTranslation } from "@/hooks/useCardTranslation";


interface BenefitsProps {
  benefits: CardBenefit[];
}

const Benefits = ({benefits} : BenefitsProps) => {
  const { t } = useCardTranslation("card");

  return (
    <div className="mt-16 lg:mt-24">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {benefits.map((benefit) => (
          <div
            key={benefit.key}
            className="group rounded-xl p-6 text-center bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 will-change-transform transition-[transform,box-shadow,border-color] duration-200 fade-step"
          >
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              {benefit.icon}
            </div>
            <h3 className="text-[17px] font-bold text-dark mb-1">
              {t(`why.${benefit.key}.title`)}
            </h3>
            <p className="text-[14px] text-gray-400 leading-relaxed">
              {t(`why.${benefit.key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Benefits