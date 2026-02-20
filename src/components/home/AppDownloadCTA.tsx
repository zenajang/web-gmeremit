"use client";

import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function AppDownloadCTA() {
  const { t, tArray } = useTranslation("home.app_download");
  return (
    <section id="app-download" className="bg-[var(--surface-0)] py-16 lg:py-24 snap-section">
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[36px] bg-neutral-950 px-6 py-12 sm:px-10 lg:px-16 lg:py-16 text-white shadow-[0_40px_100px_rgba(15,23,42,0.3)]">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center lg:pl-16">
            {/* Left - Text Content */}
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/70">
                {tArray("chips").map((chip) => (
                  <span key={chip} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                    {chip}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm font-semibold text-white/70">{t("subtitle")}</p>
              <h3 className="mt-3 text-4xl sm:text-4xl lg:text-5xl font-bold leading-[1.15]">
                {t("title1")}
                <br />
                {t("title2")}
              </h3>
              <p className="mt-4 max-w-2xl text-white/80">
                {t("description")}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/gme-remit/id1439161261?l=ko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <Image
                    src="/images/home/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={180}
                    height={60}
                    className="h-[60px] w-auto"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.gmeremit.online.gmeremittance_native"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                >
                  <Image
                    src="/images/home/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={302}
                    height={50}
                    className="h-[88px] w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Right - QR Code + Features */}
            <div className="flex flex-col sm:flex-row lg:flex-row gap-6 items-center justify-center lg:justify-end lg:pr-28">
              {/* QR Code Card */}
              <div className="flex-shrink-0 rounded-3xl border border-white/10 bg-white p-5 shadow-2xl">
                <Image
                  src="/images/home/qr_code.png"
                  alt="GME Remit 앱 다운로드 QR 코드"
                  width={220}
                  height={220}
                  className="rounded-2xl"
                />
                <p className="mt-4 text-center text-sm font-medium text-gray-600">
                  {t("qr_scan")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
