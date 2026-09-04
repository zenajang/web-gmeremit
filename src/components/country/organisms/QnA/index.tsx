interface QnAProps {
  countryName: string;
}
const QnA = ({ countryName }: QnAProps) => {
  return (
    <section id="QnA" className="bg-[#fafaf9] py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
      <h1 className="text-[26px] sm:text-[32px] lg:text-[40px] font-extrabold leading-[1.15] tracking-[-0.01em] text-[#181818] px-3.5 sm:px-4 lg:px-5">Frequently Asked Questions About GME Remit</h1>
      <p className="text-[16px] lg:text-[18px] text-[#606060] mt-2 mb-8 px-3.5 sm:px-4 lg:px-5">Find answers to common questions about sending money with GME Remit</p>
      <div className="w-full h-[1px] bg-[#e0e0e0]" />
      <div id="QnA-1" className="py-5 px-3.5 sm:py-6 sm:px-4 lg:py-7 lg:px-5 border-b border-[#e0e0e0]">
        <h2 className="text-[15px] lg:text-[17px] font-semibold text-[#181818]">How long does it take to send money with GME Remit?</h2>
        <p className="max-w-[68ch] text-[15px] leading-[1.6] text-[#606060] mt-3 ml-10">GME Remit transfers are typically completed in around 10 seconds, although actual transfer time may vary depending on the receiving country, bank, or payout method.
        </p>
      </div>
      <div id="QnA-2" className="py-5 px-3.5 sm:py-6 sm:px-4 lg:py-7 lg:px-5 border-b border-[#e0e0e0]">
        <h2 className="text-[15px] lg:text-[17px] font-semibold text-[#181818]">Is GME Remit safe to use?</h2>
        <p className="max-w-[68ch] text-[15px] leading-[1.6] text-[#606060] mt-3 ml-10">Yes. GME Remit is a licensed remittance service in Korea and is supervised by the relevant Korean financial authorities. We use secure customer verification and transaction processes to help protect our customers and their transactions.</p>
      </div>
      <div id="QnA-3" className="py-5 px-3.5 sm:py-6 sm:px-4 lg:py-7 lg:px-5 border-b border-[#e0e0e0]">
      <h2 className="text-[15px] lg:text-[17px] font-semibold text-[#181818]">How do I sign up for a GME Remit account?</h2>
        <p className="max-w-[68ch] text-[15px] leading-[1.6] text-[#606060] mt-3 ml-10">Download the GME Remit app, create your account, and complete the required identity verification. Once your registration and verification are completed, you can start using GME Remit services.</p>
      </div>
      <div id="QnA-4" className="py-5 px-3.5 sm:py-6 sm:px-4 lg:py-7 lg:px-5 border-b border-[#e0e0e0]">
      <h2 className="text-[15px] lg:text-[17px] font-semibold text-[#181818]">Which countries can I send money to with GME Remit?</h2>
        <p className="max-w-[68ch] text-[15px] leading-[1.6] text-[#606060] mt-3 ml-10">GME Remit supports international money transfers to many countries worldwide. Available destinations and payout options can be checked directly in the GME Remit app.</p>
      </div>
      <div id="QnA-5" className="py-5 px-3.5 sm:py-6 sm:px-4 lg:py-7 lg:px-5 border-b border-[#e0e0e0]">
        <h2 className="text-[15px] lg:text-[17px] font-semibold text-[#181818]">What if I have a problem with my transfer?</h2>
        <div className="flex flex-col gap-2.5 max-w-[68ch] mt-3 ml-10">
          <p className="text-[15px] leading-[1.6] text-[#606060]">Our customer support team is available from 10:00 to 23:00, Monday to Sunday.</p>
          <p className="text-[15px] leading-[1.6] text-[#606060]">You can contact us by phone at (+82) 02-1588-6864 or through the GME Remit app.</p>
          <p className="text-[15px] leading-[1.6] text-[#606060]">You can also message us through our official GME {countryName} social media channels, including Facebook, Instagram, TikTok, and ChannelTalk.</p>
          <p className="text-[15px] leading-[1.6] text-[#606060]">If you prefer in-person assistance, GME Remit also has branches across Korea where our staff can assist you directly.</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default QnA;