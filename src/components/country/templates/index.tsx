import { Hero, ExchangeRate } from "../organisms";

export default function CountryTemplate({ countryName }: { countryName: string }) {
  return (
    <main className={`pt-[var(--header-height-mobile)] lg:pt-[var(--header-height)] min-h-screen`}>
      <Hero />
      <ExchangeRate countryName={countryName} />
    </main>
  )
}