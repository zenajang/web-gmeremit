"use client";

import Image from "next/image";
import * as S from "./styles";
import type { StaffStory } from "@/components/company/careers/types";

interface StaffStoryModalProps {
  story: StaffStory;
  onClose: () => void;
}

const StaffStoryModal = ({ story, onClose }: StaffStoryModalProps) => {
  return (
    <div className={S.StaffStoryModalBackdrop} onClick={onClose}>
      <div className={S.StaffStoryModalPanel} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={S.StaffStoryModalCloseButton}>
          <svg
            className={S.StaffStoryModalCloseIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className={S.StaffStoryModalHead}>
          <div className={S.StaffStoryModalAvatar}>
            <Image
              src={story.image}
              alt={story.name}
              width={80}
              height={80}
              className={S.StaffStoryModalAvatarImage}
            />
          </div>
          <p className={S.StaffStoryModalName}>{story.name}</p>
          <p className={S.StaffStoryModalPosition}>{story.position}</p>
        </div>

        <div className={S.StaffStoryModalBody}>
          <div className={S.StaffStoryModalQuoteBox}>
            <span className={S.StaffStoryModalQuoteMarkOpen} aria-hidden="true">
              &ldquo;
            </span>
            <p className={S.StaffStoryModalQuote}>{story.quote}</p>
            <span className={S.StaffStoryModalQuoteMarkClose} aria-hidden="true">
              &ldquo;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffStoryModal;
