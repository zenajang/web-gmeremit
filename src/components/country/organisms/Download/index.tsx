import Link from "next/link";

const Download = () => {
  const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.gmeremit.online.gmeremittance_native";
  const appStoreUrl = "https://apps.apple.com/us/app/gme-remit-money-transfer/id1439161261?l=ko";
  return (
    <section className="bg-[#d8202f] py-8 sm:py-12 px-8 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-8">
      <h1 className="text-[24px] sm:text-[32px] font-extrabold text-white tracking-[0.01em]">Download The GME App</h1>
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <Link href={googlePlayUrl} target="_blank" className="flex-1 sm:flex-none text-center py-[13px] px-[26px] bg-white rounded-full text-[#181818] font-semibold text-[15px]">Google Play</Link>
        <Link href={appStoreUrl} target="_blank" className="flex-1 sm:flex-none text-center py-[13px] px-[26px] bg-white rounded-full text-[#181818] font-semibold text-[15px]">Apple App Store</Link>
      </div>
    </section>
  )
}

export default Download;