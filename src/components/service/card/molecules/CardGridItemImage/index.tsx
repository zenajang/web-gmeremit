"use client"

import Image from "next/image";
import { useState } from "react";
import { CardProduct } from "@/data/cards";

interface CardGridItemImageProps {
  card: CardProduct
  idx: number
}

const CardGridItemImage = ({ card, idx }: CardGridItemImageProps) => {
  const {designs, image, displayName, soldOut} = card
  const [designIndex, setDesignIndex] = useState(0);

  const activeDesign = designs?.[designIndex];

  return (
    <>
      <div className="relative mb-4 flex items-center justify-center py-5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-gray-100"></div>
          </div>
          <Image
            src={activeDesign?.image ?? image}
            alt={`GME ${displayName}`}
            width={450}
            height={280}
            className={`relative z-10 w-auto h-44 object-contain ${soldOut ? "blur-[0.5px] opacity-80" : ""}`}
            priority={idx === 0}
          />
          {card.soldOut && (
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <span className="text-xl font-extrabold uppercase tracking-[0.2em] text-dark/30 drop-shadow-sm">
                Sold Out
              </span>
            </div>
          )}
        </div>

        {card.designs && (
          <div className="flex items-center justify-center gap-2 mb-4">
            {card.designs.map((design, dIdx) => (
              <button
                key={design.key}
                type="button"
                onClick={() => setDesignIndex(dIdx)}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                  dIdx === designIndex
                    ? "border-primary bg-primary text-white"
                    : "border-gray-200 bg-white text-gray-600 hover:border-primary/50"
                }`}
              >
                {design.label}
              </button>
            ))}
          </div>
        )}
    </>
  )
}

export default CardGridItemImage