import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
          {/* Left Side - Company Info */}
          <div>
            {/* Logo */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <img src="/images/favicon.png" alt="GME Logo" className="w-8 h-8" />
                <span className="text-xl font-bold text-[#191c1f]">글로벌머니익스프레스</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Link href="/" className="hover:text-[#ed1c24] transition-colors">
                  회사소개
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/terms" className="hover:text-[#ed1c24] transition-colors">
                  이용약관
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/privacy" className="hover:text-[#ed1c24] transition-colors">
                  개인정보처리방침
                </Link>
              </div>
            </div>

            {/* Company Details */}
            <div className="space-y-1 text-xs text-gray-600">
              <p>주소 : 서울시 영등포구 영등포로150 생각공장당산 B동 901~911호 </p>
              <p>팩스 : (+82) 2 3674 5559</p>
              <p> 이메일 : Corporate: corporate@gmeremit.com | Queries: support@gmeremit.com </p>
              <p>전화번호 : (+82) 02-1588-6864 (Foreigner) / 02-1811-2961 (Korean, 송금 서비스 관련 문의) / 02-3673-5559 (송금 서비스 외 회사 문의) </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 글로벌머니익스프레스, All rights reserved.</p>
          <Link href="/" className="text-xs text-gray-500 hover:text-[#ed1c24] transition-colors">
            글로벌머니익스프레스
          </Link>
        </div>
      </div>
    </footer>
  );
}
