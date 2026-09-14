"use client";

import CommonButton from "@/components/ui/CommonButton";

interface HeroContentProps {
  eyebrow: string;
  headingLines: string[];
  subheading: string;
  ctaPrimaryLabel: string;
  ctaSecondaryLabel: string;
}

const HeroContent = ({ eyebrow, headingLines, subheading, ctaPrimaryLabel, ctaSecondaryLabel }: HeroContentProps) => {
  const handleScrollToExchangeRate = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.getElementById("exchange-rate");
    if (!target) return;

    const headerOffset = window.innerWidth >= 1024 ? 120 : 64; // lg: 유틸리티바(40)+메인네브(80), 모바일: 메인네브(64)
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  };

  return (
    <div className="relative z-2 w-full mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10 pt-8 pb-6 sm:pt-16 sm:pb-12 lg:pt-24 lg:pb-24">
      <div className="flex flex-col gap-3 sm:gap-4">
        <p className="text-primary font-bold text-[13px] tracking-[0.08em]">{eyebrow}</p>
        <h1 className="text-white text-[26px] sm:text-[42px] lg:text-[56px] font-extrabold leading-[1.1] text-shadow-[0_2px_16px_rgba(0,0,0,0.35)]">
          {headingLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < headingLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="text-white/92 text-[14px] sm:text-[18px] leading-[1.6] max-w-[46ch] text-shadow-[0_1px_10px_rgba(0,0,0,0.3)]">{subheading}</p>
        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3 mt-2">
          <CommonButton
            as="link"
            href="/#app-download"
            type="button"
            className="w-full sm:w-auto flex items-center justify-center font-semibold cursor-pointer px-7 py-3 sm:py-3.5 text-[16px] rounded-full bg-primary text-white shadow-[0_8px_24px_rgba(237,28,36,0.3)] hover:bg-[#c11a28]"
          >
            {ctaPrimaryLabel}
          </CommonButton>
          <CommonButton
            as="button"
            type="button"
            onClick={handleScrollToExchangeRate}
            className="w-full sm:w-auto flex items-center justify-center font-semibold cursor-pointer px-[27px] py-3 sm:py-[13px] text-[16px] rounded-full border-2 border-white text-white bg-white/14 backdrop-blur-sm"
          >
            {ctaSecondaryLabel}
          </CommonButton>
        </div>
      </div>
    </div>
  )
}

export default HeroContent;