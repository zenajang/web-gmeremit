"use client";

import { CardProduct } from "@/data/cards"
import { usePendingTranslation } from "@/hooks/usePendingTranslation";



const CardGridItemName = ({ card }: { card: CardProduct }) => {
  const { displayName, designs, key, isNew, soldOut } = card;
  const { t } = usePendingTranslation("card");
    
  return (
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="typo-card-title mb-0.5">
          {displayName}
        </h3>
        <p className={`text-sm text-gray-500 ${designs ? "pb-5" : ""}`}>
          {!designs && t(`cards.${key}.subtitle`)}
        </p>
      </div>
      {isNew && (
        <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
          New
        </span>
      )}
      {soldOut && (
        <span className="px-3 py-1 bg-gray-900 text-white text-xs font-bold rounded-full">
          Sold Out
        </span>
      )}
    </div>
  )
}

export default CardGridItemName