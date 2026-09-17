export interface CardDesign {
  key: string;
  label: string;
  image: string;
}

export interface CardProduct {
  key: string;
  displayName: string;
  image: string;
  color: string;
  bg: string;
  /** 한 상품에 여러 디자인이 있는 경우(Pay, EasyCare) */
  designs?: CardDesign[];
  isNew?: boolean;
  soldOut?: boolean;
}

export interface CardBenefit {
  key: string;
  iconPath: string;
  color: string;
}

export const cards: CardProduct[] = [
  {
    key: "easyCare",
    displayName: "EasyCare Card",
    image: "/images/card/EasyCare_black.png",
    color: "#1f2937",
    bg: "bg-gradient-to-br from-gray-50 to-gray-100",
    designs: [
      { key: "black", label: "Black", image: "/images/card/EasyCare_black.png" },
      { key: "wine", label: "Wine", image: "/images/card/EasyCare_wine.png" },
    ],
    isNew: true,
  },
  {
    key: "easyG0",
    displayName: "EasyGo Card",
    image: "/images/card/EasyGo_front.png",
    color: "#4b5563",
    bg: "bg-gradient-to-br from-gray-50 to-gray-100",
  },
  {
    key: "black",
    displayName: "Premium Card",
    image: "/images/card/Premium_front.png",
    color: "#1f2937",
    bg: "bg-gradient-to-br from-gray-50 to-gray-100",
  },
  {
    // 기존 번역 키(red)를 그대로 유지한다 — 표시명만 Pay Card로 변경
    key: "pay",
    displayName: "Pay Card",
    image: "/images/card/Pay_Red_front.png",
    color: "#ed1c24",
    bg: "bg-gradient-to-br from-gray-50 to-gray-100",
    designs: [
      { key: "red", label: "Red", image: "/images/card/Pay_Red_front.png" },
      { key: "white", label: "White", image: "/images/card/Pay_White_front.png" },
    ],
  },
  {
    key: "uniq",
    displayName: "UniQ Card",
    image: "/images/card/Uniq_front.png",
    color: "#ed1c24",
    bg: "bg-gradient-to-br from-gray-50 to-gray-100",
    soldOut: true,
  },
];

export const cardBenefitKeys = ["global", "everywhere", "cashback", "transit", "atm"] as const;
