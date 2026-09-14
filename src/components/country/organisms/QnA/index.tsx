"use client";

import { useCountryTranslation } from "@/hooks/useCountryTranslation";

interface QnAProps {
  countryName: string;
}

interface FaqItem {
  question: string;
  answer: string[];
}

const QnA = ({ countryName }: QnAProps) => {
  const { t, tObject } = useCountryTranslation(countryName);
  const items = tObject<FaqItem[]>("faq.items") ?? [];

  return (
    <section id="QnA" className="bg-[#fafaf9] py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
      <h1 className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold leading-[1.15] tracking-[-0.01em] text-[#181818] px-3.5 sm:px-4 lg:px-5">{t("faq.heading")}</h1>
      <p className="text-[16px] lg:text-[18px] text-[#606060] mt-2 mb-8 px-3.5 sm:px-4 lg:px-5">{t("faq.subheading")}</p>
      <div className="w-full h-[1px] bg-[#e0e0e0]" />
      {items.map((item, index) => (
        <div key={index} id={`QnA-${index + 1}`} className="py-5 px-3.5 sm:py-6 sm:px-4 lg:py-7 lg:px-5 border-b border-[#e0e0e0]">
          <h2 className="text-[15px] lg:text-[17px] font-semibold text-[#181818]">{item.question}</h2>
          {item.answer.length === 1 ? (
            <p className="max-w-[68ch] text-[15px] leading-[1.6] text-[#606060] mt-3 ml-10">
              {item.answer[0].replaceAll("{SUPPORT_PHONE_NUMBER}", "(+82) 02-1588-6864")}
            </p>
          ) : (
            <div className="flex flex-col gap-2.5 max-w-[68ch] mt-3 ml-10">
              {item.answer.map((line, lineIndex) => (
                <p key={lineIndex} className="text-[15px] leading-[1.6] text-[#606060]">
                  {line.replaceAll("{SUPPORT_PHONE_NUMBER}", "(+82) 02-1588-6864")}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
      </div>
    </section>
  )
}

export default QnA;
