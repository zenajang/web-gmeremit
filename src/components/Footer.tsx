"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

interface FooterProps {
  variant?: "full" | "minimal";
}

export default function Footer({ variant = "full" }: FooterProps) {
  const { t } = useTranslation("footer");

  if (variant === "minimal") {
    return (
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 py-7 lg:py-9">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Image src="/images/favicon.png" alt="GME Logo" width={24} height={24} className="w-6 h-6" />
              <span className="text-sm font-semibold text-gray-700">{t("company_name")}</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <Link href="/terms" className="hover:text-primary transition-colors">
                {t("link.terms")}
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                {t("link.privacy")}
              </Link>
              <span className="text-gray-300">|</span>
              <span>{t("copyright")}</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1540px] mx-auto px-4 lg:pt-10 sm:px-6 lg:px-8 py-12 lg:py-6 min-h-[420px] lg:min-h-[320px]">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-4">
          {/* Left Side - Company Info */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <Image src="/images/favicon.png" alt="GME Logo" width={32} height={32} className="w-8 h-8" />
                <span className="typo-feature-title">{t("company_name")}</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Link href="/terms" className="hover:text-primary transition-colors">
                  {t("link.terms")}
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  {t("link.privacy")}
                </Link>
              </div>
            </div>

            {/* Company Details */}
            <div className="space-y-1 text-xs text-gray-600 min-h-[200px] lg:min-h-[100px]">
              <p>{t("info.address")}</p>
              <p>{t("info.fax")}</p>
              <p>{t("info.email_corporate")} | {t("info.email_support")}</p>
              <p>{t("info.phone_foreigner")} / {t("info.phone_korean")} / {t("info.phone_general")}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">{t("copyright")}</p>
          <Link href="/" className="text-xs text-gray-500 hover:text-primary transition-colors">
            {t("company_name")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
