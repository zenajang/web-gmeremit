import css from "styled-jsx/css";

export const CalculatorContainer = css`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CalculatorTitle =
  "bg-white rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.06)] p-6 sm:p-8 flex flex-col gap-4 w-full sm:w-[460px]";

export const CalculatorHeaderRow = "flex items-baseline justify-between";

export const CalculatorHeading = "text-[24px] font-bold text-[#181818]";

export const CalculatorStatusBadge =
  "inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 rounded-full px-2.5 py-1 text-xs font-medium mt-1.5 lg:mt-0 lg:gap-2 lg:px-3.5 lg:py-1.5 lg:text-sm lg:font-semibold";
export const CalculatorStatusBadgeSuccess = "bg-emerald-50 text-green-800";
export const CalculatorStatusBadgeError = "bg-red-50 text-red-600";

export const CalculatorStatusDot = "w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full";
export const CalculatorStatusDotLoading = "bg-yellow-400 animate-pulse";
export const CalculatorStatusDotError = "bg-red-400";
export const CalculatorStatusDotSuccess = "bg-success";

export const CalculatorFieldWrapper = "flex flex-col gap-2";

export const CalculatorFieldLabel =
  "text-[12px] font-semibold text-[#666666] tracking-[0.08em] uppercase";

export const CalculatorInputRow =
  "flex items-center justify-between border border-[#202020] rounded-lg px-4 py-3.5";

export const CalculatorInput =
  "border-none outline-none text-[18px] font-semibold text-[#181818] w-full bg-transparent";

export const CalculatorCurrencyTag = "text-[14px] font-semibold text-[#8a8a8a] shrink-0";

export const CalculatorErrorMessage = "text-xs text-red-500";

export const CalculatorValueText = "text-[18px] font-semibold text-[#181818]";

export const CalculatorResultBox = "bg-[#fff1f2] rounded-lg px-5 py-4 flex flex-col gap-1";

export const CalculatorResultLabel =
  "text-[12px] font-semibold text-[#d8202f] tracking-[0.08em] uppercase";

export const CalculatorResultValue =
  "text-[24px] sm:text-[28px] font-extrabold text-[#d8202f] tracking-[-0.01em]";

export const CalculatorMetaRow = "flex items-center justify-between text-[14px]";

export const CalculatorMetaLabel = "text-[#181818] font-medium";

export const CalculatorMetaValue = "text-[#303030] italic";

export const CalculatorSubmitButton =
  "w-full flex items-center justify-center bg-[#d8202f] hover:bg-[#c11a28] text-white text-[16px] font-bold tracking-[0.02em] uppercase px-6 py-[15px] rounded-full transition-colors cursor-pointer";
