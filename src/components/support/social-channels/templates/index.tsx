"use client";

import { useState } from "react";
import {
  CountryChannelCard,
  SocialChannelsHeader,
} from "@/components/support/social-channels/organisms";
import type { OpenPanel, PanelKind } from "@/components/support/social-channels/types";
import { countries } from "@/data/socialChannels";
import * as S from "@/components/support/social-channels/styles";

const SocialChannelsTemplate = () => {
  const [openPanel, setOpenPanel] = useState<OpenPanel | null>(null);

  const isPanelOpen = (id: string, kind: PanelKind) =>
    openPanel?.id === id && openPanel.kind === kind;

  const isContactVisible = (id: string) => isPanelOpen(id, "contact") || isPanelOpen(id, "both");

  const isFacebookVisible = (id: string) => isPanelOpen(id, "facebook") || isPanelOpen(id, "both");

  const togglePanel = (id: string, kind: PanelKind) =>
    setOpenPanel(isPanelOpen(id, kind) ? null : { id, kind });

  return (
    <div>
      <SocialChannelsHeader />

      <div className={S.SocialChannelsGrid}>
        {countries.map((country) => (
          <CountryChannelCard
            key={country.id}
            country={country}
            isContactOpen={isContactVisible(country.id)}
            isFacebookOpen={isFacebookVisible(country.id)}
            isCardOpen={isPanelOpen(country.id, "both")}
            onTogglePanel={(kind) => togglePanel(country.id, kind)}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialChannelsTemplate;
