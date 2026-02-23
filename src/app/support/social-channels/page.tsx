"use client";

import { useState } from "react";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useTranslation } from "@/hooks/useTranslation";

interface Contact {
  label: string;
  phone: string;
}

interface Country {
  id: string;
  facebook?: string;
  tiktok?: string;
  instagram?: string;
  contacts?: Contact[];
}

const countries: Country[] = [
  { id: "korea", facebook: "https://www.facebook.com/GMEKorea/", tiktok: "https://www.tiktok.com/@GMEKorea",
    contacts: [{ label: "Remittance", phone: "1811-2961" }, { label: "Remittance", phone: "010-6551-6864" }] },
  { id: "indonesia", facebook: "https://www.facebook.com/gmeindonesia/", tiktok: "https://www.tiktok.com/@gmeindonesia",
    contacts: [{ label: "Remittance", phone: "1811-2945" }, { label: "Loan", phone: "010-3017-6864" }] },
  { id: "mongolia", facebook: "https://www.facebook.com/gmemongolia/", tiktok: "https://www.tiktok.com/@gmemongolia",
    contacts: [{ label: "Remittance", phone: "1811-2946" }, { label: "Loan", phone: "010-2973-6864" }] },
  { id: "cambodia", facebook: "https://www.facebook.com/gmecambodia/", tiktok: "https://www.tiktok.com/@gmecambodia",
    contacts: [{ label: "Remittance", phone: "1811-2948" }, { label: "Loan", phone: "010-3077-6864" }] },
  { id: "bangladesh", facebook: "https://www.facebook.com/gmebangladesh/", tiktok: "https://www.tiktok.com/@gmebangladesh",
    contacts: [{ label: "Remittance", phone: "1811-2943" }, { label: "Loan", phone: "010-9932-6864" }] },
  { id: "thailand", facebook: "https://www.facebook.com/gmethailand/", tiktok: "https://www.tiktok.com/@gmeremittancethailand",
    contacts: [{ label: "Remittance", phone: "1811-2941" }, { label: "Loan", phone: "010-9928-6864" }] },
  { id: "pakistan", facebook: "https://www.facebook.com/gmepakistan/", tiktok: "https://www.tiktok.com/@gmepakistan",
    contacts: [{ label: "Remittance", phone: "010-2760-6864" }, { label: "Loan", phone: "010-2760-6864" }] },
  { id: "china", facebook: "https://www.facebook.com/GMERemittanceChina#", tiktok: "https://www.tiktok.com/@gmeremittance_china",
    contacts: [{ label: "Remittance", phone: "1811-2907" }] },
  { id: "japan", facebook: "https://www.facebook.com/GMERemittanceChina#", instagram: "https://www.instagram.com/gmejapan/?hl=ja",
    contacts: [{ label: "Remittance", phone: "1811-2969" }] },
  { id: "nepal", facebook: "https://www.facebook.com/gmenepal/",
    contacts: [{ label: "Remittance", phone: "1811-2934" }, { label: "Loan", phone: "010-6584-6864" }] },
  { id: "srilanka", facebook: "https://www.facebook.com/gmeremitsrilanka/",
    contacts: [{ label: "Remittance", phone: "1811-2935" }, { label: "Loan", phone: "010-2965-6864" }] },
  { id: "philippines", facebook: "https://www.facebook.com/gmephilippines/",
    contacts: [{ label: "Remittance", phone: "1811-2936" }, { label: "Loan", phone: "010-2970-6864" }] },
  { id: "india", facebook: "https://www.facebook.com/gmeremitindia/",
    contacts: [{ label: "Remittance", phone: "1811-2905" }, { label: "Loan", phone: "1811-2905" }] },
  { id: "myanmar", facebook: "https://www.facebook.com/gmemyanmar#",
    contacts: [{ label: "Remittance", phone: "1811-2938" }, { label: "Loan", phone: "010-2976-6864" }] },
  { id: "vietnam", facebook: "https://www.facebook.com/gmevietnam/",
    contacts: [{ label: "Remittance", phone: "1811-2937" }, { label: "Loan", phone: "010-2930-6864" }] },
  { id: "uzbekistan-cis", facebook: "https://www.facebook.com/gmeuzbekistan/",
    contacts: [{ label: "Remittance", phone: "1811-2927" }, { label: "Loan", phone: "010-2968-6864" }] },
  { id: "african-region", facebook: "https://www.facebook.com/gmeafrica/",
    contacts: [{ label: "Remittance", phone: "1811-2904" }, { label: "Remittance", phone: "010-2989-6864" }] },
  { id: "western", facebook: "https://www.facebook.com/gmeremittanceofficial",
    contacts: [{ label: "Remittance", phone: "1811-2964" }, { label: "Remittance", phone: "010-9571-6864" }] },
];

