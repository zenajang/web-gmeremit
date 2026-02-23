export interface CardDef {
  id: string;
  eyebrow: string;
  title: string;
  ctaHref: string;
  image: string;
}

export const cardDefs: CardDef[] = [
  {
    id: "black",
    eyebrow: "PREMIUM",
    title: "Premium",
    ctaHref: "/services/card",
    image: "/images/card/Premium_front.png",
  },
  {
    id: "white",
    eyebrow: "THE WHITE",
    title: "The White",
    ctaHref: "/services/card",
    image: "/images/card/Pay_White_front.png",
  },
  {
    id: "red",
    eyebrow: "THE RED",
    title: "The Red",
    ctaHref: "/services/card",
    image: "/images/card/Pay_Red_front.png",
  },
  {
    id: "easyG0",
    eyebrow: "EASYGO",
    title: "EasyGo",
    ctaHref: "/services/card",
    image: "/images/card/EasyGo_front.png",
  },
];
