"use client";

import { Hero, SplitSection, QnA, SocialConnect, Download } from "../organisms";
import { useCountryLanguageSync } from "@/hooks/useCountryLanguageSync";

export default function CountryTemplate({ countryName }: { countryName: string }) {
  useCountryLanguageSync(countryName);

  return (
    <main className={`pt-[var(--header-height-mobile)] lg:pt-[var(--header-height)] min-h-[3000px]`}>
      <Hero />
      <SplitSection countryName={countryName} />
      <QnA countryName={countryName} />
      <SocialConnect countryName={countryName} />
      <Download />
    </main>
  )
}
