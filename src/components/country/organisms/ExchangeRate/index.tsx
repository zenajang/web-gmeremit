"use client";

import ExchangeRateCalculator from "../ExchangeRateCalculator";

const ExchangeRate = ({ countryName }: { countryName: string }) => {

  return (
    <section id="exchange-rate" className="bg-[#fafaf9] py-12 sm:py-16 lg:py-24">
      <div className="w-full mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-4">
            <p className="text-[#d8202f] font-bold text-[13px] tracking-[0.08em] uppercase">Exchange Rate</p>
            <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.15] font-extrabold text-[#181818] tracking-[-0.01em] lg:max-w-[14ch]">
              Check Today&apos;s<br />Exchange Rate
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#606060] max-w-[42ch]">
              See the latest GME Remit exchange rate before sending money from Korea to {countryName}
            </p>
            <p className="text-[14px] text-[#8a8a8a]">Rates may change throughout the day</p>
          </div>
          <ExchangeRateCalculator countryName={countryName} />
        </div>
      </div>
    </section>
  );
};

export default ExchangeRate;
