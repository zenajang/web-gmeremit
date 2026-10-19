import { AboutUsHeadingFont } from "@/components/company/about-us/styles";

const journeyYearEventBase =
  "grid grid-cols-[46px_12px_minmax(0,1fr)] items-start gap-x-4 gap-y-[18px] py-[11px] before:col-start-2 before:row-start-1 before:mt-[7px] before:h-2 before:w-2 before:rounded-full before:content-[''] max-md:grid-cols-[38px_10px_minmax(0,1fr)] max-md:gap-x-3 max-sm:gap-y-[10px]";

const journeyYearEventMonthBase = "col-start-1 row-start-1 text-[13px] font-bold leading-[1.6]";

const journeyYearEventTextBase =
  "col-start-3 row-start-1 max-w-[760px] text-[14px] leading-[1.65] tracking-normal";

export const JourneyYearRow =
  "grid grid-cols-[150px_minmax(0,1fr)] gap-[38px] border-b border-[#e2e6ea] py-11 tracking-[-1.52px] max-md:grid-cols-1 max-md:gap-[22px] max-md:py-9";

export const JourneyYearLabel = `relative ${AboutUsHeadingFont} text-[34px] font-[750] leading-none tracking-[-0.035em] text-[#111827] after:absolute after:mt-[15px] after:block after:h-px after:w-[42px] after:bg-[#e31b2d] after:content-['']`;

export const JourneyYearEvent = `${journeyYearEventBase} before:bg-[#cfd5dc]`;

export const JourneyYearEventHighlighted = `${journeyYearEventBase} before:bg-[#ef233c] before:shadow-[0_0_0_4px_rgba(239,35,60,0.12)]`;

export const JourneyYearEventMonth = `${journeyYearEventMonthBase} text-[#8b96a8]`;

export const JourneyYearEventMonthHighlighted = `${journeyYearEventMonthBase} text-[#e31b2d]`;

export const JourneyYearEventText = `${journeyYearEventTextBase} text-[#4c586a]`;

export const JourneyYearEventTextHighlighted = `${journeyYearEventTextBase} font-[650] text-[#171b22]`;

export const JourneyYearEventEvidence =
  "col-start-3 mt-[14px] block pt-[22px] pb-2 max-md:col-[1/-1]";

export const JourneyYearEventEvidenceImage =
  "block h-auto max-h-[390px] w-auto max-w-[min(760px,100%)] object-contain";
