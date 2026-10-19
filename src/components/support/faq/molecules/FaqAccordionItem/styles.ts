export const SupportFaqAccordionItemWrapper =
  "bg-white rounded-xl border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-md";

export const SupportFaqAccordionItemButton =
  "w-full flex items-center justify-between p-5 text-left cursor-pointer";

export const SupportFaqAccordionItemQuestion = "text-[15px] font-semibold text-dark pr-4";

const supportFaqAccordionItemChevronBase =
  "w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300";

export const SupportFaqAccordionItemChevron = supportFaqAccordionItemChevronBase;

export const SupportFaqAccordionItemChevronOpen = `${supportFaqAccordionItemChevronBase} rotate-180`;

const supportFaqAccordionItemPanelBase = "overflow-hidden transition-all duration-300 ease-out";

export const SupportFaqAccordionItemPanel = `${supportFaqAccordionItemPanelBase} max-h-0 opacity-0`;

export const SupportFaqAccordionItemPanelOpen = `${supportFaqAccordionItemPanelBase} max-h-96 opacity-100`;

export const SupportFaqAccordionItemPanelBody = "px-5 pb-5";

export const SupportFaqAccordionItemDivider = "h-px bg-gray-100 mb-4";

export const SupportFaqAccordionItemAnswer = "text-sm text-gray-600 leading-relaxed";
