"use client";

import { useState } from "react";
import * as S from "./styles";
import { Backdrop, StepIndicator } from "../molecules";
import { CategorySelector, GuidePanel, InquiryForm, SubmissionComplete } from "../organisms";
import { CHAT_GUIDE } from "../constants";
import ChannelService from "@/components/channel-talk/ChannelService";
import type { InquiryCategory } from "../types";

const InquiryTemplate = () => {
  const [selected, setSelected] = useState<InquiryCategory | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const resetInquiryFlow = () => {
    setSelected(null);
    setIsSubmitted(false);
    // 덮어쓴 페이지를 남겨두면 다음에 새로 시작하는 상담까지 그 창구로 흘러간다
    ChannelService.resetPage();
  };

  /**
   * 채팅 상담을 연다.
   * chatPage 가 있으면 그 주소를 현재 페이지로 알려 해당 창구의 봇이 뜨게 한다.
   *
   * 되돌리는 시점은 대화가 만들어진 뒤다. 그 전에 되돌리면 봇 매칭이 어긋나고,
   * 안 되돌리면 다음에 시작하는 상담까지 그 창구로 흘러간다.
   */
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

          <p className={S.InquiryTemplateNote}>
            ※ 본 화면은 시안입니다. 실제 접수 및 채팅 연동은 개발 반영 후 동작합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InquiryTemplate;
