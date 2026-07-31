import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiChevronDown } from 'react-icons/hi2'
import { FaApple } from 'react-icons/fa'
import { createClient } from '@supabase/supabase-js'
import PublicLayout from '@/components/layout/PublicLayout'
import BoardNewsCarousel, { type NewsSlide } from '@/components/country/BoardNewsCarousel'
import WhyAccordion, { type WhyItem } from '@/components/country/WhyAccordion'
import CountryLangScope from '@/components/country/CountryLangScope'
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/lib/appLinks'
import type { CountryLanding as CountryLandingData } from '@/data/countryLanding'

interface CountryLandingProps {
  data: CountryLandingData
}

const STATS = [
  { value: '90%', label: 'Lower fees' },
  { value: '10s', label: 'Fast arrival' },
  { value: '1M+', label: 'Global users' },
]

const NEWS_TYPES = [
  {
    type: 'blog',
    label: '블로그',
    panel: 'bg-gradient-to-br from-[#fff6f1] to-[#fbe7df]',
    fallbackImage: '/images/blog_3d.png',
    fallbackClass: 'w-[66%] max-w-[260px]',
    alwaysIcon: true,
  },
  {
    type: 'press',
    label: '언론보도',
    panel: 'bg-gradient-to-br from-[#f4f7fc] to-[#eaf0f9]',
    fallbackImage: '/images/press_3d.png',
    fallbackClass: 'w-[72%] max-w-[290px]',
    alwaysIcon: false,
  },
  {
    type: 'notice',
    label: '공지사항',
    panel: 'bg-gradient-to-br from-[#f2fbf5] to-[#e7f6ec]',
    fallbackImage: '/images/megaphone_3d.png',
    fallbackClass: 'w-[54%] max-w-[210px]',
    alwaysIcon: false,
  },
]

async function getLatestNews(): Promise<NewsSlide[]> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
  const results = await Promise.all(
    NEWS_TYPES.map(async (t) => {
      const { data } = await supabase
        .from('board_entries')
        .select('id, title, description, excerpt, date, image_url, slug')
        .eq('type', t.type)
        .order('date', { ascending: false })
        .limit(1)
      const post = data?.[0]
      if (!post) return null
      return {
        label: t.label,
        title: post.title,
        description: post.description || post.excerpt || '',
        date: (post.date || '').replace(/-/g, '.'),
        image: t.alwaysIcon ? null : post.image_url || null,
        href: `/board/${post.slug || post.id}`,
        panel: t.panel,
        fallbackImage: t.fallbackImage,
        fallbackClass: t.fallbackClass,
      } as NewsSlide
    }),
  )
  return results.filter((s): s is NewsSlide => s !== null)
}

