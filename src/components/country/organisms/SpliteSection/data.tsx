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

export const spliteSectionData = (countryName: string): SpliteSectionData[] => [
  {
    id: "exchange-rate",
    direction: "row",
    info: {
      sectionTitle: "Exchange Rate",
      contentTitle: <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.15] font-extrabold text-[#181818] tracking-[-0.01em] lg:max-w-[14ch]">
          Check Today&apos;s<br className="hidden lg:inline" /> Exchange Rate
        </h2>,
      description: `See the latest GME Remit exchange rate before sending money from Korea to ${countryName}`,
      footnote: "Rates may change throughout the day",
    },
    content: <ExchangeRateCalculator />
  },
  {
  id: "international-remittance",
  direction: "row",
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
  {
    id: "card",
    direction: "row-reverse",
    info: {
      sectionTitle: "GME CARD",
      contentTitle: <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.15] font-extrabold text-[#181818] tracking-[-0.01em] lg:max-w-[14ch]">
        One Card for<br className="hidden lg:inline" /> Everything</h2>,
      description: "Simple payments for everyday life in Korea and overseas.",
      benefits: [
        "Pay Worldwide",
        "Shopping",
        "Transportation",
        "Cashback",
        "EasyCare Benefits"
      ],
      buttonProps: {
        as: "link",
        href: "/services/card",
        type: "button",
        children: "Explore GME Cards",
        className: "w-full sm:w-fit flex items-center justify-center font-semibold cursor-pointer px-7 py-3 sm:py-3.5 mt-2 text-[16px] rounded-full bg-primary text-white hover:bg-[#c11a28]"
      }
    },
    content: <Image src="/images/country/cards-fan.webp" alt="Card" width={1200} height={1200} className="w-full h-auto max-w-[528px] mx-auto" />
  },
  {
    id: "sim-card",
    direction: "row",
    info: {
      sectionTitle: "GME SIM Card",
      contentTitle: <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.15] font-extrabold text-[#181818] tracking-[-0.01em] lg:max-w-[14ch]">
        Stay Connected in<br className="hidden lg:inline" /> Korea</h2>,
      description: "Stay close to what matters with mobile plans designed to make life in Korea more straightforward",
      benefits: [
        "Pay Worldwide",
        "Shopping",
        "Transportation",
        "Cashback",
        "EasyCare Benefits"
      ],
      buttonProps: {
        as: "link",
        href: "/services/telecom",
        type: "button",
        children: "View SIM Plans",
        className: "w-full sm:w-fit flex items-center justify-center font-semibold cursor-pointer px-7 py-3 sm:py-3.5 mt-2 text-[16px] rounded-full bg-primary text-white hover:bg-[#c11a28]"
      }
    },
    content: <Image src="/images/country/sim-cards.webp" alt="SIM Card" width={1200} height={1200} className="w-full h-auto max-w-[240px] sm:max-w-[300px] lg:max-w-[506px] mx-auto" />
  },
  {
    id: "loan",
    direction: "row-reverse",
    info: {
      sectionTitle: "GME Loan",
      contentTitle: <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.15] font-extrabold text-[#181818] tracking-[-0.01em] lg:max-w-[14ch]">
        Your Digital Finance<br className="hidden lg:inline" /> Partner</h2>,
      description: "Experience the future of foreigner loans. Apply with ease using the GME app. A simple digital loan experience designed for foreigners living in Korea.",
      benefits: [
        "Paperless Loan Application",
        "Real-time Loan Status Checking",
        "Real-time Loan Balance Checking",
      ],
      buttonProps: {
        as: "link",
        href: "/services/loan",
        type: "button",
        children: "Apply Now",
        className: "w-full sm:w-fit flex items-center justify-center font-semibold cursor-pointer px-7 py-3 sm:py-3.5 mt-2 text-[16px] rounded-full bg-primary text-white hover:bg-[#c11a28]"
      }
    },
    content: <Image src="/images/country/loan-phone.webp" alt="LOAN PHONE" width={1200} height={1200} className="w-full h-auto  max-w-[220px] sm:max-w-[280px] lg:max-w-[320px] mx-auto" />
  }
]