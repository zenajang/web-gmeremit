"use client";

import { CardProduct } from "@/data/cards";
import CardGridItemName from "@/components/service/card/molecules/CardGridItemName";
import CardGridItemImage from "@/components/service/card/molecules/CardGridItemImage";
import CardGridItemBenefits from "@/components/service/card/molecules/CardGridItemBenefits";
import CardGridItemDetailButton from "@/components/service/card/molecules/CardGridItemDetailButton";

interface CardGridItemProps {
  card: CardProduct;
  idx: number
  setSelectedCard: (v: string) => void
}

const CardGridItem = ({card, idx, setSelectedCard}: CardGridItemProps) => {

  return (
    <div
      className="flex flex-col h-full bg-white rounded-xl border border-gray-200 p-4 lg:p-5 hover:shadow-md will-change-transform transition-shadow duration-200 fade-step"
    >
      <CardGridItemName card={card} />
      <CardGridItemImage card={card} idx={idx} />
      <div className="mt-auto">
        <CardGridItemBenefits card={card} />
        <CardGridItemDetailButton cardKey={card.key} isSoldOut={card.soldOut} setSelectedCard={setSelectedCard}/>
      </div>
    </div>
  )
}

export default CardGridItem