"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

type TabKey = "treatment" | "collection";

const tabs: { key: TabKey; label: string }[] = [
  { key: "treatment", label: "개인정보 처리방침" },
  { key: "collection", label: "개인정보 수집·이용 동의" },
];

export default function PrivacyPolicyPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("treatment");

  return (
    <>
      <Header />
      <main className="pt-[82px] lg:pt-[120px] min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-16 lg:pt-20 pb-8 lg:pb-10 animate-fadeIn">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex justify-center">
              <div className="relative inline-block">
                <div className="absolute -top-6 -left-2 w-20 h-20 bg-gradient-to-br from-[#ed1c24]/20 via-[#ed1c24]/10 to-transparent rounded-2xl" />
                <div className="absolute -top-4 left-0 w-4 h-4 bg-gradient-to-br from-[#ed1c24] to-[#ed1c24]/60 rounded-sm" />

                <h1 className="text-3xl lg:text-5xl font-bold text-[#191c1f] tracking-tight relative z-10">
                  개인정보처리방침
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pt-6 lg:pt-10 pb-16 lg:pb-24 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs - Center aligned */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex flex-wrap gap-2 justify-center">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      activeTab === tab.key
                        ? "bg-[#ed1c24] text-white shadow-lg shadow-[#ed1c24]/30"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-10">
              {activeTab === "treatment" && <TreatmentPolicyContent />}
              {activeTab === "collection" && <CollectionAgreementContent />}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function TreatmentPolicyContent() {
  return (
    <div className="prose prose-gray max-w-none">
      {/* Introduction */}
      <div className="mb-10 p-6 bg-gray-50 rounded-lg space-y-4">
        <p className="text-gray-600 leading-relaxed">
          ㈜글로벌머니익스프레스(이하 회사)는 회원의 개인정보 보호를 위하여 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』 및 『개인정보 보호법』 등 관련법령을 준수하고 있으며 이를 위하여 회사 개인정보 처리방침(이하 개인정보 처리방침)을 제정하고 이를 준수하고 있습니다.
        </p>
        <p className="text-gray-600 leading-relaxed">
          회사는 개인정보 처리방침을 GME Remit어플리케이션 약관에 공개함으로써 고객께서 언제나 용이하게 보실 수 있도록 조치하고 있습니다.
        </p>
        <p className="text-gray-600 leading-relaxed">
          개인정보 처리방침은 관련법령, 지침 및 회사 내부 방침의 변경, 그 밖의 합리적인 사유에 따라 변경될 수 있으며 변경 시 관련법령이 정하는 절차에 따라 변경 이유와 변경내용을 공지하도록 하겠습니다.
        </p>
      </div>

      <div className="space-y-8 text-gray-600">
        {/* Article 1 */}
        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제1조(개인정보의 수집 및 이용 목적)</h3>
          <div className="mt-3 space-y-3">
            <p>1. 홈페이지 회원 가입 및 관리 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별•인증, 회원자격 유지•관리, 본인확인제 시행에 따른 본인확인</p>
            <p>2. 어플리케이션 회원 가입 및 관리 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별•인증, 회원자격 유지•관리, 본인확인제 시행에 따른 본인확인</p>
            <p>3. 재화 또는 서비스 제공 회사의 소액해외송금 서비스 제공 시 이와 관련된 본인인증, 상담 또는 새로운 상거래 신청 시 본인 여부 확인</p>
            <p>4. 이용자의 거래 관계 및 민원사무 처리 등 원활한 의사소통 경로 확보 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락•통지, 처리결과 통보 등 각종 고지•통지, 각종 불편사항 접수 및 분쟁 조정을 위한 기록 보전</p>
            <p>5. 서비스 개선, 신규 서비스 개발 및 마케팅, 서비스 이용 통계 및 설문 서비스 이용현황 통계분석 및 활용, 맞춤 서비스 제공, 서비스 개선 및 신규서비스 개발, 새로운 서비스나 이벤트 등 최신정보 안내, 부정이용 방지, 사고조사 및 보안정책 수립을 위한 자료로 활용</p>
          </div>
        </div>

        {/* Article 2 */}
        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제2조(수집하는 개인정보의 항목및 수집방법)</h3>
          <div className="mt-3 space-y-3">
            <p>1. 홈페이지 회원 가입 및 관리 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별•인증, 회원자격 유지•관리, 본인확인제 시행에 따른 본인확인</p>
            <p>2. 어플리케이션 회원 가입 및 관리 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별•인증, 회원자격 유지•관리, 본인확인제 시행에 따른 본인확인</p>
            <p>3. 재화 또는 서비스 제공 회사의 소액해외송금 서비스 제공 시 이와 관련된 본인인증, 상담 또는 새로운 상거래 신청 시 본인 여부 확인</p>
            <p>4. 이용자의 거래 관계 및 민원사무 처리 등 원활한 의사소통 경로 확보 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락•통지, 처리결과 통보 등 각종 고지•통지, 각종 불편사항 접수 및 분쟁 조정을 위한 기록 보전</p>
            <p>5. 서비스 개선, 신규 서비스 개발 및 마케팅, 서비스 이용 통계 및 설문 서비스 이용현황 통계분석 및 활용, 맞춤 서비스 제공, 서비스 개선 및 신규서비스 개발, 새로운 서비스나 이벤트 등 최신정보 안내, 부정이용 방지, 사고조사 및 보안정책 수립을 위한 자료로 활용</p>
          </div>
        </div>

        {/* Article 3 */}
        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제3조(개인정보의 보유 및 이용 기간)</h3>
          <div className="mt-3 space-y-3">
            <p>고객의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다.</p>
            <p>단, 다음의 경우에 대해서는 명시한 기간 동안 관련 개인정보를 보관합니다.</p>

            <p className="font-medium text-[#191c1f] mt-4">1) 회사의 내부 방침에 의한 정보 보유</p>
            <p>① 부정이용기록 관리를 위하여 탈퇴 후 5년까지 보관</p>
            <p>② 탈퇴 회원 정보의 이력 관리 및 민원처리를 위하여 탈퇴 후 5년까지 보관</p>

            <p className="font-medium text-[#191c1f] mt-4">2) 관련법령에 의한 정보보유 사유</p>
            <p>① 대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)</p>
            <p>② 소비자의 불만 또는 분쟁 처리에 관한 기록: 3년 (전자상거래 등에서의 소비자보호에 관한 법률)</p>
            <p>③ 본인확인에 관한 기록: 5년 (정보통신망 이용촉진 및 정보보호 등에 관한 법률)</p>
            <p>④ 전자금융거래기록: 5년 (전자금융거래법)</p>
          </div>

          <p className="mt-6">각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
          <p className="mt-2">1. 회사가 이용자의 개인정보를 수집하는 경우 그 보유기간은 원칙적으로 회원가입 후 계약기간 및 이용계약의 종료시까지며, 이용계약 종료의 경우 회사는 이용자 개인정보를 즉시 파기하며, 제3자에게 제공된 정보에 대해서도 지체없이 파기하도록 조치합니다. (단, 재가입 유예기간 동안의 재가입 방지 등을 위해 이용계약이 종료한 날로부터 3개월 경과 후에 파기하도록 합니다.) 단, 이용자에게 개인정보 보관기간에 대해 별도의 동의를 얻은 경우, 또는 아래와 같이 법령에서 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게 보관합니다.</p>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">근거법률</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">목적</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">수집항목</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">보유기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">외국환거래법</td>
                  <td className="border border-gray-300 px-4 py-3">거래자료의 보존</td>
                  <td className="border border-gray-300 px-4 py-3">
                    성명, 생년월일, 주소, 국적, 연락처, 내•외국인 여부, 거주자•비거주자 여부, 외국환거래 거래목적, 거래내역, 거래금액, 송금금액, 송금 국가, 수취인 정보
                  </td>
                  <td className="border border-gray-300 px-4 py-3">5년</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">전자금융거래법</td>
                  <td className="border border-gray-300 px-4 py-3">전자금융거래 기록의 보존</td>
                  <td className="border border-gray-300 px-4 py-3">
                    거래계좌 정보, 거래 건별 내역, 고객의 오류정정 요구사실 및 처리결과에 관한 사항, 전자금융거래 관련 자료
                  </td>
                  <td className="border border-gray-300 px-4 py-3">5년</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 변경 내역 */}
        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">개인정보 처리방침 변경 내역</h3>
          <p className="mt-3">2023년 4월 19일 변경</p>
          <p className="mt-3">2018년 8월 16일 시행</p>
        </div>
      </div>
    </div>
  );
}

