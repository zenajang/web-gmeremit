"use client";

import { CardBenefit } from "@/data/cards";
import SectionHeader from "@/components/ui/SectionHeader"
import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation";

interface BenefitsDiscoverProps {
  benefits: CardBenefit[];
}

const BenefitsDiscover = ({benefits} : BenefitsDiscoverProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      <div className="w-full lg:w-1/2">
        <Image
          src="/images/card/cards_all.png"
          alt="GME Cards Collection"
          width={1406}
          height={1124}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="w-full lg:w-1/2">
        <SectionHeader
          label="Powered by Mastercard"
          title={t("services-card.benefits-discover.why.title")}
          description={t("services-card.benefits-discover.why.description")}
          colorClass="text-primary"
          align="left"
          className="mb-6"
        />
        <div className="flex flex-wrap gap-2">
          {benefits.map((benefit) => (
            <span key={benefit.key} className="px-3.5 py-1.5 rounded-full bg-dark/[0.06] text-gray-600 text-[13px] font-medium">
              {t(`services-card.benefits.why.${benefit.key}.title`)}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BenefitsDiscover