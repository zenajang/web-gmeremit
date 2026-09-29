"use client";

import { useState } from "react";
import * as S from "./styles";
import { Backdrop, StepIndicator } from "@/components/support/inquiry/molecules";
import { CategorySelector, GuidePanel, InquiryForm, SubmissionComplete } from "@/components/support/inquiry/organisms";
import { CHAT_GUIDE } from "@/components/support/inquiry/constants";
import ChannelService from "@/components/channel-talk/ChannelService";
import type { InquiryCategory } from "@/components/support/inquiry/types";

const InquiryTemplate = () => {
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
        <h1 className={S.InquiryTemplateHeroTitle}>무엇을 도와드릴까요</h1>
        <p className={S.InquiryTemplateHeroDescription}>문의 유형을 선택하시면 담당 창구로 안내해 드립니다.</p>
      </section>

      <div className={S.InquiryTemplateContainer}>
        <div className={S.InquiryTemplateCard}>
          <StepIndicator step={selected ? 2 : 1} onStepBack={resetInquiryFlow} />

          {!selected && <CategorySelector onSelect={setSelected} />}

          {selected?.kind === "chat" && (
            <GuidePanel
              title={CHAT_GUIDE.title}
              description={CHAT_GUIDE.description}
              items={CHAT_GUIDE.items}
              actionLabel="채팅 상담 시작하기"
              onAction={() => openChannelTalk(selected.chatPage)}
              onReset={resetInquiryFlow}
            />
          )}

          {selected?.kind === "ext" && (
            <GuidePanel
              title={`${selected.site} 로 이동합니다`}
              description={`해당 문의는 ${selected.site} 홈페이지에서 접수됩니다.`}
              items={selected.items}
              actionLabel="문의 페이지로 이동"
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
