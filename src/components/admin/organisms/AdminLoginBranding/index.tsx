import Image from "next/image";
import Link from "next/link";

const AdminLoginBranding = () => {
  return (
    <div className="hidden lg:flex lg:w-[480px] xl:w-[520px] bg-gradient-to-br from-[#191c1f] to-[#2d3139] flex-col justify-between p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/[0.08] rounded-full translate-y-1/3 -translate-x-1/3" />

      <div className="relative z-10">
        <Link href="/" className="inline-block">
          <Image
            src="/images/common/GME-LOGO-HD.png"
            alt="GME Remit"
            width={120}
            height={34}
            className="brightness-0 invert"
          />
        </Link>
        <p className="mt-1.5 text-[12px] text-gray-500 tracking-wider font-medium">관리자 시스템</p>
      </div>

      <div className="relative z-10 space-y-4">
        <h2 className="text-white text-[28px] font-bold leading-tight">
          Beyond Banking,
          <br />
          GME Remittance
        </h2>
        <p className="text-gray-400 text-[15px] leading-relaxed">
          대한민국 No.1 해외송금 서비스
          <br />
          관리자 대시보드
        </p>
      </div>

      <div className="relative z-10 text-[12px] text-gray-600">
        &copy; 2026 GME Remittance. All rights reserved.
      </div>
    </div>
  );
};

export default AdminLoginBranding;
