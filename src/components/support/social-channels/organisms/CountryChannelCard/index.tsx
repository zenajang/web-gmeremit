"use client";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiPhone } from "react-icons/hi";
import { useTranslation } from "@/hooks/useTranslation";
import {
  ChannelToggleButton,
  ContactPanel,
  FacebookPanel,
} from "@/components/support/social-channels/molecules";
import * as T from "@/components/support/social-channels/molecules/ChannelToggleButton/styles";
import type { PanelKind } from "@/components/support/social-channels/types";
import type { Country } from "@/data/socialChannels";
import * as S from "./styles";

interface CountryChannelCardProps {
  country: Country;
  isContactOpen: boolean;
  isFacebookOpen: boolean;
  isCardOpen: boolean;
  onTogglePanel: (kind: PanelKind) => void;
}

const CountryChannelCard = ({
  country,
  isContactOpen,
  isFacebookOpen,
  isCardOpen,
  onTogglePanel,
}: CountryChannelCardProps) => {
  const { t } = useTranslation();
  const hasContacts = Boolean(country.contacts && country.contacts.length > 0);
  const isExpanded = isContactOpen || isFacebookOpen;

  const toggleCard = () => onTogglePanel("both");

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={toggleCard}
      onKeyDown={(event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        toggleCard();
      }}
      aria-expanded={isCardOpen}
      className={isExpanded ? S.CountryChannelCardExpanded : S.CountryChannelCardCollapsed}
    >
      <div className={isExpanded ? S.CountryChannelCardAccentOn : S.CountryChannelCardAccentOff} />

      <div className={S.CountryChannelCardBody}>
        <div className={S.CountryChannelCardTopRow}>
          <h3 className={S.CountryChannelCardName}>
            {t(`support-social-channels.countries.${country.id}`)}
          </h3>

          <div className={S.CountryChannelCardActions}>
            {hasContacts && (
              <ChannelToggleButton
                isActive={isContactOpen}
                activeClassName={T.ChannelToggleContactActive}
                idleClassName={T.ChannelToggleContactIdle}
                title={t("support-social-channels.contact")}
                icon={<HiPhone className="w-3.5 h-3.5" />}
                onToggle={() => onTogglePanel("contact")}
              />
            )}

            {country.facebook && (
              <ChannelToggleButton
                isActive={isFacebookOpen}
                activeClassName={T.ChannelToggleFacebookActive}
                idleClassName={T.ChannelToggleFacebookIdle}
                title="Facebook"
                icon={<FaFacebook className="w-3.5 h-3.5" />}
                onToggle={() => onTogglePanel("facebook")}
              />
            )}

            {country.instagram && (
              <a
                href={country.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className={T.ChannelToggleInstagramLink}
                title="Instagram"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {hasContacts && <ContactPanel contacts={country.contacts ?? []} isOpen={isContactOpen} />}

        <FacebookPanel
          remitUrl={country.facebook}
          financeUrl={country.financeFacebook}
          isOpen={isFacebookOpen}
        />
      </div>
    </div>
  );
};

export default CountryChannelCard;
