import { CommonButtonProps } from "@/components/ui/CommonButton";
import { ExchangeRateCalculator } from "..";
import Image from "next/image";

interface SpliteSectionData {
  id: string;
  direction: "row" | "row-reverse";
  info: {
    sectionTitle: string;
    contentTitle: React.ReactNode;
    description: string;
    footnote?: string;
    benefits?: string[];
    buttonProps?: CommonButtonProps;
  };
  content?: React.ReactNode;
  image?: string;
}

interface SpliteSectionTranslate {
  t: (key: string, params?: Record<string, string>) => string;
  tArray: (key: string) => string[];
}

const sectionHeading = (text: string) => (
  <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.15] font-extrabold text-[#181818] tracking-[-0.01em] lg:max-w-[15ch]">
    {text}
  </h2>
);

export const spliteSectionData = (
  { t, tArray }: SpliteSectionTranslate
): SpliteSectionData[] => [
  {
    id: "exchange-rate",
    direction: "row",
    info: {
      sectionTitle: t("exchangeRate.eyebrow"),
      contentTitle: sectionHeading(t("exchangeRate.heading")),
      description: t("exchangeRate.description"),
      footnote: t("exchangeRate.note"),
    },
    content: <ExchangeRateCalculator />
  },
  {
    id: "international-remittance",
    direction: "row",
    info: {
      sectionTitle: t("remittance.eyebrow"),
      contentTitle: sectionHeading(t("remittance.heading")),
      description: t("remittance.description"),
      benefits: tArray("remittance.features"),
      buttonProps: {
        as: "link",
        href: "/#app-download",
        type: "button",
        children: t("remittance.ctaLabel"),
        className: "w-full sm:w-fit flex items-center justify-center font-semibold cursor-pointer px-7 py-3 sm:py-3.5 mt-2 text-[16px] rounded-full bg-primary text-white hover:bg-[#c11a28]"
      }
    },
    content: <Image src="/images/country/international-remittance.png" alt="International Remittance" width={1200} height={1200} className="w-full h-auto mx-auto max-w-[240px] sm:max-w-[300px] lg:max-w-[361px]" />
  },
  {
    id: "card",
    direction: "row-reverse",
    info: {
      sectionTitle: t("card.eyebrow"),
      contentTitle: sectionHeading(t("card.heading")),
      description: t("card.description"),
      benefits: tArray("card.features"),
      buttonProps: {
        as: "link",
        href: "/services/card",
        type: "button",
        children: t("card.ctaLabel"),
        className: "w-full sm:w-fit flex items-center justify-center font-semibold cursor-pointer px-7 py-3 sm:py-3.5 mt-2 text-[16px] rounded-full bg-primary text-white hover:bg-[#c11a28]"
      }
    },
    content: <Image src="/images/country/cards-fan.webp" alt="Card" width={1200} height={1200} className="w-full h-auto max-w-[528px] mx-auto" />
  },
  {
    id: "sim-card",
    direction: "row",
    info: {
      sectionTitle: t("simCard.eyebrow"),
      contentTitle: sectionHeading(t("simCard.heading")),
      description: t("simCard.description"),
      benefits: tArray("simCard.features"),
      buttonProps: {
        as: "link",
        href: "/services/telecom",
        type: "button",
        children: t("simCard.ctaLabel"),
        className: "w-full sm:w-fit flex items-center justify-center font-semibold cursor-pointer px-7 py-3 sm:py-3.5 mt-2 text-[16px] rounded-full bg-primary text-white hover:bg-[#c11a28]"
      }
    },
    content: <Image src="/images/country/sim-cards.webp" alt="SIM Card" width={1200} height={1200} className="w-full h-auto max-w-[240px] sm:max-w-[300px] lg:max-w-[506px] mx-auto" />
  },
  {
    id: "loan",
    direction: "row-reverse",
    info: {
      sectionTitle: t("loan.eyebrow"),
      contentTitle: sectionHeading(t("loan.heading")),
      description: t("loan.description"),
      benefits: tArray("loan.features"),
      buttonProps: {
        as: "link",
        href: "/services/loan",
        type: "button",
        children: t("loan.ctaLabel"),
        className: "w-full sm:w-fit flex items-center justify-center font-semibold cursor-pointer px-7 py-3 sm:py-3.5 mt-2 text-[16px] rounded-full bg-primary text-white hover:bg-[#c11a28]"
      }
    },
    content: <Image src="/images/country/loan-phone.webp" alt="Loan" width={1200} height={1200} className="w-full h-auto  max-w-[220px] sm:max-w-[280px] lg:max-w-[320px] mx-auto" />
  }
]
