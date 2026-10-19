"use client";

import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useTranslation } from "@/hooks/useTranslation";
import { countries } from "@/data/socialChannels";

type PanelKind = "contact" | "facebook" | "both";

interface OpenPanel {
  id: string;
  kind: PanelKind;
}

const SocialChannelsTemplate = () => {
  const [openPanel, setOpenPanel] = useState<OpenPanel | null>(null);
  const { t } = useTranslation();

  const isPanelOpen = (id: string, kind: PanelKind) =>
    openPanel?.id === id && openPanel.kind === kind;

  const isContactVisible = (id: string) => isPanelOpen(id, "contact") || isPanelOpen(id, "both");

  const isFacebookVisible = (id: string) => isPanelOpen(id, "facebook") || isPanelOpen(id, "both");

  const togglePanel = (id: string, kind: PanelKind) =>
    setOpenPanel(isPanelOpen(id, kind) ? null : { id, kind });

  return (
    <div>
      {/* 헤더 섹션 */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 rounded-full mb-5">
          <RiCustomerService2Fill className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">
            {t("support-social-channels.countries_count")} {t("support-social-channels.operating")}
          </span>
        </div>
        <h2 className="typo-heading mb-3">
          {t("support-social-channels.title")}
        </h2>
        <p className="text-gray-500 max-w-md mx-auto">{t("support-social-channels.description")}</p>
      </div>

      {/* 국가별 소셜 채널 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
        {countries.map((country) => {
          const hasContacts = Boolean(country.contacts && country.contacts.length > 0);
          const isContactOpen = isContactVisible(country.id);
          const isFacebookOpen = isFacebookVisible(country.id);
          const isExpanded = isContactOpen || isFacebookOpen;

          return (
            <div
              key={country.id}
              role="button"
              tabIndex={0}
              onClick={() => togglePanel(country.id, "both")}
              onKeyDown={(event) => {
                if (event.key !== "Enter" && event.key !== " ") return;
                event.preventDefault();
                togglePanel(country.id, "both");
              }}
              aria-expanded={isPanelOpen(country.id, "both")}
              className={`relative rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
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
                    {t(`support-social-channels.countries.${country.id}`)}
                  </h3>

                  {/* 연락처 · 소셜 토글 버튼 */}
                  <div className="flex items-center gap-1.5">
                    {hasContacts && (
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          togglePanel(country.id, "contact");
                        }}
                        aria-expanded={isPanelOpen(country.id, "contact")}
                        className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 cursor-pointer ${
                          isContactOpen
                            ? "bg-primary-dark text-white shadow-md shadow-primary/25"
                            : "bg-white text-primary ring-1 ring-gray-200 hover:bg-primary hover:text-white hover:ring-primary hover:shadow-md hover:shadow-primary/25"
                        }`}
                        title={t("support-social-channels.contact")}
                      >
                        <HiPhone className="w-3.5 h-3.5" />
                      </button>
                    )}

                    {country.facebook && (
                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          togglePanel(country.id, "facebook");
                        }}
                        aria-expanded={isPanelOpen(country.id, "facebook")}
                        className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 cursor-pointer ${
                          isFacebookOpen
                            ? "bg-[#1877f2] text-white shadow-md shadow-[#1877f2]/25"
                            : "bg-white text-[#1877f2] ring-1 ring-gray-200 hover:bg-[#1877f2] hover:text-white hover:ring-[#1877f2] hover:shadow-md hover:shadow-[#1877f2]/25"
                        }`}
                        title="Facebook"
                      >
                        <FaFacebook className="w-3.5 h-3.5" />
                      </button>
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

                {/* 연락처 펼침 */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isContactOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 border-t border-gray-100 space-y-1">
                      {country.contacts?.map((contact) => (
                        <a
                          key={`${contact.label}-${contact.phone}`}
                          href={`tel:${contact.phone.replace(/-/g, "")}`}
                          onClick={(event) => event.stopPropagation()}
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

                {/* 페이스북 펼침 */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isFacebookOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 border-t border-gray-100 space-y-1">
                      <a
                        href={country.facebook}
                        onClick={(event) => event.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl px-3 py-2.5 hover:bg-[#1877f2]/[0.06] transition-colors group"
                      >
                        <span className="text-gray-400 text-xs font-medium tracking-wide uppercase group-hover:text-[#1877f2]">
                          Remit
                        </span>
                        <FaFacebook className="w-6 h-6 shrink-0 text-[#1877f2]" />
                      </a>

                      {country.financeFacebook && (
                        <a
                          href={country.financeFacebook}
                          onClick={(event) => event.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between rounded-xl px-3 py-2.5 hover:bg-[#1877f2]/[0.06] transition-colors group"
                      >
                        <span className="text-gray-400 text-xs font-medium tracking-wide uppercase group-hover:text-[#1877f2]">
                          Finance
                        </span>
                        <FaFacebook className="w-6 h-6 shrink-0 text-[#1877f2]" />
                        </a>
                      )}
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

export default SocialChannelsTemplate
