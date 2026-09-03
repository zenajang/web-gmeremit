"use client";

import { usePathname } from "next/navigation";

interface InformationProps {
  sectionTitle: string;
  contentTitle: React.ReactNode;
  description: string;
  footnote: string;
}

const Information = ({ sectionTitle, contentTitle = null, description, footnote }: InformationProps) => {
  const pathname = usePathname();
  const countryName = pathname.split("/").pop();
  
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[#d8202f] font-bold text-[13px] tracking-[0.08em] uppercase">{sectionTitle}</p>
      {contentTitle}
      <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#606060] max-w-[42ch]">
        {description} {countryName}
      </p>
      {footnote && <p className="text-[14px] text-[#8a8a8a]">{footnote}</p>}
    </div>
  );
};

export default Information;