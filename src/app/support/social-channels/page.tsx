"use client";

import { useState } from "react";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { RiCustomerService2Fill } from "react-icons/ri";

interface Contact {
  label: string;
  phone: string;
}

interface Country {
  id: string;
  name: string;
  nameKo: string;
  flag: string;
  facebook?: string;
  tiktok?: string;
  instagram?: string;
  contacts?: Contact[];
}

const countries: Country[] = [
  { id: "korea", 
    name: "Korea", 
    nameKo: "한국", 
    flag: "🇰🇷", 
    facebook: "https://www.facebook.com/GMEKorea/", 
    tiktok: "https://www.tiktok.com/@GMEKorea" ,    
    contacts: [
      { label: "Remittance", phone: "1811-2961" },
      { label: "Remittance", phone: "010-6551-6864" },
    ]
  },
  {
    id: "nepal",
    name: "Nepal",
    nameKo: "네팔",
    flag: "🇳🇵",
    facebook: "https://www.facebook.com/gmenepal/",
    contacts: [
      { label: "Remittance", phone: "1811-2934" },
      { label: "Loan", phone: "010-6584-6864" },
    ]
  },
  { id: "srilanka", 
    name: "Sri Lanka", 
    nameKo: "스리랑카", 
    flag: "🇱🇰", 
    facebook: "https://www.facebook.com/gmeremitsrilanka/", 
    contacts: [
      { label: "Remittance", phone: "1811-2935" },
      { label: "Loan", phone: "010-2965-6864" },
    ] 
  },
  { id: "philippines", 
    name: "Philippines", 
    nameKo: "필리핀", 
    flag: "🇵🇭", 
    facebook: "https://www.facebook.com/gmephilippines/", 
    contacts: [
      { label: "Remittance", phone: "1811-2936" },
      { label: "Loan", phone: "010-2970-6864" },
    ] 
  },
  { id: "indonesia", 
    name: "Indonesia", 
    nameKo: "인도네시아", 
    flag: "🇮🇩", 
    facebook: "https://www.facebook.com/gmeindonesia/", 
    tiktok: "https://www.tiktok.com/@gmeindonesia",
    contacts: [
      { label: "Remittance", phone: "1811-2945" },
      { label: "Loan", phone: "010-3017-6864" },
    ] 
  },
  { id: "mongolia", 
    name: "Mongolia", 
    nameKo: "몽골", 
    flag: "🇲🇳", 
    facebook: "https://www.facebook.com/gmemongolia/", 
    tiktok: "https://www.tiktok.com/@gmemongolia",
    contacts: [
      { label: "Remittance", phone: "1811-2946" },
      { label: "Loan", phone: "010-2973-6864" },
    ] 
  },
  { id: "india", 
    name: "India", 
    nameKo: "인도", 
    flag: "🇮🇳", 
    facebook: "https://www.facebook.com/gmeremitindia/", 
    contacts: [
      { label: "Remittance", phone: "1811-2905" },
      { label: "Loan", phone: "1811-2905​" },
    ] 
  },
  { id: "myanmar", 
    name: "Myanmar", 
    nameKo: "미얀마", 
    flag: "🇲🇲", 
    facebook: "https://www.facebook.com/gmemyanmar#",
    contacts: [
      { label: "Remittance", phone: "1811-2938" },
      { label: "Loan", phone: "010-2976-6864​" },
    ] 
  },
  { id: "cambodia", 
    name: "Cambodia", 
    nameKo: "캄보디아", 
    flag: "🇰🇭", 
    facebook: "https://www.facebook.com/gmecambodia/", 
    tiktok: "https://www.tiktok.com/@gmecambodia",
    contacts: [
      { label: "Remittance", phone: "1811-2948" },
      { label: "Loan", phone: "010-3077-6864" },
    ] 
  },
  { id: "vietnam", 
    name: "Vietnam", 
    nameKo: "베트남", 
    flag: "🇻🇳", 
    facebook: "https://www.facebook.com/gmevietnam/", 
    contacts: [
      { label: "Remittance", phone: "1811-2937​​" },
      { label: "Loan", phone: "010-2930-6864" },
    ] 
  },
  { id: "bangladesh", 
    name: "Bangladesh", 
    nameKo: "방글라데시", 
    flag: "🇧🇩", 
    facebook: "https://www.facebook.com/gmebangladesh/", 
    tiktok: "https://www.tiktok.com/@gmebangladesh",
    contacts: [
      { label: "Remittance", phone: "1811-2943" },
      { label: "Loan", phone: "010-9932-6864" },
    ] 
  },
  { id: "thailand", 
    name: "Thailand", 
    nameKo: "태국", 
    flag: "🇹🇭", 
    facebook: "https://www.facebook.com/gmethailand/", 
    tiktok: "https://www.tiktok.com/@gmeremittancethailand",
    contacts: [
      { label: "Remittance", phone: "1811-2941" },
      { label: "Loan", phone: "010-9928-6864​" },
    ] 
  },
  { id: "uzbekistan & CIS", 
    name: "Uzbekistan & CIS", 
    nameKo: "우즈베키스탄 & CIS", 
    flag: "🇺🇿", 
    facebook: "https://www.facebook.com/gmeuzbekistan/", 
    contacts: [
      { label: "Remittance", phone: "1811-2927" },
      { label: "Loan", phone: "010-2968-6864" },
    ] 
  },
  { id: "pakistan", 
    name: "Pakistan", 
    nameKo: "파키스탄", 
    flag: "🇵🇰", 
    facebook: "https://www.facebook.com/gmepakistan/", 
    tiktok: "https://www.tiktok.com/@gmepakistan",
    contacts: [
      { label: "Remittance", phone: "010-2760-6864" },
      { label: "Loan", phone: "010-2760-6864​" },
    ] 
  },
  { id: "china", 
    name: "China", 
    nameKo: "중국", 
    flag: "🇨🇳", 
    facebook: "https://www.facebook.com/GMERemittanceChina#",
    tiktok:"https://www.tiktok.com/@chinagme",
    contacts: [
      { label: "Remittance", phone: "1811-2907" },
    ] 
  },
  { id: "japan", 
    name: "Japan", 
    nameKo: "일본", 
    flag: "🇯🇵", 
    facebook: "https://www.facebook.com/GMERemittanceChina#",
    instagram:"https://www.instagram.com/gmejapan/?hl=ja",
    contacts: [
      { label: "Remittance", phone: "1811-2969" },
    ] 
  },
  { id: "african-region", 
    name: "African Region", 
    nameKo: "아프리카 지역", 
    flag: "🌍", 
    facebook: "https://www.facebook.com/gmeafrica/",
    contacts: [
      { label: "Remittance", phone: "1811-2904" },
      { label: "Remittance", phone: "010-2989-6864​" },
    ] 
   },
  { id: "western", 
    name: "Western", 
    nameKo: "영미권", 
    flag: "🌎", 
    facebook: "https://www.facebook.com/gmeremittanceofficial",
    contacts: [
      { label: "Remittance", phone: "1811-2964" },
      { label: "Remittance", phone: "010-9571-6864​" },
    ]  
  },
];

