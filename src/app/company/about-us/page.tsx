"use client";

import Image from "next/image";
import PublicLayout from "@/components/layout/PublicLayout";
import { useTranslation } from "@/hooks/useTranslation";
import {
  aboutGlanceRows,
  aboutJourney,
  aboutMediaLinks,
  aboutPartnerLogos,
  aboutServiceKeys,
  aboutTechKeys,
} from "@/data/aboutUs";
import "./about.css";

const NS = "company-about-us";

export default function AboutUsPage() {
  const { t } = useTranslation(NS);

  return (
    <PublicLayout className="bg-white">
      <div className="about-us-page">
        <div className="eyebrow">{t("hero.eyebrow")}</div>
        <h1>{t("hero.title")}</h1>
        <div className="rule" />
        <p className="lead">{t("hero.lead")}</p>
        <Image
          className="hero"
          src="/images/company/about/gme-team.jpg"
          alt={t("hero.title")}
          width={1600}
          height={900}
          priority
        />

        <section className="section">
          <div className="eyebrow">{t("glance.eyebrow")}</div>
          <h2>{t("glance.title")}</h2>
          <div className="company-info">
            {aboutGlanceRows.map((row) => (
              <div key={row} className="info-row">
                <div className="info-label">{t(`glance.rows.${row}.label`)}</div>
                <div className="info-value">{t(`glance.rows.${row}.value`)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section history-final gme-current-history">
          <div className="eyebrow">{t("journey.eyebrow")}</div>
          <h2>{t("journey.title")}</h2>
          <p className="history-intro">{t("journey.intro")}</p>
          <div className="journey-timeline">
            {aboutJourney.map((year) => (
              <div key={year.year} className="journey-year">
                <div className="journey-year-label">{year.year}</div>
                <div className="journey-events">
                  {year.events.map((event) => (
                    <div
                      key={event.id}
                      className={`journey-event${event.highlight ? " has-evidence" : ""}`}
                    >
                      <div className="journey-month">{event.month}</div>
                      <div className="journey-text">{t(`journey.events.${event.id}`)}</div>
                      {event.images.length > 0 && (
                        <div className="journey-evidence">
                          {event.images.map((src) => (
                            <Image
                              key={src}
                              src={src}
                              alt={t(`journey.events.${event.id}`)}
                              width={620}
                              height={720}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>{t("partners.title")}</h2>
          <div className="partner-logo-grid">
            {aboutPartnerLogos.map((logo) => (
              <article key={logo.src} className="partner-logo-card">
                <div className="partner-logo-box">
                  <Image src={logo.src} alt={logo.alt} width={210} height={92} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>{t("services.title")}</h2>
          <div className="cards services-one-row">
            {aboutServiceKeys.map((key) => (
              <div key={key} className="card">
                <h3>{t(`services.items.${key}`)}</h3>
              </div>
            ))}
          </div>
          <div className="network-line">
            <strong>{t("network.title")}</strong>
            <br />
            {t("network.branches")}
          </div>
        </section>

        <section className="section">
          <h2>{t("tech.title")}</h2>
          <div className="cards">
            {aboutTechKeys.map((key) => (
              <div key={key} className="card">
                <h3>{t(`tech.items.${key}.title`)}</h3>
                <p>{t(`tech.items.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section recognition-media-final">
          <h2>{t("media.title")}</h2>
          <div className="media-title-list">
            {aboutMediaLinks.map((link) => (
              <a
                key={link.id}
                className="media-title-item"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="media-type">{t(`media.items.${link.id}.type`)}</span>
                <span className="media-title">{t(`media.items.${link.id}.title`)}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
