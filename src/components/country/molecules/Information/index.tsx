import CommonButton, { CommonButtonProps } from "@/components/ui/CommonButton";

interface InformationProps {
  sectionTitle: string;
  contentTitle: React.ReactNode;
  description: string;
  footnote?: string;
  benefits?: string[];
  buttonProps?: CommonButtonProps;
}

const Information = ({ sectionTitle, contentTitle = null, description, footnote, benefits, buttonProps }: InformationProps) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[#d8202f] font-bold text-[13px] tracking-[0.08em] uppercase">{sectionTitle}</p>
      {contentTitle}
      <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#606060] max-w-[42ch]">
        {description}
      </p>
      {footnote && <p className="text-[14px] text-[#8a8a8a]">{footnote}</p>}
      {benefits && <div>
        <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[15px] font-semibold text-[#181818]">
          {benefits?.map((benefit, index) => (
            <li key={index} className="before:content-['•'] before:mr-1.5">{benefit}</li>
          ))}
        </ul>
      </div>}
      {buttonProps && <CommonButton {...buttonProps} />}
  </div>
  );
};

export default Information;