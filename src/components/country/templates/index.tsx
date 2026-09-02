import Hero from "../organisms/Hero";

export default function CountryTemplate({ countryName }: { countryName: string }) {
  return (
    <main className={`pt-[var(--header-height-mobile)] lg:pt-[var(--header-height)] min-h-screen`}>
      <Hero />
    </main>
  )
}