"use client";

import { useState } from "react";
import * as S from "./styles";
import { Backdrop, StepIndicator } from "@/components/support/inquiry/molecules";
import {
  CategorySelector,
  GuidePanel,
  InquiryForm,
  SubmissionComplete,
} from "@/components/support/inquiry/organisms";
import ChannelService from "@/components/channel-talk/ChannelService";
import { useTranslation } from "@/hooks/useTranslation";
import type { InquiryCategory } from "@/components/support/inquiry/types";

const InquiryTemplate = () => {
  const { t, tArray } = useTranslation();
  const [selected, setSelected] = useState<InquiryCategory | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetInquiryFlow = () => {
    setSelected(null);
    setIsSubmitted(false);
    ChannelService.resetPage();
  };

  const openChannelTalk = (chatPage?: string) => {
    if (!chatPage) {
      ChannelService.resetPage();
      ChannelService.showMessenger();
      return;
    }

    ChannelService.setPage(chatPage);
    ChannelService.onChatCreated(() => ChannelService.resetPage());
    ChannelService.showMessenger();
  };

  return (
    <div className={S.InquiryTemplatePage}>
      <Backdrop />

      <section className={S.InquiryTemplateHeroSection}>
        <h1 className={S.InquiryTemplateHeroTitle}>{t("common.services.hero.title")}</h1>
        <p className={S.InquiryTemplateHeroDescription}>{t("common.mobile-section.hero.description")}</p>
      </section>

      <div className={S.InquiryTemplateContainer}>
        <div className={S.InquiryTemplateCard}>
          <StepIndicator step={selected ? 2 : 1} onStepBack={resetInquiryFlow} />

          {!selected && <CategorySelector onSelect={setSelected} />}

          {selected?.kind === "chat" && (
            <GuidePanel
              title={t("common.services.chat.title")}
              description={t("support-inquiry.chat.description")}
              items={tArray("support-inquiry.chat.items")}
              actionLabel={t("support-inquiry.chat.action")}
              onAction={() => openChannelTalk(selected.chatPage)}
              onReset={resetInquiryFlow}
            />
          )}

          {selected?.kind === "ext" && (
            <GuidePanel
              title={t("common.services.external.title", { site: selected.site })}
              description={t("support-inquiry.external.description", { site: selected.site })}
              items={tArray(`support-inquiry.categories.${selected.no}.items`)}
              actionLabel={t("support-inquiry.external.action")}
              onAction={() => window.open(selected.url, "_blank", "noopener,noreferrer")}
              onReset={resetInquiryFlow}
            />
          )}

          {selected?.kind === "mail" && !isSubmitted && (
            <InquiryForm
              category={selected}
              onSubmitted={() => setIsSubmitted(true)}
              onReset={resetInquiryFlow}
            />
          )}

          {isSubmitted && <SubmissionComplete onReset={resetInquiryFlow} />}
        </div>
      </div>
    </div>
  );
};

export default InquiryTemplate;
