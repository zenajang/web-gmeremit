"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import HeroContent from "../../molecules/HeroContent";

export default function Hero() {
  const {country} = useParams();
  const countryUppercase = (country as string)?.toUpperCase();
  const backgroundImage = `/images/country/heroImages/hero-${country}-fullwidth.webp`;

  return (
    <section className="relative flex items-center min-h-[480px] sm:min-h-[580px] lg:min-h-[clamp(660px,51vw,980px)]">
      <Image
        src={backgroundImage}
        alt={`${country} hero image`}
        fill
        priority
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover object-top text-transparent"
      />
      <HeroContent countryUppercase={countryUppercase} />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
    </section>
  );
}