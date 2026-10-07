import { CommonButtonProps } from "@/components/ui/CommonButton";
import { ExchangeRateCalculator } from "..";
import Image from "next/image";

interface SplitSectionData {
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

interface SplitSectionTranslate {
  t: (key: string, params?: Record<string, string>) => string;
  tArray: (key: string) => string[];
}

const sectionHeading = (text: string) => (
  <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.15] font-extrabold text-[#181818] tracking-[-0.01em] lg:max-w-[15ch]">
    {text}
  </h2>
);

export const splitSectionData = (
  { t, tArray }: SplitSectionTranslate
): SplitSectionData[] => [
  {
    id: "exchange-rate",
    direction: "row",
    info: {
      sectionTitle: t("split-section.exchangeRate.eyebrow"),
      contentTitle: sectionHeading(t("split-section.exchangeRate.heading")),
      description: t("split-section.exchangeRate.description"),
      footnote: t("split-section.exchangeRate.note"),
    },
    content: <ExchangeRateCalculator />
  },
  {
    id: "international-remittance",
    direction: "row",
    info: {
      sectionTitle: t("split-section.remittance.eyebrow"),
      contentTitle: sectionHeading(t("split-section.remittance.heading")),
      description: t("split-section.remittance.description"),
      benefits: tArray("split-section.remittance.features"),
      buttonProps: {
        as: "link",
        href: "/#app-download",
        type: "button",
        children: t("split-section.remittance.ctaLabel"),
        className: "w-full sm:w-fit flex items-center justify-center font-semibold cursor-pointer px-7 py-3 sm:py-3.5 mt-2 text-[16px] rounded-full bg-primary text-white hover:bg-[#c11a28]"
      }
    },
    content: <Image src="/images/country/international-remittance.png" alt="International Remittance" width={1200} height={1200} className="w-full h-auto mx-auto max-w-[240px] sm:max-w-[300px] lg:max-w-[361px]" />
  },
  {
    id: "card",
    direction: "row-reverse",
    info: {
      sectionTitle: t("split-section.card.eyebrow"),
      contentTitle: sectionHeading(t("split-section.card.heading")),
      description: t("split-section.card.description"),
      benefits: tArray("split-section.card.features"),
      buttonProps: {
        as: "link",
        href: "/services/card",
        type: "button",
        children: t("split-section.card.ctaLabel"),
        className: "w-full sm:w-fit flex items-center justify-center font-semibold cursor-pointer px-7 py-3 sm:py-3.5 mt-2 text-[16px] rounded-full bg-primary text-white hover:bg-[#c11a28]"
      }
    },
    content: <Image src="/images/country/cards-fan.webp" alt="Card" width={1200} height={1200} className="w-full h-auto max-w-[528px] mx-auto" />
  },
  {
    id: "sim-card",
    direction: "row",
    info: {
      sectionTitle: t("split-section.simCard.eyebrow"),
      contentTitle: sectionHeading(t("split-section.simCard.heading")),
      description: t("split-section.simCard.description"),
      benefits: tArray("split-section.simCard.features"),
      buttonProps: {
        as: "link",
        href: "/services/telecom",
        type: "button",
        children: t("split-section.simCard.ctaLabel"),
        className: "w-full sm:w-fit flex items-center justify-center font-semibold cursor-pointer px-7 py-3 sm:py-3.5 mt-2 text-[16px] rounded-full bg-primary text-white hover:bg-[#c11a28]"
      }
    },
    content: <Image src="/images/country/sim-cards.webp" alt="SIM Card" width={1200} height={1200} className="w-full h-auto max-w-[240px] sm:max-w-[300px] lg:max-w-[506px] mx-auto" />
  },
  {
    id: "loan",
    direction: "row-reverse",
    info: {
      sectionTitle: t("split-section.loan.eyebrow"),
      contentTitle: sectionHeading(t("split-section.loan.heading")),
      description: t("split-section.loan.description"),
      benefits: tArray("split-section.loan.features"),
      buttonProps: {
        as: "link",
        href: "/services/loan",
        type: "button",
        children: t("split-section.loan.ctaLabel"),
        className: "w-full sm:w-fit flex items-center justify-center font-semibold cursor-pointer px-7 py-3 sm:py-3.5 mt-2 text-[16px] rounded-full bg-primary text-white hover:bg-[#c11a28]"
      }
    },
    content: <Image src="/images/country/loan-phone.webp" alt="Loan" width={1200} height={1200} className="w-full h-auto  max-w-[220px] sm:max-w-[280px] lg:max-w-[320px] mx-auto" />
  }
]
