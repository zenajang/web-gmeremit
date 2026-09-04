"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import HeroContent from "../../molecules/HeroContent";

export default function Hero() {
  const {country} = useParams<{country: string}>();
  const countryUppercase = country?.toUpperCase();
  const backgroundImage = `/images/country/heroImages/hero-${country?.toLowerCase()}-fullwidth.webp`;

  return (
    <section
      className="relative flex items-center min-h-[480px] sm:min-h-[580px] lg:min-h-[clamp(660px,51vw,980px)]"
      style={
        {
          "--hero-pos-desktop-x": "56%",
          "--hero-pos-tablet-x": "64%",
          "--hero-pos-tablet-y": "46%",
          "--hero-pos-mobile-x": "92%",
          "--hero-pos-mobile-y": "42%",
        } as React.CSSProperties
      }
    >
      <Image
        src={backgroundImage}
        alt={`${country} hero image`}
        fill
        priority
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover text-transparent object-[var(--hero-pos-mobile-x)_var(--hero-pos-mobile-y)] sm:object-[var(--hero-pos-tablet-x)_var(--hero-pos-tablet-y)] lg:object-[var(--hero-pos-desktop-x)_top]"
      />
      <HeroContent countryUppercase={countryUppercase} />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
    </section>
  );
}