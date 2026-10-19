"use client";

import Image from "next/image";
import * as S from "./styles";
import { CareersCardBox } from "@/components/company/careers/styles";
import type { StaffStory } from "@/components/company/careers/types";

interface StaffStoryCardProps {
  story: StaffStory;
  onSelect: (story: StaffStory) => void;
}

const StaffStoryCard = ({ story, onSelect }: StaffStoryCardProps) => {
  return (
    <div className={CareersCardBox}>
      <div className={S.StaffStoryCardHead}>
        <div className={S.StaffStoryCardAvatar}>
          <Image
            src={story.image}
            alt={story.name}
            width={56}
            height={56}
            className={S.StaffStoryCardAvatarImage}
          />
        </div>
        <div>
          <p className={S.StaffStoryCardName}>{story.name}</p>
          <p className={S.StaffStoryCardPosition}>{story.position}</p>
        </div>
      </div>
      <div className={S.StaffStoryCardQuoteBox}>
        <p className={S.StaffStoryCardQuote}>{story.quote}</p>
        <div className={S.StaffStoryCardQuoteFade} />
      </div>
      <button
        onClick={() => onSelect(story)}
        aria-label={`${story.name} 후기 더 보기`}
        className={S.StaffStoryCardMoreButton}
      >
        <span className={S.StaffStoryCardMoreIconBox}>
          <svg
            className={S.StaffStoryCardMoreIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default StaffStoryCard;
