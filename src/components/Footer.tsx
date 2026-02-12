"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1540px] mx-auto px-4 lg:pt-10 sm:px-6 lg:px-8 py-12 lg:py-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
          {/* Left Side - Company Info */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <img src="/images/favicon.png" alt="GME Logo" className="w-8 h-8" />
                <span className="text-xl font-bold text-[#191c1f]">{t("company_name")}</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Link href="/" className="hover:text-[#ed1c24] transition-colors">
                  {t("link.company_intro")}
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/terms" className="hover:text-[#ed1c24] transition-colors">
                  {t("link.terms")}
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/privacy" className="hover:text-[#ed1c24] transition-colors">
                  {t("link.privacy")}
                </Link>
              </div>
            </div>

            {/* Company Details */}
            <div className="space-y-1 text-xs text-gray-600">
              <p>{t("info.address")}</p>
              <p>{t("info.fax")}</p>
              <p>{t("info.email_corporate")} | {t("info.email_support")}</p>
              <p>{t("info.phone_foreigner")} / {t("info.phone_korean")} / {t("info.phone_general")}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">{t("copyright")}</p>
          <Link href="/" className="text-xs text-gray-500 hover:text-[#ed1c24] transition-colors">
            {t("company_name")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