export default function SocialChannelsPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { t } = useTranslation("support.social_channels");

  return (
    <div>
      {/* 헤더 섹션 */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 rounded-full mb-5">
          <RiCustomerService2Fill className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">
            {t("countries_count")} {t("operating")}
          </span>
        </div>
        <h2 className="typo-heading mb-3">
          {t("title")}
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">{t("description")}</p>
      </div>

      {/* 국가별 소셜 채널 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
        {countries.map((country) => {
          const isExpanded = expandedId === country.id;

          return (
            <div
              key={country.id}
              className={`relative rounded-2xl transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? "bg-white shadow-lg shadow-black/[0.06] ring-1 ring-gray-200"
                  : "bg-gray-50/80 hover:bg-white hover:shadow-lg hover:shadow-black/[0.04] hover:ring-1 hover:ring-gray-100"
              }`}
            >
              {/* 왼쪽 악센트 바 */}
              <div
                className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-300 ${
                  isExpanded
                    ? "bg-primary opacity-100"
                    : "bg-primary opacity-0"
                }`}
              />

              <div className="p-5">
                <div className="flex items-center justify-between">
                  {/* 국가명 */}
                  <h3 className="text-[15px] font-semibold text-dark">
                    {t(`countries.${country.id}`)}
                  </h3>

                  {/* 소셜 링크 + 연락처 버튼 */}
                  <div className="flex items-center gap-1.5">
                    {country.contacts && country.contacts.length > 0 && (
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : country.id)
                        }
                        className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 cursor-pointer ${
                          isExpanded
                            ? "bg-primary text-white shadow-md shadow-primary/25"
                            : "bg-white text-primary ring-1 ring-gray-200 hover:bg-primary hover:text-white hover:ring-primary hover:shadow-md hover:shadow-primary/25"
                        }`}
                        title={t("contact")}
                      >
                        <HiPhone className="w-3.5 h-3.5" />
                      </button>
                    )}
                    {country.facebook && (
                      <a
                        href={country.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-white ring-1 ring-gray-200 text-[#1877f2] hover:bg-[#1877f2] hover:text-white hover:ring-[#1877f2] hover:shadow-md hover:shadow-[#1877f2]/25 transition-all duration-200"
                        title="Facebook"
                      >
                        <FaFacebook className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {country.tiktok && (
                      <a
                        href={country.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-white ring-1 ring-gray-200 text-gray-700 hover:bg-black hover:text-white hover:ring-black hover:shadow-md hover:shadow-black/20 transition-all duration-200"
                        title="TikTok"
                      >
                        <FaTiktok className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {country.instagram && (
                      <a
                        href={country.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-white ring-1 ring-gray-200 text-[#E4405F] hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E4405F] hover:to-[#FCAF45] hover:text-white hover:ring-[#E4405F] hover:shadow-md hover:shadow-[#E4405F]/25 transition-all duration-200"
                        title="Instagram"
                      >
                        <FaInstagram className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* 연락처 펼침 - 부드러운 애니메이션 */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 border-t border-gray-100 space-y-1">
                      {country.contacts?.map((contact, idx) => (
                        <a
                          key={idx}
                          className="flex items-center justify-between text-sm rounded-xl px-3 py-2.5 hover:bg-primary/[0.04] transition-colors group"
                        >
                          <span className="text-gray-400 text-xs font-medium tracking-wide uppercase">
                            {contact.label}
                          </span>
                          <span className="font-semibold text-dark group-hover:text-primary">
                            {contact.phone}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
