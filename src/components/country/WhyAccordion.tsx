'use client'

import { useState } from 'react'
import Image from 'next/image'

export interface WhyItem {
  title: string
  points: string[]
  image: string
  cover?: boolean
  aspect?: string
  objectPos?: string
}

interface WhyAccordionProps {
  items: WhyItem[]
}

export default function WhyAccordion({ items }: WhyAccordionProps) {
  const [open, setOpen] = useState(0)

  return (
    <div className="border-b border-[var(--border-soft)]">
      {items.map((item, i) => {
        const isOpen = i === open
        return (
          <div
            key={item.title}
            onMouseEnter={() => setOpen(i)}
            onClick={() => setOpen(i)}
            className="border-t border-[var(--border-soft)] py-8 lg:py-10"
          >
            <div className="flex gap-6 lg:gap-10">
              <span className="text-2xl lg:text-3xl font-extrabold text-primary tabular-nums leading-none pt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-bold text-dark tracking-tight cursor-default">
                  {item.title}
                </h3>

                {/* Expandable */}
                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-14' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid lg:grid-cols-[1fr_0.65fr] gap-8 lg:gap-12 items-start">
                      <ul className="flex flex-col gap-3">
                        {item.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5">
                            <span className="mt-2 flex-none w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                              {p}
                            </span>
                          </li>
                        ))}
                      </ul>
                      {item.cover ? (
                        <div className={`hidden lg:block relative rounded-2xl overflow-hidden ${item.aspect ?? 'aspect-[16/10]'}`}>
                          <Image src={item.image} alt="" fill className={`object-cover rounded-2xl ${item.objectPos ?? 'object-center'}`} />
                        </div>
                      ) : (
                        <div className="hidden lg:flex rounded-2xl bg-[var(--surface-1)] p-6 items-center justify-center aspect-[16/10]">
                          <Image
                            src={item.image}
                            alt=""
                            width={400}
                            height={400}
                            className="w-[52%] max-w-[200px] h-auto"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
