import Image from "next/image";
import Link from "next/link";

interface SocialConnectProps {
  countryName: string
}

const socialLinks: Record<string, { facebook?: string; tiktok?: string }> = {
  philippines: { facebook: "https://www.facebook.com/gmephilippines", tiktok: "https://www.tiktok.com/@gmeremittancephilippines" },
  indonesia: { facebook: "https://www.facebook.com/gmeindonesia", tiktok: "https://www.tiktok.com/@gmeindonesia" },
  africa: { facebook: "https://www.facebook.com/gmeafrica", tiktok: "https://www.tiktok.com/@gmeremitafrica" },
  arab: { facebook: "https://www.facebook.com/gmearab", tiktok: "https://www.tiktok.com/@gmeremitarab" },
  china: { facebook: "https://www.facebook.com/GMERemittanceChina", tiktok: "https://www.tiktok.com/@gmeremittance_china" },
  "spanish-latam": { facebook: "https://www.facebook.com/gmelatam", tiktok: "https://www.tiktok.com/@gmeremitlatam" },
  vietnam: { facebook: "https://www.facebook.com/gmevietnam2", tiktok: "https://www.tiktok.com/@gme.vietnam" },
  kazakhstan: { facebook: "https://www.facebook.com/people/GME-Remit-Kazakhstan/61572122767541/", tiktok: "https://www.tiktok.com/@gme_kazakhstan" },
  cambodia: { facebook: "https://www.facebook.com/gmecambodian", tiktok: "https://www.tiktok.com/@gmecambodia" },
  bangladesh: { facebook: "https://www.facebook.com/gmebangladesh", tiktok: "https://www.tiktok.com/@gmeremitbangladesh" },
  mongolia: { facebook: "https://www.facebook.com/gmemongolia", tiktok: "https://www.tiktok.com/@gmemongolia" },
  laos: { facebook: "https://www.facebook.com/people/GME-Remit-Laos-%E0%BB%82%E0%BA%AD%E0%BA%99%E0%BB%80%E0%BA%87%E0%BA%B4%E0%BA%99%E0%BA%88%E0%BA%B2%E0%BA%81%E0%BB%80%E0%BA%81%E0%BA%BB%E0%BA%B2%E0%BA%AB%E0%BA%BC%E0%BA%B5%E0%BB%84%E0%BA%9B%E0%BA%A5%E0%BA%B2%E0%BA%A7/61578138554726/", tiktok: "https://www.tiktok.com/@gmelaos" },
  russia: { facebook: "https://www.facebook.com/gmerussia", tiktok: "https://www.tiktok.com/@gme_cis" },
  myanmar: { facebook: "https://www.facebook.com/gmemyanmar", tiktok: "https://www.tiktok.com/@gme_remit_myanmar" },
  nepal: { facebook: "https://www.facebook.com/gmenepal", tiktok: "https://www.tiktok.com/@gmeremitnepal" },
  "sri-lanka": { facebook: "https://www.facebook.com/gmeremitsrilanka", tiktok: "https://www.tiktok.com/@gmeremitsrilanka" },
  uzbekistan: { facebook: "https://www.facebook.com/gmeuzbekistan", tiktok: "https://www.tiktok.com/@gmeuzbekistan" },
  india: { facebook: "https://www.facebook.com/gmeremitindia", tiktok: "https://www.tiktok.com/@gmeremitindia" },
  pakistan: { facebook: "https://www.facebook.com/gmepakistan", tiktok: "https://www.tiktok.com/@gmepakistan" },
  thailand: { facebook: "https://www.facebook.com/gmethailand", tiktok: "https://www.tiktok.com/@gmeremittancethailand" },
  kyrgyzstan: { facebook: "https://www.facebook.com/people/GME-Remit-Kyrgyzstan/61570857322650/", tiktok: "https://www.tiktok.com/@gme.kyrgyzstan" },
};

const SocialConnect = ({ countryName }: SocialConnectProps) => {
  const links = socialLinks[countryName?.toLowerCase()] ?? {};
  
  return (
    <section id="SocialConnect" className="bg-white py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-center gap-8 max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div>
          <h1 className="text-[24px] sm:text-[28px] font-extrabold tracking-[-0.01em] text-[#181818]">Connect with GME {countryName}</h1>
          <p className="text-[16px] text-[#606060] mt-1">News, helpful tips, and updates for our community</p>
        </div>
        <ul className="flex items-center gap-x-4 gap-y-3 sm:gap-6">
          <li className="text-[16px] font-semibold text-[#181818]">
            <Link href={links.facebook ?? `/country/${countryName}`} target="_blank" className="flex items-center gap-2 text-[15px] font-semibold text-[#181818]">
              <Image src="/images/country/icons/facebook.svg" alt="Facebook" width={20} height={20} />
              Facebook
            </Link>
          </li>
          <li className="text-[16px] font-semibold text-[#181818]">
            <Link href={`/country/${countryName}`} target="_blank" className="flex items-center gap-2 text-[15px] font-semibold text-[#181818]">
              <Image src="/images/country/icons/instagram.svg" alt="Instagram" width={20} height={20} />
              Instagram
            </Link>
          </li>
          <li className="text-[16px] font-semibold text-[#181818]">
            <Link href={links.tiktok ?? `/country/${countryName}`} target="_blank" className="flex items-center gap-2 text-[15px] font-semibold text-[#181818]">
            <Image src="/images/country/icons/tiktok.svg" alt="TikTok" width={20} height={20} />
            TikTok
            </Link>
          </li>
          <li className="text-[16px] font-semibold text-[#181818]">
            <Link href={`/country/${countryName}`} target="_blank" className="flex items-center gap-2 text-[15px] font-semibold text-[#181818]">
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