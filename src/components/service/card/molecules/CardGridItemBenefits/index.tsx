"use client";

import { CardProduct } from "@/data/cards"
import { usePendingTranslation } from "@/hooks/usePendingTranslation";

const CardGridItemBenefits = ({card}: {card: CardProduct}) => {
  const { tArray } = usePendingTranslation("card");

  const featureList = tArray(`cards.${card.key}.features`);
  const highlightFeatures = Array.isArray(featureList) ? featureList.slice(0, 3) : [];

  return (
    <div className="space-y-1.5 mb-4">
      {highlightFeatures.map((feature, fIdx) => (
        <div key={`benefit-${fIdx}`} className="flex items-start gap-1.5">
          <span className="text-dark text-xs">•</span>
          <span className="text-xs text-gray-600 leading-relaxed">{feature}</span>
        </div>
      ))}
    </div>
  )
}

export default CardGridItemBenefits
