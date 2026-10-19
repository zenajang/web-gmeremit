"use client";

import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import {
  Benefits,
  CareersCta,
  CareersHeader,
  StaffStories,
  StaffStoryModal,
  WhyGme,
} from "@/components/company/careers/organisms";
import type { StaffStory } from "@/components/company/careers/types";

const CareersTemplate = () => {
  const [selectedStory, setSelectedStory] = useState<StaffStory | null>(null);

  useLenis();

  return (
    <>
      <CareersHeader />
      <WhyGme />
      <Benefits />
      <StaffStories onSelectStory={setSelectedStory} />
      {selectedStory && (
        <StaffStoryModal story={selectedStory} onClose={() => setSelectedStory(null)} />
      )}
      <CareersCta />
    </>
  );
};

export default CareersTemplate;
