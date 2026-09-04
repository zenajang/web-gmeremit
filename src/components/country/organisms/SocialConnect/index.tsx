'use client';
import Image from "next/image";
import CommonButton from "@/components/ui/CommonButton";
import Link from "next/link";

interface SocialConnectProps {
  countryName: string
}

const SocialConnect = ({ countryName }: SocialConnectProps) => {
  return (
    <section id="SocialConnect" className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="flex flex-wrap justify-between items-center gap-8 max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div>
          <h1 className="text-[28px] font-extrabold tracking-[-0.01em] text-[#181818]">Connect with GME {countryName}</h1>
          <p className="text-[16px] text-[#606060] mt-1">News, helpful tips, and updates for our community</p>
        </div>
        <ul className="flex items-center gap-6">
          <li className="text-[16px] font-semibold text-[#181818]">
            <Link href="https://www.facebook.com/gme.remit" className="flex items-center gap-2">
              <Image src="/images/country/icons/facebook.svg" alt="Facebook" width={20} height={20} />
              Facebook
            </Link>
          </li>
          <li className="text-[16px] font-semibold text-[#181818]">
            <Link href="https://www.instagram.com/gme.remit" className="flex items-center gap-2">
              <Image src="/images/country/icons/instagram.svg" alt="Instagram" width={20} height={20} />
              Instagram
            </Link>
          </li>
          <li className="text-[16px] font-semibold text-[#181818]">
            <Link href="https://www.tiktok.com/gme.remit" className="flex items-center gap-2">
            <Image src="/images/country/icons/tiktok.svg" alt="TikTok" width={20} height={20} />
            TikTok
            </Link>
          </li>
          <li className="text-[16px] font-semibold text-[#181818]">
            <Link href="https://www.channeltalk.com/gme.remit" className="flex items-center gap-2">
              <Image src="/images/country/icons/channeltalk.svg" alt="ChannelTalk" width={20} height={20} />
              ChannelTalk
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default SocialConnect