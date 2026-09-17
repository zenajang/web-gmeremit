"use client"
import { usePendingTranslation } from "@/hooks/usePendingTranslation";

interface CardGridItemDetailButtonProps {
  cardKey: string;
  isSoldOut?: boolean;
  setSelectedCard: (v: string) => void

}

const CardGridItemDetailButton = ({cardKey, isSoldOut = false, setSelectedCard}: CardGridItemDetailButtonProps) => {
  const { t } = usePendingTranslation("card");

  if(isSoldOut) {
    const soldOutCss = "w-full py-2.5 text-xs font-semibold rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed"
    return (
      <button disabled className={soldOutCss}>Sold Out</button>
    )
  }


  const buttonCss = "w-full py-2.5 text-xs font-semibold rounded-lg bg-gray-700 text-white transition-colors hover:bg-gray-800 cursor-pointer"
  return (
    <button onClick={() => setSelectedCard(cardKey)} className={buttonCss}>
      {t("grid.detail")}
    </button>
  )
}

export default CardGridItemDetailButton