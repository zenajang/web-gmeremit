export interface CardDesign {
  key: string;
  label: string;
  image: string;
}

export interface CardDef {
  id: string;
  eyebrow: string;
  title: string;
  ctaHref: string;
  image: string;
  designs?: CardDesign[];
  isNew?: boolean;
}

export const cardDefs: CardDef[] = [
  {
    id: "easyCare",
    eyebrow: "EASYCARE",
    title: "EasyCare",
    ctaHref: "/services/card",
    image: "/images/card/EasyCare_black.png",
    designs: [
      { key: "black", label: "Black", image: "/images/card/EasyCare_black.png" },
      { key: "wine", label: "Wine", image: "/images/card/EasyCare_wine.png" },
    ],
    isNew: true,
  },
  {
    id: "easyG0",
    eyebrow: "EASYGO",
    title: "EasyGo Card",
    ctaHref: "/services/card",
    image: "/images/card/EasyGo_front.png",
  },
  {
    id: "black",
    eyebrow: "PREMIUM",
    title: "Premium Card",
    ctaHref: "/services/card",
    image: "/images/card/Premium_front.png",
  },
  {
    id: "red",
    eyebrow: "PAY CARD",
    title: "Pay Card",
    ctaHref: "/services/card",
    image: "/images/card/Pay_Red_front.png",
    designs: [
      { key: "red", label: "Red", image: "/images/card/Pay_Red_front.png" },
      { key: "white", label: "White", image: "/images/card/Pay_White_front.png" },
    ],
  },
  {
    id: "uniq",
    eyebrow: "UNIQ",
    title: "UniQ Card",
    ctaHref: "/services/card",
    image: "/images/card/Uniq_front.png",
  },
];
