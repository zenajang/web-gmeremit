"use client";

import Image from "next/image";
import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import { ABOUT_US_NAMESPACE } from "@/components/company/about-us/constants";
import type { AboutJourneyYear } from "@/components/company/about-us/types";

interface JourneyYearProps {
  year: AboutJourneyYear;
}

const JourneyYear = ({ year }: JourneyYearProps) => {
  const { t } = useTranslation(ABOUT_US_NAMESPACE);

  return (
    <div className={S.JourneyYearRow}>
      <div className={S.JourneyYearLabel}>{year.year}</div>
      <div>
        {year.events.map((event) => (
          <div
            key={event.id}
            className={event.highlight ? S.JourneyYearEventHighlighted : S.JourneyYearEvent}
          >
            <div
              className={
                event.highlight ? S.JourneyYearEventMonthHighlighted : S.JourneyYearEventMonth
              }
            >
              {event.month}
            </div>
            <div
              className={
                event.highlight ? S.JourneyYearEventTextHighlighted : S.JourneyYearEventText
              }
            >
              {t(`journey.events.${event.id}`)}
            </div>
            {event.images.length > 0 && (
              <div className={S.JourneyYearEventEvidence}>
                {event.images.map((src) => (
                  <Image
                    key={src}
                    className={S.JourneyYearEventEvidenceImage}
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
  );
};

export default JourneyYear;
