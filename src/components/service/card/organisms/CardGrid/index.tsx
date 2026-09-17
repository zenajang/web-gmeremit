
"use client";

import { useState } from "react";
import { cards } from "@/data/cards";
import { CardGridItem, CardGridTitle } from "@/components/service/card/molecules";
import CardDetailModal from "@/components/service/card/organisms/CardDetailModal";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

const CardGrid = () => {
  const { registerSectionRef } = useScrollFadeIn();
  
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <section id="cards" ref={registerSectionRef(0)} className="py-16 lg:py-24 fade-section">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <CardGridTitle />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 [&>*:nth-last-child(2)]:lg:col-start-1 [&>*:nth-last-child(2)]:lg:col-end-2 [&>*:nth-last-child(1)]:lg:col-start-2 [&>*:nth-last-child(1)]:lg:col-end-3">
          {cards.map((card, idx) => (
            <CardGridItem key={card.key} card={card} idx={idx} setSelectedCard={setSelectedCard} />
          ))}
        </div>
      </div>

      {selectedCard && ["pay", "black", "easyG0", "easyCare"].includes(selectedCard) && (
        <CardDetailModal selectedCard={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </section>
  )
}

export default CardGrid