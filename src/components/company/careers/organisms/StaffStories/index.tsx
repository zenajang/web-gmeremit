"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { StaffStoryCard } from "@/components/company/careers/molecules";
import {
  CareersCardGrid,
  CareersContainer,
  CareersSectionMuted,
  CareersSectionSubtitle,
  CareersSectionTitleWithSubtitle,
} from "@/components/company/careers/styles";
import { staffStories } from "@/components/company/careers/constants";
import type { StaffStory } from "@/components/company/careers/types";

interface StaffStoriesProps {
  onSelectStory: (story: StaffStory) => void;
}

const StaffStories = ({ onSelectStory }: StaffStoriesProps) => {
  const { t } = useTranslation();

  return (
    <section className={CareersSectionMuted}>
      <div className={CareersContainer}>
        <h2 className={CareersSectionTitleWithSubtitle}>
          {t("company-careers.staff_stories.title")}
        </h2>
        <p className={CareersSectionSubtitle}>{t("company-careers.staff_stories.subtitle")}</p>

        <div className={CareersCardGrid}>
          {staffStories.map((story) => (
            <StaffStoryCard key={story.name} story={story} onSelect={onSelectStory} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffStories;
