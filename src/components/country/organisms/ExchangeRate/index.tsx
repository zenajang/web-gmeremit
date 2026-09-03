import { Information } from "../../molecules";
import { ExchangeRateCalculator } from "..";

const ExchangeRate = () => {

  const sectionTitle = "Exchange Rate";
  const contentTitle = <h2  className="text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.15] font-extrabold text-[#181818] tracking-[-0.01em] lg:max-w-[14ch]">
        Check Today's<br className="hidden lg:inline" /> Exchange Rate
      </h2>;
  const description = "See the latest GME Remit exchange rate before sending money from Korea to";
  const footnote = "Rates may change throughout the day";

  return (
    <section id="exchange-rate" className="bg-[#fafaf9] py-12 sm:py-16 lg:py-24">
      <div className="w-full mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] gap-12 lg:gap-16 items-center">
          <Information
            sectionTitle={sectionTitle}
            contentTitle={contentTitle} 
            description={description}
            footnote={footnote}
            />
          <ExchangeRateCalculator />
        </div>
      </div>
    </section>
  );
};

export default ExchangeRate;
