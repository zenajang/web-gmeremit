'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

export interface NewsSlide {
  label: string
  title: string
  description: string
  date: string
  image: string | null
  href: string
  panel: string
  fallbackImage?: string | null
  fallbackClass?: string
}

interface BoardNewsCarouselProps {
  slides: NewsSlide[]
}

export default function BoardNewsCarousel({ slides }: BoardNewsCarouselProps) {
  const [index, setIndex] = useState(0)
  const go = (next: number) => setIndex((next + slides.length) % slides.length)

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.href} className="w-full flex-none">
              <Link href={slide.href} className="group grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
                {/* Text — left */}
                <div className="order-2 lg:order-1">
                  <h3 className="text-xl sm:text-[1.6rem] font-bold text-dark leading-[1.4] tracking-tight line-clamp-2">
                    <span className="align-middle mr-2.5 inline-block px-3 py-1 rounded-full bg-[#191c1f] text-white text-xs sm:text-sm font-bold translate-y-[-0.12em]">
                      {slide.label}
                    </span>
                    {slide.title}
                  </h3>
                  {slide.description && (
                    <p className="mt-4 text-base text-gray-500 leading-relaxed line-clamp-2">
                      {slide.description}
                    </p>
                  )}
                  {slide.date && <p className="mt-6 text-sm text-gray-400">{slide.date}</p>}
                </div>

                {/* Thumbnail — right */}
                <div
                  className={`order-1 lg:order-2 relative rounded-[28px] overflow-hidden aspect-[16/10] ${
                    slide.image ? 'bg-gray-100' : slide.panel
                  }`}
                >
                  {slide.image ? (
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : slide.fallbackImage ? (
                    <div className="w-full h-full flex items-center justify-center p-3 sm:p-5">
                      <Image
                        src={slide.fallbackImage}
                        alt={slide.label}
                        width={500}
                        height={500}
                        className={`${slide.fallbackClass || 'w-[70%] max-w-[280px]'} h-auto transition-transform duration-500 group-hover:scale-[1.04]`}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary/40">{slide.label}</span>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Controls — aligned to the bottom of the image box, under the text */}
      <div className="mt-6 lg:mt-0 lg:absolute lg:bottom-0 lg:inset-x-0 grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.href}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${i + 1}번째 소식`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === index ? 'w-7 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="이전"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <HiChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="다음"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <HiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
