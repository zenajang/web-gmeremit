import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCountryLanding, countryLandingSlugs } from '@/data/countryLanding'
import CountryLanding from '@/components/country/CountryLanding'

export const dynamicParams = false
export const revalidate = 3600

export function generateStaticParams() {
  return countryLandingSlugs.map((country) => ({ country }))
}

interface CountryPageProps {
  params: Promise<{ country: string }>
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const { country } = await params
  const data = getCountryLanding(country)
  if (!data) return { title: 'GME Remittance' }

  const path = `/${data.slug}`
  return {
    title: data.heroTitle,
    description: data.heroSubtitle,
    alternates: { canonical: path },
    openGraph: {
      title: data.heroTitle,
      description: data.heroSubtitle,
      url: path,
      type: 'website',
    },
  }
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { country } = await params
  const data = getCountryLanding(country)
  if (!data) notFound()

  return <CountryLanding data={data} />
}
