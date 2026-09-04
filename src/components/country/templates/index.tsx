import { Hero, SpliteSection, QnA } from "../organisms";

export default function CountryTemplate({ countryName }: { countryName: string }) {
  return (
    <main className={`pt-[var(--header-height-mobile)] lg:pt-[var(--header-height)] min-h-[3000px]`}>
      <Hero />
      <SpliteSection countryName={countryName} />
      <QnA />
    </main>
  )
} 