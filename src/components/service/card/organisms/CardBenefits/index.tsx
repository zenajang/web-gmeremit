"use client"

import { FcMoneyTransfer, FcShop,FcGlobe, FcDonate,FcAutomotive } from "react-icons/fc";
import { cardBenefitKeys } from "@/data/cards";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Benefits, BenefitsDiscover  } from "@/components/service/card/molecules";

const CardBenefits = () => {
  const { registerSectionRef } = useScrollFadeIn();

  const benefitIcons: Record<string, React.ReactNode> = {
    atm:        <FcMoneyTransfer  className="w-10 h-10" />,
    transit:    <FcAutomotive    className="w-10 h-10" />,
    global:     <FcGlobe className="w-10 h-10" />,
    everywhere: <FcShop className="w-10 h-10" />,
    cashback:   <FcDonate className="w-10 h-10"/>,
  };

  const benefits = cardBenefitKeys.map((key) => ({
    key,
    icon: benefitIcons[key],
  }));

  return (
    <section ref={registerSectionRef(0)} className="py-20 lg:py-28 fade-section">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <BenefitsDiscover benefits={benefits} />
        <Benefits benefits={benefits} />
      </div>
    </section>
  )
}

export default CardBenefits