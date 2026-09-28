"use client";

import { useState } from "react";
import { Backdrop, StepIndicator } from "../molecules";
import { CategorySelector, GuidePanel, InquiryForm, SubmissionComplete } from "../organisms";
import { CHAT_GUIDE } from "../constants";
import ChannelService from "@/components/channel-talk/ChannelService";
import type { InquiryCategory } from "../types";

const InquiryTemplate = () => {
  const [selected, setSelected] = useState<InquiryCategory | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const reset = () => {
    setSelected(null);
    setIsSubmitted(false);
    ChannelService.resetPage();
  };

  const openChat = (chatPage?: string) => {
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
    <div className="relative overflow-x-clip bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Backdrop />

      <section className="relative z-10 px-4 pt-10 pb-6 text-center lg:pt-20 lg:pb-10">
        <h1 className="typo-page-title">무엇을 도와드릴까요</h1>
        <p className="mt-3 text-sm text-gray-700 lg:text-lg">
          문의 유형을 선택하시면 담당 창구로 안내해 드립니다.
        </p>
      </section>

      <div className="relative z-10 mx-auto max-w-[940px] px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
        <div className="rounded-xl border border-gray-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm sm:p-8">
          <StepIndicator step={selected ? 2 : 1} onStepBack={reset} />

          {!selected && <CategorySelector onSelect={setSelected} />}

          {selected?.kind === "chat" && (
            <GuidePanel
              title={CHAT_GUIDE.title}
              description={CHAT_GUIDE.description}
              items={CHAT_GUIDE.items}
              actionLabel="채팅 상담 시작하기"
              onAction={() => openChat(selected.chatPage)}
              onReset={reset}
            />
          )}

          {selected?.kind === "ext" && (
            <GuidePanel
              title={`${selected.site} 로 이동합니다`}
              description={`해당 문의는 ${selected.site} 홈페이지에서 접수됩니다.`}
              items={selected.items}
              actionLabel="문의 페이지로 이동"
              onAction={() => window.open(selected.url, "_blank", "noopener,noreferrer")}
              onReset={reset}
            />
          )}

          {selected?.kind === "mail" && !isSubmitted && (
            <InquiryForm category={selected} onSubmitted={() => setIsSubmitted(true)} onReset={reset} />
          )}

          {isSubmitted && <SubmissionComplete onReset={reset} />}
        </div>
      </div>
    </div>
  );
};

export default InquiryTemplate;