function CollectionAgreementContent() {
  return (
    <div className="prose prose-gray max-w-none">
      <div className="space-y-8 text-gray-600">
        {/* 개인정보 수집·이용 동의 Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#191c1f] mb-6">1. 개인정보 수집·이용 동의</h2>
          <p className="text-gray-600 mb-6">
            (주)글로벌머니익스프레스와의 금융거래와 관련하여 (주)글로벌머니익스프레스가 고객의 개인정보를 수집·이용하고자 하는 경우에는 「개인정보 보호법」 제15조, 제22조 및 제24조, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제22조에 따라 동의를 얻어야 합니다. 이에 (주)글로벌머니익스프레스가 아래와 같이 고객의 개인정보를 수집·이용하는데 동의합니다.
          </p>

          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold text-[#191c1f]">1. 개인정보의 필수적인 수집·이용에 관한 사항</h3>
              <p className="mt-2 font-medium">1) 개인정보의 수집·이용 목적</p>
              <div className="mt-2 space-y-2 ml-4">
                <p>① 회원 가입 및 관리: 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별•인증, 회원자격 유지•관리, 본인확인제 시행에 따른 본인확인, 금융거래관계의 설정 및 유지, 신청한 서비스 제공</p>
                <p>② 재화 또는 서비스 제공: 소액해외송금 서비스 제공 시 이와 관련된 본인인증, 상담 또는 새로운 상거래 신청 시 본인 여부 확인</p>
                <p>③ 이용자의 거래 관계 및 민원사무 처리 등 원활한 의사소통 경로 확보: 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락•통지, 처리결과 통보 등 각종 고지•통지, 각종 불편사항 접수 및 분쟁 조정을 위한 기록 보전</p>
                <p>④ 서비스 개선, 신규 서비스 개발 및 마케팅, 서비스 이용 통계 및 설문: 서비스 이용현황 통계분석 및 활용, 서비스 개선 및 신규서비스 개발, 새로운 서비스나 이벤트 등 최신정보 안내, 부정이용방지, 사고조사 및 보안정책 수립을 위한 자료로 활용</p>
              </div>

              <p className="mt-4 font-medium">2) 수집하는 개인정보의 항목</p>
              <p className="mt-2 ml-4">② 자동수집 항목 및 수집방법</p>
              <p className="ml-4">– 수집항목: IP주소, MAC주소, 쿠키, 접속기록, 서비스 이용 기록, 불량이용기록, 회원 PC환경(OS, 방화벽, 브라우저, 키보드 타입 등)</p>
              <p className="ml-4">– 수집방법: 서비스 이용 과정에서 이용자에 관한 정보를 정보통신서비스 제공자가 자동화된 방법으로 생성하여 이를 저장(수집)</p>

              <p className="mt-4 font-medium">3) 개인정보의 보유·이용 기간</p>
              <p className="mt-2">글로벌머니익스프레스가 이용자의 개인정보를 수집하는경우 그 보유기간은 원칙적으로 회원가입 후 계약기간 및 이용계약의 종료시까지며, 이용 계약 종료의 경우 (주)글로벌머니익스프레스는 이용자 개인정보를 즉시 파기하며, 제3자에게 제공된 정보에 대해서도 지체없이 파기하도록 조치합니다.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#191c1f]">2. 개인정보 수집 동의 거부의 권리</h3>
              <p className="mt-2">1) 귀하는 위 개인정보의 수집이용에 대한 동의를 거부할 수 있으며, 동의 후에도 언제든지 철회 가능합니다.</p>
              <p className="mt-1">2) 위 개인정보의 수집이용에 동의하지 않을 경우, 서비스 제공이 되지 않는 등의 불이익을 받을 수 있습니다.</p>
            </div>
          </div>
        </div>

        {/* 고유식별정보 수집·이용 동의 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#191c1f] mb-6">2. 고유식별정보 수집·이용 동의</h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold text-[#191c1f]">1. 고유식별정보의 필수적인 수집·이용에 관한 사항</h3>
              <p className="mt-2 font-medium">1) 고유식별정보의 수집·이용 목적</p>
              <div className="mt-2 space-y-2 ml-4">
                <p>① 회원 가입 및 관리: 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별•인증, 회원자격 유지•관리, 본인확인제 시행에 따른 본인확인, 금융거래관계의 설정 및 유지, 신청한 서비스 제공</p>
                <p>② 재화 또는 서비스 제공: 소액해외송금 서비스 제공 시 이와 관련된 본인인증, 상담 또는 새로운 상거래 신청 시 본인 여부 확인</p>
                <p>③ 이용자의 거래 관계 및 민원사무 처리 등 원활한 의사소통 경로 확보: 민원인의 신원확인, 민원사항 확인, 사실조사를 위한 연락•통지, 처리결과 통보 등 각종 고지•통지, 각종 불편사항 접수 및 분쟁 조정을 위한 기록 보전</p>
                <p>④ 서비스 개선, 신규 서비스 개발 및 마케팅, 서비스 이용 통계 및 설문: 서비스 이용현황 통계분석 및 활용, 서비스 개선 및 신규서비스 개발, 새로운 서비스나 이벤트 등 최신정보 안내, 부정이용방지, 사고조사 및 보안정책 수립을 위한 자료로 활용</p>
              </div>
              <p className="mt-4 font-medium">2) 수집하는 고유식별정보의 항목</p>
              <p className="mt-2 ml-4">여권번호, 주민등록번호, 외국인등록번호, 운전면허번호</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[#191c1f]">2. 고유식별정보 수집 동의 거부의 권리</h3>
              <p className="mt-2">1) 귀하는 위 고유식별정보의 수집이용에 대한 동의를 거부할 수 있으며, 동의 후에도 언제든지 철회 가능합니다.</p>
              <p className="mt-1">2) 위 고유식별정보의 수집이용에 동의하지 않을 경우, 서비스 제공이 되지 않는 등의 불이익을 받을 수 있습니다.</p>
            </div>
          </div>
        </div>

        {/* 개인정보 제공 동의 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#191c1f] mb-6">3. 개인정보 제공 동의</h2>
          <p className="text-gray-600 mb-6">
            (주)글로벌머니익스프레스와의 금융거래와 관련하여 (주)글로벌머니익스프레스가 고객으로부터 취득한 개인정보는 「개인정보 보호법」 제17조, 제22조 및 제24조, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제24조의2에 따라 제3자에게 제공할 경우 본인의 사전 동의를 얻어야 하는 정보입니다. 이에 (주)글로벌머니익스프레스가 고객의 개인정보를 아래와 같이 제3자에게 제공하는 것에 대해 동의합니다.
          </p>
          <p className="text-gray-600">1) 거래목적 달성을 위해 개인정보를 제공받는 자 • 이용목적 • 제공 항목 (제4조 참조)</p>
        </div>

        {/* 고유식별정보 제공 동의 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#191c1f] mb-6">4. 고유식별정보 제공 동의</h2>
          <p className="text-gray-600">1) 거래목적 달성을 위해 고유식별정보를 제공받는 자•이용목적•제공 항목 (제4조 참조)</p>
        </div>

        {/* 개인정보처리 업무위탁 안내 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-[#191c1f] mb-6">5. 개인정보처리 업무위탁 안내</h2>
          <p className="text-gray-600 mb-4">
            (주)글로벌머니익스프레스는 고객의 동의 없이 고객의 정보를 외부 업체에 위탁하지 않습니다. 하단의 업체는 고객에게 사전 통지 또는 동의를 얻어 위탁 업무를 대행하고 있습니다. 수탁자(하단의 업체)는 (주)글로벌머니익스프레스로부터 위탁 받은 해당 업무범위를 초과하여 개인정보를 이용하거나 제3자에게 제공하지 않습니다. 향후 수탁자와 위탁 업무가 추가될 경우 고객에게 사전 통지하고 필요한 경우 사전 동의를 받습니다.
          </p>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold text-[#191c1f]">1. 수탁자(위탁받는 자) 및 위탁하는 업무 내용</h3>
              <div className="mt-3 space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p>– 위탁받는 자(수탁자): 미정</p>
                  <p>– 위탁하는 업무의 내용: 고객의 전화상담 응대, 부서 및 직원 안내 등</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p>– 위탁받는 자(수탁자): 금융결제원</p>
                  <p>– 위탁하는 업무의 내용: 고객의 계좌로부터 해외송금 대금 출금이체 서비스 수행</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
