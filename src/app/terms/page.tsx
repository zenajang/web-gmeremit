"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

type TabKey = "legal" | "remittance" | "openbanking" | "electronic" | "gmepay";

const tabs: { key: TabKey; label: string }[] = [
  { key: "legal", label: "Legal Name Confirmation" },
  { key: "remittance", label: "Small Amount Remittance" },
  { key: "openbanking", label: "Open-Banking Service" },
  { key: "electronic", label: "Electronic Finance" },
  { key: "gmepay", label: "GMEPAY" },
];

export default function TermsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("legal");

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20 bg-[#fafbfc] min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#191c1f] to-[#2d3138] text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Please read our terms and conditions carefully before using our services.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    activeTab === tab.key
                      ? "bg-[#ed1c24] text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-10">
              {activeTab === "legal" && <LegalNameContent />}
              {activeTab === "remittance" && <RemittanceContent />}
              {activeTab === "openbanking" && <OpenBankingContent />}
              {activeTab === "electronic" && <ElectronicFinanceContent />}
              {activeTab === "gmepay" && <GMEPayContent />}
            </div>

            {/* Contact Info */}
            <div className="mt-12 bg-white rounded-2xl shadow-sm p-6 lg:p-10">
              <h2 className="text-xl font-bold text-[#191c1f] mb-4">Contact Information</h2>
              <p className="text-gray-600">
                For any further information please contact: GME Online Team, GME Co. Ltd.
              </p>
              <p className="text-gray-600 mt-2">
                325, Jong-ro, Jongno-gu, Seoul, Korea 03104
              </p>
              <p className="text-gray-600">
                Tel. 1588 6864 (Multi-language Support)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function LegalNameContent() {
  return (
    <div className="prose prose-gray max-w-none">
      <h2 className="text-2xl font-bold text-[#191c1f] mb-6">
        Agreement of Legal Name Confirmation for Prohibiting Manipulation of the Law and Illegal Behavior
      </h2>
      <h3 className="text-lg font-semibold text-[#191c1f] mb-4">
        불법 · 탈법 차명거래 금지 실명 확인 동의
      </h3>
      <p className="text-gray-600 leading-relaxed">
        「금융실명거래 및 비밀보장에 관한 법률」 제3조제3항에 따라 불법재산의 은닉, 자금세탁행위, 공중협박자금조달행위 및 강제집행의 면탈, 그 밖의 탈법행위를 목적으로 타인의 실명으로 금융 거래를 하여서는 아니 되며, 이를 위반 시 5년 이하의 징역 또는 5천만 원 이하의 벌금에 처할 수 있습니다.
      </p>
    </div>
  );
}

function RemittanceContent() {
  return (
    <div className="prose prose-gray max-w-none">
      <h2 className="text-2xl font-bold text-[#191c1f] mb-6">
        Terms of Use for Small Amount overseas remittance
      </h2>

      <div className="space-y-6 text-gray-600">
        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제1조(적용범위)</h3>
          <p>이 약관은 ㈜글로벌머니익스프레스(GME)(이하 &apos;회사&apos;라 합니다.)와 &apos;회사가 제공하는「소액해외송금서비스」(이하 &apos;서비스&apos;라 합니다.)를 이용하는 고객&apos;(이하 &apos;고객&apos;이라 합니다.) 사이에 적용됩니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제2조(실명거래)</h3>
          <p>고객은 회사와의 소액해외송금거래시 실명으로 거래하여야 하며, 회사가 실명확인을 위해 고객에게 실명확인증표 등 필요한 자료를 요구할 경우 이에 따르기로 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제3조(송금한도)</h3>
          <p>고객이 본 서비스를 통해 송금할 수 있는 한도는 다음 각 호와 같습니다.</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>건당 지급 및 수령 한도는 각각 미화 5천 달러</li>
            <li>연간 지급 및 수령 누계 한도는 각각 미화 5만 달러</li>
          </ul>
          <p className="mt-2">단, 외국환거래법령상 국내거주 내국인에 한하여 전 업권 연간지급 누계 한도 미화 10만달러</p>
          <p className="mt-2 text-sm">상기 한도는 송금 국가의 법령, 금융기관 정책 및 회사 내부 기준에 따라 국가별·거래유형별로 송금 조건 또는 절차를 달리 적용할 수 있음.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제4조(지정계좌)</h3>
          <p>① 회사는 &apos;소액해외송금업무에 사용할 계좌인 것으로 소액해외송금업 등록(변경등록 포함) 당시 지정한 회사명의의 금융회사개설 계좌&apos;(이하 &apos;지정계좌&apos;라 합니다.)를 통해서만 고객에게 자금을 지급하거나 고객으로부터 자금을 수령할 수 있습니다.</p>
          <p>② 회사는 제1항의 지정계좌에 관한 내용을 회사 홈페이지 등에 게시하고 이를 최신 내용으로 관리하여야 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제5조(수수료)</h3>
          <p>① 회사는 고객으로부터 본 서비스 이용신청을 받은 경우 고객이 부담하는 수수료(이하 &apos;수수료&apos;라 합니다.)에 관한 사항을 환전수수료, 송금수수료, 외국 협력업자 지급수수료 등 세부 구성항목별로 구분하여 그 내역을 고객에게 제공하여야 합니다.</p>
          <p>② 회사는 수수료에 관한 사항을 회사 홈페이지 등에 게시하고 이를 최신 내용으로 관리하여야 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제6조(적용환율)</h3>
          <p>① 회사는 고객으로부터 본 서비스 이용신청을 받은 경우 고객에게 적용할 환율에 관한 사항을 제공하여야 합니다.</p>
          <p>② 회사는 고객에게 적용할 환율에 관한 사항을 회사 홈페이지 등에 게시하고 이를 최신 내용으로 관리하여야 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제7조(지급․수령금액)</h3>
          <p>① 회사는 본 서비스를 신청한 고객이 지정계좌에 입금할 경우 수수료를 차감한 금액을 외화로 환전하여 고객이 요청한 수취인에게 송금처리를 하여야 합니다.</p>
          <p>② 회사는 고객으로부터 본 서비스 이용신청을 받은 경우 고객이 지급‧수령하는 자금의 원화표시 및 외화표시 금액에 관한 사항을 고객에게 제공하여야 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제8조(소요기간)</h3>
          <p>① 회사는 고객으로부터 본 서비스 이용신청을 받은 경우 고객에게 지급 또는 수령에 소요되는 예상 기간에 관한 사항을 제공하여야 한다.</p>
          <p>② 회사는 본 서비스를 이용할 경우 지급 또는 수령에 소요되는 예상 기간에 관한 사항을 회사 홈페이지 등에 게시하고 이를 최신 내용으로 관리하여야 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제9조(송금의 변경․취소)</h3>
          <p>① 고객은 본 서비스를 신청하여 수취인 계좌에 정상 입금되는 등 송금처리가 완료되지 않은 건에 대하여 유선 또는 영업점 방문 등을 통하여 회사에 변경 또는 취소를 신청할 수 있습니다. 단, 수취인 계좌에 정상 입금되는 등 송금처리가 완료된 건에 대해서는 변경 또는 취소를 신청할 수 없습니다.</p>
          <p>② 회사는 고객으로부터 송금신청건에 대한 변경 또는 취소를 요청받은 경우 해당 요청사항을 처리하고 그 결과를 고객에게 통보하여야 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제10조(송금결과의 통보)</h3>
          <p>회사는 수취인 계좌에 정상 입금되는 등 송금처리가 완료된 경우 즉시 그 결과를 고객이 사전에 등록한 연락처 등을 통하여 고객에게 통지하여야 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제11조(손해배상)</h3>
          <p>회사의 책임있는 사유로 인하여 고객에게 손해가 발생한 경우 회사의 손해배상 범위는 민법에서 정하고 있는 통상손해를 포함하고, 특별한 사정으로 인한 손해는 회사가 그 사정을 알았거나 알 수 있었을 때에 한하여 배상책임이 있습니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제12조(환급)</h3>
          <p>① 고객의 귀책사유 없이 고객이 회사에 본 서비스를 신청하여 지정계좌에 입금한 날로부터 15일 이내에 송금처리가 완료되지 않은 경우에는 회사에 환급을 신청할 수 있습니다.</p>
          <p>② 회사는 고객으로부터 제1항의 환급신청을 받은 경우 특별한 사정이 있는 경우를 제외하고는 당초 고객이 지정계좌에 입금한 금액 및 제11조(손해배상) 해당금액 등을 고객에게 지급하여야 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제13조(분쟁처리절차)</h3>
          <p>① 회사는 &apos;소액해외송금업무와 관련하여 고객이 제기하는 정당한 의견이나 불만을 반영하고 고객이 소액해외송금업무와 관련하여 입은 손해를 배상하기 위한 절차&apos;(이하 &apos;분쟁처리절차&apos;)에 관한 사항을 마련하여야 합니다.</p>
          <p>② 회사는 분쟁사항에 대한 접수방법(분쟁처리책임자와 담당자 지정내역 및 그 연락처 포함), 분쟁처리절차(단순불만사항과 손해배상요구사항을 구분하여 마련) 및 분쟁처리결과에 대한 고객통보에 관한 사항(처리기한, 고객통보방식 등) 등을 고객에게 제공하여야 합니다.</p>
          <p>③ 고객은 소액해외송금거래의 처리에 관하여 이의가 있을 때에는 회사의 분쟁처리기구(분쟁처리책임자 및 담당자 등)에 그 해결을 요구할 수 있으며, 회사는 이를 조사하여 제2항의 처리기한 이내에 처리결과를 고객에게 통보하여야 합니다.</p>
          <p>④ 회사는 분쟁처리책임자와 담당자 지정내역 및 그 연락처 등을 회사 홈페이지 등에 게시하고 이를 최신 내용으로 관리하여야 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제14조(거래기록의 보존)</h3>
          <p>회사는 외국환거래법령 등에 따라 고객과의 지급 및 수령거래 기록을 5년간 보관하여야 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제15조(비밀보장의무)</h3>
          <p>① 회사는 &apos;고객의 인적사항, 계좌정보, 회사와의 송금거래 내용 및 실적에 관한 자료 등 소액해외송금업무 수행을 통하여 알게 된 일체의 고객정보&apos;(이하 &apos;고객정보&apos;라 합니다.)에 대하여 관계법령에서 정한 경우를 제외하고는 고객 동의 없이 제3자에게 제공하거나 업무 목적 외에 누설하거나 이용하여서는 아니 됩니다.</p>
          <p>② 회사가 관리소홀 등 회사의 귀책사유로 제1항을 위반하거나 고객정보의 도난 또는 유출이 발생한 경우 회사가 피해고객에게 배상책임이 있습니다. 다만, 회사가 고의 또는 과실이 없음을 증명한 경우에는 그 책임을 면할 수 있습니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제16조(약관의 교부․설명)</h3>
          <p>① 회사는 약관을 정하거나 변경한 경우 인터넷 홈페이지 등을 통하여 공시하여야 하며, 고객과 소액해외송금업무와 관련한 계약을 체결할 때 약관을 명시하여야 합니다.</p>
          <p>② 회사는 고객에게 전자문서의 전송(전자우편을 이용한 전송을 포함합니다.), 모사전송, 우편 또는 직접 교부의 방식으로 약관의 사본을 고객에게 교부하여야 합니다.</p>
          <p>③ 회사는 고객이 약관의 내용에 대한 설명을 요청하는 경우 다음 각 호의 어느 하나의 방법으로 고객에게 약관의 중요내용을 설명하여야 합니다.</p>
          <ul className="list-decimal pl-6 mt-2 space-y-1">
            <li>약관의 중요내용을 고객에게 직접 설명</li>
            <li>약관의 중요내용에 대한 설명을 전자적 장치를 통하여 고객이 알기 쉽게 표시하고 고객으로부터 해당 내용을 충분히 인지하였다는 의사표시를 전자적 장치를 통하여 수령</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제17조(준용규정)</h3>
          <p>이 약관에서 정하지 않은 사항에 대하여는 외국환거래법규 등 관련법규에 따릅니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제18조(관할법원)</h3>
          <p>이 거래와 관련한 분쟁이 발생할 경우 양 당사자의 합의에 의해 해결함을 원칙으로 합니다. 다만 당사자 간에 합의할 수 없거나 합의가 이루어지지 않아 이 거래와 관련하여 소송이 제기되는 경우 관할법원은 민사소송법에서 정하는 바에 따르기로 합니다.</p>
        </div>
      </div>
    </div>
  );
}

function OpenBankingContent() {
  return (
    <div className="prose prose-gray max-w-none">
      <h2 className="text-2xl font-bold text-[#191c1f] mb-6">
        Terms of Use for Open-Banking Service
      </h2>

      <div className="space-y-6 text-gray-600">
        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제1조(목적)</h3>
          <p>본 약관은 (주)글로벌머니익스프레스(이하 &quot;회사&quot; 라 합니다) 가 이용자에게 제공하는 오픈뱅킹서비스(이하 &quot;서비스&quot; 라 합니다)의 이용과 관련하여 회사와 이용자 간의 기본적인 사항을 규정함을 목적으로 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제2조(용어의 정의)</h3>
          <p>① 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
          <ol className="list-decimal pl-6 mt-2 space-y-2">
            <li>&quot;오픈뱅킹서비스&quot;란 오픈뱅킹공동업무를 활용하여 회사가 이용자에게 제공하는 금융거래관련 서비스를 총칭합니다.</li>
            <li>&quot;이용자&quot;란 금융거래를 위하여 본 약관에 의하여 회사와 체결한 계약에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
            <li>&quot;금융거래&quot;란 회사가 제공하는 상품 및 서비스를 고객이 이용하는 행위를 말합니다.</li>
            <li>&quot;지급인&quot;이란 자금을 주는자를 말합니다.</li>
            <li>&quot;수취인&quot;이란 자금을 받는자를 말합니다.</li>
            <li>&quot;신청계좌&quot;란 서비스 이용을 위해 연결하는 계좌로서 오픈뱅킹공동업무 등록이 가능한 은행의 계좌를 말합니다.</li>
            <li>&quot;입금계좌&quot;란 서비스를 이용하여 자금이 입금되는 계좌를 말합니다.</li>
            <li>&quot;계좌이체&quot;라 함은 지급인의 지급지시에 따라 회사가 지급인의 계좌에서 자금을 출금하여 같은 은행 또는 다른 은행의 계좌에 입금하는 것을 말합니다.</li>
            <li>&quot;운영기관&quot;이란 오픈뱅킹 공동업무를 운영·제공하는 사단법인 금융결제원을 말합니다.</li>
            <li>&quot;오픈뱅킹 공동업무&quot;란 회사가 은행과의 별도 제휴 없이 운영기관을 통하여 API형태로 운영·제공하는 업무를 말합니다.</li>
            <li>&quot;모바일기기&quot;란 무선인터넷 및 이동통신망을 이용할 수 있는 휴대폰, 스마트폰, 태블릿 PC등의 기기를 통칭합니다.</li>
            <li>&quot;전용 어플리케이션&quot;이란 서비스이용을 위해 모바일기기에 설치된 회사가 제공하는 어플리케이션을 말합니다.</li>
            <li>&quot;수수료&quot;란 회사의 서비스를 이용하는 과정에서 회사가 정하는 기준에 따라 이용자에게 부과하는 비용을 말합니다.</li>
          </ol>
          <p className="mt-2">② 본 약관에서 별도로 정의하지 아니한 용어는 『전자금융거래법』 등 관계 법령에서 정하는 바에 따르며, 그 외는 일반 상관례에 따릅니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제3조 (약관의 변경)</h3>
          <p>① 회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 전용 어플리케이션 화면 내 또는 홈페이지에 게시하여 제공합니다.</p>
          <p>② 회사는 관계 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있으며, 약관의 변경과 관련된 사항은 『전자금융거래기본약관』의 내용을 준용합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제4조 (약관적용의 우선순위)</h3>
          <p>① 회사는 개별서비스에 적용될 사항의 규정을 위해 개별약관을 사용하거나 이용정책을 구분하여 개별서비스를 운영할 수 있으며, 해당 내용이 본 약관과 상충되는 경우 개별서비스에 대한 개별약관이 우선 적용됩니다.</p>
          <p>② 본 약관에서 정하지 아니한 사항에 대해서는 전자금융거래법 등 관련법령과 전자금융감독규정 등 관련 외규를 우선 적용합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제5조 (이용계약의 체결)</h3>
          <p>① 회사와 이용자 사이의 오픈뱅킹서비스 이용계약(이하 &quot;이용계약&quot;이라 함)은 이용자가 되고자 하는 자(이하 &quot;가입신청자&quot;라 함)가 신청계좌를 정하여 회사가 정한 양식에 따라 가입신청을 하고, 본 약관의 내용에 동의를 하면 회사가 이에 대해 승낙함으로써 체결됩니다.</p>
          <p>② 회사는 가입신청자의 가입신청이 제6조 제3항 각 호의 어느 하나에 해당하는 경우 이를 승낙하지 않을 수 있습니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제6조 (이용계약의 해지)</h3>
          <p>① 이용자는 언제든지 이용계약 해지신청을 할 수 있으며, 회사는 관련 법령, 센터 이용규약등이 정하는 바에 따라 이를 즉시 처리하여야 합니다.</p>
          <p>② 이용계약 해지 이후에 발생하는 불이익은 이용자 본인이 부담합니다.</p>
          <p>③ 회사는 이용자에게 다음 각 호에 해당하는 사유가 발생하거나 확인된 경우 이용계약을 해지할 수 있습니다.</p>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>타인의 정보를 이용해 가입신청을 하는 경우</li>
            <li>허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않는 경우</li>
            <li>이용자가 서비스의 원활한 제공을 방해하거나 시도하는 경우</li>
            <li>다른 이용자의 권리나 정당한 이익을 침해하거나 법령 또는 선량한 풍속 기타 사회질서에 위배되는 행위를 한 경우</li>
            <li>기타 본 약관에 위배되거나 위법 또는 부당한 거래가 확인된 경우</li>
          </ol>
          <p className="mt-2">④ 회사가 이용계약을 해지하는 경우 이용자에게 해지사유를 밝혀 해지의사를 통지하며, 이용자는 이의를 신청할 수 있습니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제7조 (이용자에 대한 통지)</h3>
          <p>① 회사가 이용자에 대한 통지를 하는 경우 SMS, LMS, 이메일, 서면, 앱푸시 등 가용한 수단을 활용하여 통지합니다.</p>
          <p>② 회사는 전체이용자에 대한 통지를 하는 경우 홈페이지, 전용어플리케이션 등에 게시함으로써 제1항의 통지에 갈음할 수 있습니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제8조 (서비스의 제공)</h3>
          <p>① 제5조에 따라 회사가 가입신청자의 이용신청을 승낙함과 동시에 가입신청자는 제2조 1항 10호의 오픈뱅킹공동업무 이용에 동의한 이용자가 되며, 이 때부터 회사는 신청계좌에 대해 본 약관이 정하는 서비스를 제공합니다.</p>
          <p>② 회사는 본 약관이 정한 서비스 외에 추가적인 서비스를 제공하기 위하여 이용자에게 별도의 추가적인 약관 동의, 정보 수집 및 이용 동의 등 절차의 이행을 요청할 수 있으며, 이러한 절차가 완료되지 않는 경우 이용자는 추가적인 서비스의 전부 또는 일부를 이용할 수 없습니다.</p>
          <p>③ 회사는 오픈뱅킹공동업무를 적용하여 제공할 서비스를 정할 수 있습니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제9조 (이체대상 및 이용한도)</h3>
          <p>① 출금이체 및 입금이체를 이용한 서비스의 이체대상은 현금으로 합니다.</p>
          <p>② 출금이체를 이용한 서비스의 이용한도는 운영기관의 이용한도를 따릅니다.</p>
          <p>③ 출금이체에 의한 고객 신청계좌에서의 출금은 회사가 출금요청을 접수한 은행의 예금잔액에 한하여 회사의 청구대로 출금합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제10조 (인증)</h3>
          <p>회사는 서비스의 종류 및 보안수준에 따라 별도로 인증수단을 적용할 수 있습니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제11조(서비스의 중단)</h3>
          <p>① 회사는 다음 각 호의 어느 하나의 경우에는 서비스의 전부 또는 일부를 중단할 수 있습니다.</p>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>운영기관의 서비스 점검시간</li>
            <li>개별서비스 점검, 변경 등 개별서비스 운영에 관한 사항</li>
            <li>정보통신설비의 보수점검, 증설, 교체, 이전 등 시스템 관리업무</li>
            <li>정전, 제반 설비의 장애 또는 이용량의 폭주 등 정상적인 서비스 이용에 지장이 있는 경우</li>
            <li>기타 천재지변, 폭동, 전쟁, 테러, 국가비상사태 등 불가항력적 사유가 있는 경우</li>
            <li>운영기관의 오픈뱅킹 공동업뮤규약 및 시행세칙, 관련 법령, 정책 변화 등 서비스 운영상 상당한 이유가 있는 경우</li>
          </ol>
          <p className="mt-2">② 제1항에 따라 서비스의 제공을 일시적으로 중단하는 경우 회사는 사전에 서비스 중단을 공지합니다. 다만, 불가피하게 사전 공지를 할 수 없는 경우 회사는 이를 사후 공지할 수 있습니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제12조 (서비스의 제한)</h3>
          <p>회사는 다음 각 호의 어느 하나의 경우에는 서비스의 전부 또는 일부를 제한할 수 있습니다.</p>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>압류, 가압류, 가처분 등 법적 지급제한이나 법령 위반 등으로 서비스 제공이 부적합할 경우</li>
            <li>회사 및 센터에 사고신고가 접수된 경우</li>
            <li>회사가 제공하는 서비스 이용방법에 의하지 아니하고 비정상적인 방법으로 서비스를 이용하거나 회사의 시스템에 접근하는 행위</li>
            <li>이용자가 회사의 서비스 운영을 고의로 방해하는 경우</li>
            <li>이용자가 이용계약을 해지하는 경우</li>
            <li>회사가 기타 합리적인 판단에 의해 서비스의 제공을 거부할 필요가 있다고 인정할 경우</li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제13조 (수수료)</h3>
          <p>① 회사는 서비스 이용에 따른 수수료를 부과할 수 있습니다.</p>
          <p>② 회사는 수수료에 관한 사항을 홈페이지나 전용어플리케이션에 별도로 게시합니다.</p>
          <p>③ 회사는 수수료에 관한 사항이 변경될 경우 제3조를 준용합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제14조 (준수사항)</h3>
          <p>① 회사는 서비스가 안전하게 처리될 수 있도록 선량한 관리자로서의 주의를 다하며, 관계법령에서 정한 경우를 제외하고는 고객 동의 없이 이를 제 3자에게 제공하거나 업무 목적 외에 누설 또는 이용하지 않습니다.</p>
          <p>② 이용자는 서비스의 이용과 관련하여 관계 법령, 약관, 세부이용지침, 서비스 이용안내 및 공지사항 등을 준수하여야 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제15조 (손해배상 및 면책)</h3>
          <p>① 회사는 전자금융거래법 및 전자금융거래기본약관 등 개별약관의 책임 및 면책항목을 준용합니다.</p>
          <p>② 회사는 고객의 신청계좌 예금잔액이 출금일 현재 회사의 청구금액보다 부족하거나, 예금의 지급제한, 한도대출의 연체 등의 사유에 해당되는 경우 출금이체 처리를 하지 아니합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제16조 (지식재산권)</h3>
          <p>회사의 오픈뱅킹 서비스와 관련된 일체의 지식재산권은 회사에 속합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제17조 (준거법 및 재판관할)</h3>
          <p>① 본 약관과 관련된 사항에 대하여는 대한민국 법률을 준거법으로 합니다.</p>
          <p>② 본 약관과 관련하여 발생한 분쟁에 대해서는 법령에서 별도로 정하는 경우를 제외하고 민사소송법에서 정하는 바에 따릅니다.</p>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium">개정일: 이 약관은 2019. 10. 30일부터 시행합니다.</p>
        </div>
      </div>
    </div>
  );
}

function ElectronicFinanceContent() {
  return (
    <div className="prose prose-gray max-w-none">
      <h2 className="text-2xl font-bold text-[#191c1f] mb-6">
        Terms of Use for Electronic Finance Transaction
      </h2>

      <div className="space-y-6 text-gray-600">
        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제1조(목적)</h3>
          <p>이 약관은 (주)글로벌머니익스프레스 또는 GME (이하 &quot;회사&quot;라 합니다.)와 회원 사이의 전자 금융거래 서비스에 관한 기본적인 사항을 정함으로써, 거래의 신속하고 효율적인 처리를 도모하고 거래당사자 상호간의 이해관계를 합리적으로 조정하는 것을 목적으로 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제2조(용어의 정의)</h3>
          <p>① 이 약관에서 사용하는 용어의 의미는 다음 각 호와 같습니다.</p>
          <ol className="list-decimal pl-6 mt-2 space-y-2">
            <li>&quot;전자금융거래&quot;라 함은 회사가 전자적 장치를 통하여 제공하는 금융상품 및 서비스를 회원이 전자적 장치를 통하여 비대면•자동화된 방식으로 직접 이용하는 거래를 말합니다.</li>
            <li>&quot;회원&quot;이라 함은 전자금융거래를 위하여 회사와 체결한 계약(이하 &quot;전자금융거래계약&quot;이라 합니다.)에 따라 전자금융거래를 이용하는 고객을 말합니다.</li>
            <li>&quot;지급인&quot;이라 함은 전자금융거래에 의하여 자금이 출금되는 계좌(이하 &quot;출금계좌&quot;라 합니다.)의 명의인을 말합니다.</li>
            <li>&quot;수취인&quot;이라 함은 전자금융거래에 의하여 자금이 입금되는 계좌(이하 &quot;입금계좌&quot;라 합니다.)의 명의인을 말합니다.</li>
            <li>&quot;전자적 장치&quot;라 함은 현금자동지급기, 자동입출금기, 지급용단말기, 컴퓨터, 전화기 그 밖에 전자적 방법으로 전자금융거래정보를 전송하거나 처리하는데 이용되는 장치를 말합니다.</li>
            <li>&quot;접근매체&quot;라 함은 전자금융거래에 있어서 거래지시를 하거나 회원 및 거래내용의 진정성을 확보하기 위하여 사용되는 수단 또는 정보를 말합니다.</li>
            <li>&quot;전자지급수단&quot;이라 함은 전자금융거래법 제2조 제11호에서 정하는 전자적 방법에 따른 지급수단을 말합니다.</li>
            <li>&quot;전자문서&quot;라 함은 「전자거래기본법」 제2조 제1호의 규정에 따라 작성, 송신•수신 또는 저장된 정보를 말합니다.</li>
            <li>&quot;거래지시&quot;라 함은 회원이 전자금융거래계약에 의하여 회사에 개별적인 전자금융거래의 처리를 지시하는 것을 말합니다.</li>
            <li>&quot;오류&quot;라 함은 회원의 고의 또는 과실 없이 전자금융거래가 약관, 전자금융거래계약 또는 회원이 거래지시한 대로 이행되지 아니한 경우를 말합니다.</li>
            <li>&quot;추심이체&quot;라 함은 지급인의 전자적 장치를 통한 추심지시에 따라 회사가 지급인의 출금계좌에서 자금을 출금하여 회사 또는 다른 수취인의 계좌에 입금하는 것을 말합니다.</li>
            <li>&quot;영업일&quot;이라 함은 통상 회사가 영업점에서 정상적인 영업을 하는 날을 말합니다.</li>
          </ol>
          <p className="mt-2">② 이 약관에서 별도로 정하지 아니한 용어는 「전자금융거래법」 및 관계 법령 등에서 정하는 바에 따릅니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제3조(적용되는 거래)</h3>
          <p>이 약관은 회사와 회원 사이에 다음 각 호의 전자적 장치를 이용하여 이루어지는 전자금융거래에 적용됩니다.</p>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>현금자동지급기, 자동입출금기, 지급용단말기에 의한 거래</li>
            <li>컴퓨터에 의한 거래</li>
            <li>전화기에 의한 거래</li>
            <li>기타 전자적 장치에 의한 거래</li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제4조(전자금융거래계약의 체결 및 해지)</h3>
          <p>① 회원이 전자금융거래를 하고자 하는 경우에는 사전에 회사와 별도의 전자금융거래계약을 체결하여야 합니다.</p>
          <p>② 전자금융거래 계약을 해지하고자 하는 경우에는 회원 본인이 전자금융거래에 관한 개별약관에 정한 바에 따라 서면 또는 해당 전자적 장치에 의하여 회사에 해지신청을 하여야 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제5조(접근매체의 발급 및 등록)</h3>
          <p>회사가 접근매체를 발급할 때에는 회원의 신청이 있는 경우에 한하여 본인임을 확인한 후에 발급합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제6조(접근매체의 관리)</h3>
          <p>① 회사는 전자금융거래서비스 제공시 접근매체를 선정하여 회원의 신원, 권한 및 거래지시의 내용 등을 확인합니다.</p>
          <p>② 회사는 회원이 접근매체의 분실 또는 도난 등을 통지하지 않아 발생하는 손해에 대하여 책임지지 않습니다.</p>
          <p>③ 회원은 접근매체를 사용함에 있어서 다른 법률에 특별한 규정이 없는 한 다음 각 호의 행위를 하여서는 아니됩니다.</p>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>접근매체를 양도하거나 양수하는 행위</li>
            <li>대가를 수수•요구 또는 약속하면서 접근매체를 대여받거나 대여하는 행위 또는 보관•전달•유통하는 행위</li>
            <li>범죄에 이용할 목적으로 또는 범죄에 이용될 것을 알면서 접근매체를 대여받거나 대여하는 행위 또는 보관•전달•유통하는 행위</li>
            <li>접근매체를 질권의 목적으로 하는 행위</li>
            <li>제1호부터 제4호까지의 행위를 알선하는 행위</li>
          </ol>
          <p className="mt-2">④ 회원은 자신의 접근매체를 제3자에게 누설 또는 노출하거나 방치하여서는 안되며, 접근매체의 도용이나 위조 또는 변조를 방지하기 위하여 충분한 주의를 기울여야 합니다.</p>
          <p>⑤ 회사는 회원으로부터 접근매체의 분실이나 도난 등의 통지를 받은 때에는 그때부터 제3자가 그 접근매체를 사용함으로 인하여 회원에게 발생한 손해를 배상할 책임이 있습니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제18조(손해배상 및 면책)</h3>
          <p>① 회사는 다음 각 호의 어느 하나에 해당하는 사고로 인하여 회원에게 손해가 발생한 경우에는 그 손해를 배상할 책임을 집니다.</p>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>접근매체의 위조나 변조로 발생한 사고(단, 회사가 접근매체의 발급 주체이거나 사용, 관리 주체인 경우로 한정합니다)</li>
            <li>계약체결 또는 거래지시의 전자적 전송이나 처리 과정에서 발생한 사고</li>
            <li>전자금융거래를 위한 전자적 장치 또는 정보통신망에 침입하여 거짓이나 그 밖의 부정한 방법으로 획득한 접근매체의 이용으로 발생한 사고</li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제25조(비밀보장의무)</h3>
          <p>① 회사는 법령에 정한 경우를 제외하고는 전자금융거래업무를 수행함에 있어서 알게 된 회원의 인적사항 및 계좌, 접근매체 및 전자금융거래의 내용과 실적에 관한 정보 또는 자료를 회원의 동의 없이는 다른 사람에게 제공하거나 누설하거나 업무 목적 외 사용을 하여서는 안 됩니다.</p>
          <p>② 회사의 관리소홀로 인한 회원 관련 정보 도난 및 유출 시에는 회사가 책임을 집니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제29조(준거법)</h3>
          <p>이 약관의 해석•적용에 관하여는 대한민국 법을 적용합니다.</p>
        </div>
      </div>
    </div>
  );
}

function GMEPayContent() {
  return (
    <div className="prose prose-gray max-w-none">
      <h2 className="text-2xl font-bold text-[#191c1f] mb-6">
        Terms and Condition for 지엠이페이(GMEPAY)
      </h2>

      <div className="space-y-6 text-gray-600">
        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제1조(목적)</h3>
          <p>본 약관은 주식회사 글로벌머니익스프레스(이하 &quot;회사&quot;라 합니다)가 제공하는 지엠이페이 서비스의 이용과 관련하여 회사와 회원 사이의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제2조 (용어의 정의)</h3>
          <p>① 본 약관에서 사용하는 용어의 의미는 다음과 같습니다.</p>
          <ol className="list-decimal pl-6 mt-2 space-y-2">
            <li>&apos;지엠이페이 서비스&apos;라 함은 회원이 제휴사와 상품 또는 용역을 거래함에 있어서 회사가 제공하는 결제서비스, 송금서비스, 제휴사의 멤버십서비스, 지엠이포인트서비스, 쿠폰서비스, 인증서비스, 통합조회서비스, 기타 연계서비스 등 회사가 회원에게 제공하는 서비스를 총칭합니다.</li>
            <li>&apos;회원&apos;이라 함은 본 약관에 따라 가입신청에 대하여 회사의 승인을 받고, 회사가 제공하는 지엠이페이 서비스를 이용하는 자를 말합니다.</li>
            <li>&apos;제휴사&apos;라 함은 회사와 계약을 체결하고 지엠이페이 서비스를 이용하여 회원에게 상품 등을 판매하거나 멤버십・지엠이포인트・쿠폰 등의 혜택을 제공하는 사업자를 말합니다.</li>
            <li>&apos;결제방법&apos;이라 함은 회원이 결제서비스를 통하여 전자적 방법으로 상품 등을 구입 및 이용 시 선택한 지불방법을 말합니다.</li>
            <li>&apos;지엠이페이 비밀번호&apos;라 함은 지엠이페이 서비스 이용 시 필요로 하는 인증 수단으로서 회원이 본인임을 사전에 확인하고 스스로 설정하여 회사에 등록한 숫자를 말합니다.</li>
            <li>&apos;지엠이페이머니&apos;라 함은 회원이 회사로부터 부여 받은 회원 계정에 직접 충전하거나, 상품 등의 구매 또는 이벤트 등을 통해 받은 후 결제방법으로 사용할 수 있는 선불전자지급수단을 말합니다.</li>
            <li>&apos;충전&apos;이라 함은 금융결제원 이체서비스나 거래은행의 계좌이체 서비스등을 통하여 회원이 선불전자지급수단에 추가 적립하는 것을 말합니다.</li>
            <li>&apos;송금&apos;이라 함은 회원이 지엠이페이머니를 이용하여 송금 받는 사람에게 일정 범위의 금원을 송금할 수 있는 서비스를 말합니다.</li>
            <li>&apos;지엠이포인트&apos;라 함은 회원이 회사로부터 이벤트 등으로부터 정당하게 부여받거나 구매한 데이터 또는 제휴사에서 상품 등을 구매하거나 이벤트 등에 참여 후 정당하게 적립 받은 후 회사가 지정한 사용처에서 상품 등 구매에 따른 결제 시 사용할 수 있는 가상의 데이터를 말합니다.</li>
            <li>&apos;쿠폰&apos;이라 함은 회사가 발행한 쿠폰과 회원이 제휴사를 통해 상품 등을 구매할 때 제공받을 수 있는 쿠폰을 말하며, 혜택이 전자적 방법으로 저장・기록되어 있는 증표를 말합니다.</li>
          </ol>
          <p className="mt-2">② 본 약관에서 사용하는 용어 중 본 조에서 정하지 아니한 것은 지엠이페이 서비스 웹페이지 안내 및 관계법령에서 정하는 바에 따르며, 그 외에는 일반 상관례에 따릅니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제6조 (지엠이페이 서비스의 종류)</h3>
          <p>회사가 회원에게 제공하는 지엠이페이 서비스의 종류는 다음과 같습니다.</p>
          <ol className="list-decimal pl-6 mt-2 space-y-2">
            <li><strong>결제서비스</strong>: 제휴사가 판매하는 상품 등을 회원이 구입 및 이용할 수 있게 그 대가를 결제할 수 있도록 회사가 제공하는 결제서비스를 총칭합니다.</li>
            <li><strong>송금서비스</strong>: 회원이 지엠이페이머니를 이용하여 송금 받는 사람에게 일정 범위의 금원을 송금할 수 있는 서비스를 말합니다.</li>
            <li><strong>멤버십서비스</strong>: 지엠이페이 서비스를 통해 기 가입된 제휴사 멤버십을 연결하거나 신규가입, 제휴사 멤버십 상태 및 혜택 확인, 혜택 이용 등을 할 수 있는 서비스를 말합니다.</li>
            <li><strong>지엠이포인트서비스</strong>: 회사가 지정한 제휴사에서 상품 등을 구매하거나 이벤트 등에 참여 후 정해진 조건에 따라 지엠이포인트를 지급 받고, 해당 지엠이포인트를 회사가 지정한 제휴사에서 상품 등 결제시 사용할 수 있는 서비스를 말합니다.</li>
            <li><strong>쿠폰서비스</strong>: 회사가 발행한 쿠폰이나 제휴사가 제공한 쿠폰을 회원에게 지급하고, 회원은 지급 받은 쿠폰을 상품 등을 구매 시 사용할 수 있는 서비스를 말합니다.</li>
            <li><strong>통합조회서비스</strong>: 지엠이페이 서비스 이용 내역 및 회원이 동의한 금융 정보를 열람할 수 있는 서비스를 말합니다.</li>
            <li><strong>기타 연계서비스</strong>: 제휴사와 연계하여 제공하는 선불전자지급수단 발행 및 관리업 및 본 조 각 서비스에 부수하거나 연결된 서비스를 말합니다.</li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제10조 (지엠이페이머니 계정, 한도, 충전, 환불, 수수료, 소멸시효, 결제 및 거래 취소)</h3>
          <p>① 지엠이페이머니 계정은 회원이 요청한 회원의 은행 계좌와 연결할 수 있습니다.</p>
          <p>② 회사는 지엠이페이머니의 보유, 충전, 결제, 송금, 받기 등의 한도를 정할 수 있으며, 이에 대한 자세한 내용은 웹페이지에 게시합니다.</p>
          <p>③ 회원은 지엠이페이머니 계정에 연결된 은행 계좌 출금, 다른 회원이 보낸 지엠이페이머니의 받기, 이벤트 및 프로모션 등에서의 무상 지급, 판매자 환불금 적립 등의 방법으로 지엠이페이머니를 충전할 수 있습니다.</p>
          <p>⑩ 지엠이페이머니의 유효기간은 마지막 충전일 또는 사용일로부터 10년입니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제17조 (회원의 의무)</h3>
          <p>① 회원은 상품 등을 구매하기 전에 반드시 상품 등의 상세 내용과 거래의 조건을 정확하게 확인한 후 구매를 하여야 합니다.</p>
          <p>② 회원은 본 약관 및 회사가 지엠이페이 서비스 화면에서 고지하는 내용을 준수하여야 하며, 본 약관 및 고지내용을 위반하거나 이행하지 아니하여 발생하는 손실 및 손해에 대하여 책임을 부담합니다.</p>
          <p>⑤ 회원은 상품 등의 구매 시 결제방법을 사용함에 있어 반드시 본인 명의의 결제수단을 사용하여야 하며, 타인의 결제수단의 임의사용 등을 하여서는 안됩니다.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제18조 (회원의 금지행위)</h3>
          <p>회사는 지엠이페이 서비스의 신뢰성을 제공하고 안전한 지엠이페이 서비스 이용이 이루어 질 수 있도록 아래와 같은 행위를 금지합니다.</p>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>회사가 제공하는 지엠이페이 서비스 이용방법에 의하지 아니하고 비정상적인 방법으로 지엠이페이 서비스를 이용하거나 시스템에 접근하는 행위</li>
            <li>타인의 명의, 휴대폰 정보, 계좌 정보 등을 도용하여 회사가 제공하는 지엠이페이 서비스를 이용하는 행위</li>
            <li>여신전문금융업법 등 법령에 의하여 금지된 방법으로 비정상적인 결제를 하는 행위</li>
            <li>회사가 게시한 정보의 무단 변경 또는 회사가 정한 정보 이외의 정보 등의 송신 또는 게시하는 행위</li>
            <li>회사 및 기타 제3자의 저작권 등 지적재산권에 대한 침해행위</li>
            <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#191c1f]">제24조 (준거법 및 재판관할)</h3>
          <p>① 본 약관과 관련된 사항에 대하여는 대한민국 법률을 준거법으로 합니다.</p>
          <p>② 회사와 회원간 발생한 분쟁에 관한 소송은 민사소송법 상의 관할법원에 제소합니다.</p>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium">부칙(2020.11.14.): 본 약관은 2020년 11월 14일부터 적용됩니다.</p>
        </div>
      </div>
    </div>
  );
}