export default function SocialChannelsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div>
      {/* 헤더 섹션 */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-[#191c1f] mb-2">글로벌 소셜 채널</h2>
        <p className="text-base text-gray-500 mb-4">각 국가별 공식 채널에서 GME의 다양한 소식을 만나보세요</p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
          <RiCustomerService2Fill
            className="w-7 h-7 text-[#ed1c24]"
            style={{ animation: "pulse-scale 1.2s ease-in-out infinite" }}
          />
          <span className="text-base font-bold text-[#ed1c24]">38개국</span>
          <span className="text-base font-medium text-lime-600">운영 중</span>
          <style jsx global>{`
            @keyframes pulse-scale {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.1); }
            }
          `}</style>
        </div>
      </div>

      {/* 국가별 소셜 채널 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {countries.map((country) => (
          <div
            key={country.id}
            className={`group rounded-xl px-4 py-3 transition-all duration-300 ${
              expandedId === country.id
                ? "bg-white border border-gray-200 shadow-md"
                : "bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-md"
            }`}
          >
            <div className="flex items-center justify-between">
              {/* 국가 정보 */}
              <div className="flex items-center">
                <h3 className="text-[#191c1f] text-md font-medium">{country.nameKo}</h3>
              </div>

              {/* 소셜 링크 */}
              <div className="flex items-center gap-2">
                {country.contacts && country.contacts.length > 0 && (
                  <button
                    onClick={() => setExpandedId(expandedId === country.id ? null : country.id)}
                    className={`flex items-center justify-center w-9 h-9 rounded-lg border transition-all duration-200 ${
                      expandedId === country.id
                        ? "bg-[#ed1c24] border-[#ed1c24] text-white"
                        : "bg-white border-gray-100 text-[#ed1c24] hover:bg-[#ed1c24] hover:border-[#ed1c24] hover:text-white"
                    }`}
                    title="연락처"
                  >
                    <HiPhone className="w-4 h-4" />
                  </button>
                )}
                {country.facebook && (
                  <a
                    href={country.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#1877f2]/10 text-[#1877f2] hover:bg-[#1877f2] hover:text-white transition-all duration-200"
                    title="Facebook"
                  >
                    <FaFacebook className="w-4 h-4" />
                  </a>
                )}
                {country.tiktok && (
                  <a
                    href={country.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 text-gray-700 hover:bg-black hover:text-white transition-all duration-200"
                    title="TikTok"
                  >
                    <FaTiktok className="w-4 h-4" />
                  </a>
                )}
                {country.instagram && (
                  <a
                    href={country.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#E4405F]/10 text-[#E4405F] hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E4405F] hover:to-[#FCAF45] hover:text-white transition-all duration-200"
                    title="Instagram"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* 연락처 펼침 */}
            {expandedId === country.id && country.contacts && (
              <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
                {country.contacts.map((contact, idx) => (
                  <a
                    key={idx}
                    href={`tel:${contact.phone.replace(/-/g, "")}`}
                    className="flex items-center justify-between text-sm hover:bg-gray-100 rounded-lg px-2 py-2 -mx-2 transition-colors"
                  >
                    <span className="text-gray-500">{contact.label}</span>
                    <span className="font-medium text-[#191c1f]">{contact.phone}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
