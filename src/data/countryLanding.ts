export interface FaqItem {
  q: string
  a: string
}

export interface CountryLanding {
  slug: string
  countryCode: string
  countryName: string
  countryNameKo: string
  flag: string
  currency: string
  locale: string
  heroHighlight: string
  heroTitle: string
  heroSubtitle: string
  whyChoose: string[]
  howToSend: string[]
  whySendToTitle: string
  whySendTo: string[]
  payoutMethods: string[]
  faqs: FaqItem[]
}

export const countryLandings: CountryLanding[] = [
  {
    slug: 'us',
    countryCode: 'US',
    countryName: 'The United States',
    countryNameKo: '미국',
    flag: '🇺🇸',
    currency: 'USD',
    locale: 'en',
    heroHighlight: 'United States',
    heroTitle: 'Send money from Korea to the United States',
    heroSubtitle:
      'Fast, secure transfers to the U.S. with GME — Korea’s No.1 money transfer service. Everything you need, built into a single secure app.',
    whyChoose: [
      'Fees up to 90% lower than banks',
      'E-KYC verified, FSC-registered',
      'Transparent, real-time rates',
      'Trusted by 1M+ users worldwide',
    ],
    howToSend: [
      'Download the app & verify your ID',
      'Enter the amount in KRW',
      'Choose the United States as the destination',
      'Recipient gets USD in seconds',
    ],
    whySendToTitle: 'Why send to the United States',
    whySendTo: [
      'Direct deposit to all U.S banks',
      'Arrives in around 10 seconds',
      'Lock in today’s rate before sending',
      'Track every transfer in real time',
    ],
    payoutMethods: ['Bank Deposit', 'Cash Pickup', 'Mobile Wallet'],
    faqs: [
      {
        q: 'How long does a transfer take?',
        a: 'Most transfers to the United States arrive the same day once your payment is confirmed. Bank deposit timing may vary by the recipient bank.',
      },
      {
        q: 'What are the fees?',
        a: 'GME charges a low, transparent fee shown upfront before you send — up to 90% lower than traditional banks, with no hidden costs.',
      },
      {
        q: 'Is it safe to send money with GME Remit?',
        a: 'Yes. GME is a licensed, FSC-registered money transfer provider with E-KYC identity verification and bank-grade security.',
      },
      {
        q: 'Which banks can I send to?',
        a: 'You can send to major banks across the United States via direct deposit, as well as cash pickup and mobile wallet options.',
      },
    ],
  },
]

export function getCountryLanding(slug: string): CountryLanding | null {
  return countryLandings.find((c) => c.slug === slug) ?? null
}

export const countryLandingSlugs = countryLandings.map((c) => c.slug)
