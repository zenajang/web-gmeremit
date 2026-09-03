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

export const spliteSectionData: SpliteSectionData[] = [
  {
    id: "exchange-rate",
    direction: "row",
    info: {
      sectionTitle: "Exchange Rate",
      contentTitle: <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.15] font-extrabold text-[#181818] tracking-[-0.01em] lg:max-w-[14ch]">
          Check Today's<br className="hidden lg:inline" /> Exchange Rate
        </h2>,
      description: "See the latest GME Remit exchange rate before sending money from Korea to",
      footnote: "Rates may change throughout the day",
    },
    content: <ExchangeRateCalculator />
  },
  {
  id: "international-remittance",
  direction: "row-reverse",
  info: {
    sectionTitle: "International Remittance",
    contentTitle: <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.15] font-extrabold text-[#181818] tracking-[-0.01em] lg:max-w-[14ch]">
      Send Money to the <br className="hidden lg:inline" /> Philippines</h2>,
    description: "A simple, secure way to support the people who matter most—made for life between Korea and the Philippines",
    benefits: [
      "Competitive exchange rates",
      "Fast and reliable transfers",
      "Transparent fees",
      "Support when you need it"
    ],
    buttonProps: {
      as: "link",
      href: "/#app-download",
      type: "button",
      children: "Send Money Now",
      className: "w-full sm:w-fit flex items-center justify-center font-semibold cursor-pointer px-7 py-3 sm:py-3.5 mt-2 text-[16px] rounded-full bg-primary text-white hover:bg-[#c11a28]"
    }
  },
  content: <Image src="/images/country/international-remittance.png" alt="International Remittance" width={1200} height={1200} className="w-full h-auto mx-auto max-w-[240px] sm:max-w-[300px] lg:max-w-[361px]" />
},
]