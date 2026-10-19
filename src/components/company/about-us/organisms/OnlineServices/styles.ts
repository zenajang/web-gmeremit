import {
  AboutUsCard,
  AboutUsCardGrid,
  AboutUsHeadingFont,
} from "@/components/company/about-us/styles";

export const OnlineServicesGrid = `${AboutUsCardGrid} grid-cols-6 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1`;

export const OnlineServicesCard = `${AboutUsCard} h-28 min-h-28 flex-col items-center justify-center px-2.5 py-[18px] text-center`;

export const OnlineServicesCardTitle = `${AboutUsHeadingFont} text-center text-[14px] font-bold leading-[1.35] tracking-[-0.01em] text-[#111827]`;

export const OnlineServicesNetworkLine =
  "mt-7 border-t border-[#e5e7eb] pt-[25px] text-[14px] leading-[1.8] text-[#666]";
