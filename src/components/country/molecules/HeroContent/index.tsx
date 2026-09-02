import CommonButton from "@/components/ui/CommonButton";

interface HeroContentProps {
  countryUppercase: string;
}

const HeroContent = ({ countryUppercase }: HeroContentProps) => {
  return (
    <div className="relative z-2 w-full mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10 pt-8 pb-6 sm:pt-16 sm:pb-12 lg:pt-24 lg:pb-24">
      <div className="flex flex-col gap-3 sm:gap-4 max-w-[250px] sm:max-w-[410px] lg:max-w-[560px]">
        <p className="text-primary font-bold text-[13px] tracking-[0.08em]">GME {countryUppercase}</p>
        <h1 className="text-white text-[26px] sm:text-[42px] lg:text-[56px] font-extrabold leading-[1.1] text-shadow-[0_2px_16px_rgba(0,0,0,0.35)]">
          Send money home.<br />
          Stay connected.<br />
          Spend with ease.
        </h1>
        <p className="text-white/92 text-[14px] sm:text-[18px] leading-[1.6] max-w-[46ch] text-shadow-[0_1px_10px_rgba(0,0,0,0.3)]">Trusted services for Filipinos living in Korea</p>
        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3 mt-2">
          <CommonButton
            as="link"
            href="/services/remittance"
            type="button"
            className="w-full sm:w-auto flex items-center justify-center font-semibold cursor-pointer px-7 py-3 sm:py-3.5 text-[16px] rounded-full bg-primary text-white shadow-[0_8px_24px_rgba(237,28,36,0.3)] hover:bg-[#c11a28]"
          >
            Send Money Now
          </CommonButton>
          <CommonButton
            as="link"
            href="/#app-download"
            type="button"
            className="w-full sm:w-auto flex items-center justify-center font-semibold cursor-pointer px-[27px] py-3 sm:py-[13px] text-[16px] rounded-full border-2 border-white text-white bg-white/14 backdrop-blur-sm"
          >
            Get Started
          </CommonButton>
        </div>
      </div>
    </div>
  )
}

export default HeroContent;