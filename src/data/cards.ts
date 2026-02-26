export interface CardProduct {
  key: string;
  displayName: string;
  image: string;
  color: string;
  bg: string;
}

export interface CardBenefit {
  key: string;
  iconPath: string;
  color: string;
}

export const cards: CardProduct[] = [
  {
    key: "red",
    displayName: "THE RED",
    image: "/images/card/Pay_Red_front.png",
    color: "#ed1c24",
    bg: "bg-gradient-to-br from-gray-50 to-gray-100",
  },
  {
    key: "white",
    displayName: "THE WHITE",
    image: "/images/card/Pay_White_front.png",
    color: "#9ca3af",
    bg: "bg-gradient-to-br from-gray-800 to-[#374151]",
  },
  {
    key: "easyG0",
    displayName: "EASY GO",
    image: "/images/card/EasyGo_front.png",
    color: "#4b5563",
    bg: "bg-gradient-to-br from-gray-50 to-gray-100",
  },
  {
    key: "black",
    displayName: "THE BLACK",
    image: "/images/card/Premium_front.png",
    color: "#1f2937",
    bg: "bg-gradient-to-br from-gray-50 to-gray-100",
  },
  {
    key: "uniq",
    displayName: "THE UNIQ",
    image: "/images/card/Uniq_front.png",
    color: "#ed1c24",
    bg: "bg-gradient-to-br from-gray-50 to-gray-100",
  },
];

export const cardBenefitKeys = ["atm", "transit", "global", "everywhere", "cashback"] as const;