export default async function CountryLanding({ data }: CountryLandingProps) {
  const news = await getLatestNews()

  const titleParts = data.heroTitle.split(data.heroHighlight)

  const whyItems: WhyItem[] = [
    { title: 'Why choose GME Remit', points: data.whyChoose, image: '/images/why_gmeremit.jpg', cover: true, aspect: 'aspect-[16/9]', objectPos: 'object-bottom' },
    { title: 'How to send money', points: data.howToSend, image: '/images/gme_app_hand.jpg', cover: true, objectPos: 'object-right' },
    { title: data.whySendToTitle, points: data.whySendTo, image: '/images/send_world.jpg', cover: true },
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <PublicLayout className="bg-white" footerVariant="full">
      <CountryLangScope locale={data.locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[calc(100svh-var(--header-height-mobile))] lg:min-h-[calc(100svh-var(--header-height))] flex items-center">
        <Image
          src="/images/country_bg.jpg"
          alt=""
          fill
          priority
          className="object-cover scale-100"
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative z-10 max-w-content mx-auto w-full px-5 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm sm:text-base font-bold text-dark mb-6">
            {data.flag} {data.countryName}
            <span className="inline-block w-1 h-1 rounded-full bg-gray-400 align-middle mx-2.5" />
            <span className="text-primary">{data.currency}</span>
          </p>
          <h1 className="text-[2rem] sm:text-5xl lg:text-[3.4rem] font-semibold text-dark leading-[1.15] tracking-tight">
            {titleParts[0]}
            {titleParts.length > 1 && (
              <>
                <br />
                <span className="font-semibold text-primary">{data.heroHighlight}</span>
              </>
            )}
            {titleParts[1] ?? ''}
          </h1>
          <div className="mt-14 flex items-center justify-center gap-x-8 sm:gap-x-14">
            {STATS.map((s, i) => (
              <Fragment key={s.label}>
                {i > 0 && (
                  <span className="h-12 w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
                )}
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark tracking-tight">{s.value}</p>
                  <p className="mt-2 text-xs sm:text-sm font-medium text-gray-800">{s.label}</p>
                </div>
              </Fragment>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-8 justify-center">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 rounded-md bg-white/75 border-2 border-white px-9 py-5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/90 transition-colors"
            >
              <FaApple className="w-8 h-8 text-dark" />
              <span className="text-xl font-bold text-dark">App Store</span>
            </a>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 rounded-md bg-white/75 border-2 border-white px-9 py-5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/90 transition-colors"
            >
              <svg viewBox="0 0 512 512" className="w-7 h-7" aria-hidden="true">
                <path fill="#00C3FF" d="M42 24c-4 2-6 6-6 11v442c0 5 2 9 6 11l253-232L42 24z" />
                <path fill="#FFCE00" d="M400 232l-72-42-63 58 63 58 72-42c16-9 16-23 0-32z" />
                <path fill="#FF3B30" d="M42 488c4 2 9 2 14-1l307-176-63-58L42 488z" />
                <path fill="#00E676" d="M42 24l258 235 63-58L56 25c-5-3-10-3-14-1z" />
              </svg>
              <span className="text-xl font-bold text-dark">Google Play</span>
            </a>
          </div>
          </div>
        </div>
      </section>

      {/* 왜 GME인가 — 번호 나열 (한국식) */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 lg:pt-40 pb-24 lg:pb-40">
        <p className="text-sm font-bold text-primary mb-4">WHY GME</p>
        <h2 className="text-3xl sm:text-5xl font-bold text-dark tracking-tight leading-[1.18]">
          왜 GME로 보낼까요?
        </h2>
        <p className="mt-6 text-base sm:text-lg text-gray-500 leading-relaxed">
          한국에서 {data.countryNameKo}으로 보내는 가장 빠르고 저렴한 방법.
          <br className="hidden sm:block" />
          필요한 모든 기능을 앱 하나에 담았습니다.
        </p> 

        <div className="mt-14 lg:mt-20">
          <WhyAccordion items={whyItems} />
        </div>
      </section>

      {/* Latest news — carousel from board */}
      {news.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-32 lg:pb-56">
          <div className="mb-14 lg:mb-22 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-primary mb-3">최신 소식</p>
              <h2 className="text-2xl sm:text-4xl font-bold text-dark tracking-tight">
                GME의 새로운 소식과 이야기
              </h2>
            </div>
            <Link
              href="/board"
              className="flex-none text-base sm:text-lg font-bold text-gray-500 hover:text-primary transition-colors"
            >
              더 보기
            </Link>
          </div>
          <BoardNewsCarousel slides={news} />
        </section>
      )}

      {/* FAQ */}
      <section className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 pb-20 lg:pb-45">
        <h2 className="text-2xl sm:text-4xl font-bold text-dark tracking-tight text-center mb-12 lg:mb-16">
          자주 묻는 질문
        </h2>
        <div className="max-w-3xl mx-auto">
          {data.faqs.map((f) => (
            <details key={f.q} className="group border-b border-[var(--border-soft)] py-6 first:border-t">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg sm:text-xl font-bold text-dark list-none [&::-webkit-details-marker]:hidden">
                {f.q}
                <HiChevronDown className="w-5 h-5 flex-none text-gray-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 pb-24 lg:pb-32">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#fff1e9] via-[#ffe5d8] to-[#ffd7c6] px-6 py-16 lg:py-24 text-center">
          <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-[#ff8a4c]/15 blur-3xl" />
          <div className="relative">
          <h2 className="text-3xl sm:text-5xl font-bold text-dark tracking-tight leading-[1.16] text-balance">
            지금 GME로<br />{data.countryNameKo}에 송금하세요
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            앱 하나로 안전하고 빠르게. 수수료는 은행보다 최대 90% 저렴합니다.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image src="/images/home/app-store-badge.svg" alt="Download on the App Store" width={180} height={60} className="h-[54px] w-auto" />
            </a>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
            >
              <Image src="/images/home/google-play-badge.svg" alt="Get it on Google Play" width={302} height={50} className="h-[79px] w-auto" />
            </a>
          </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  )
}
