"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20 bg-[#fafbfc] min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#191c1f] to-[#2d3138] text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              개인정보 처리방침
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Content */}
            <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-10">
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
                            <td className="border border-gray-300 px-4 py-3">개인정보보호법</td>
                            <td className="border border-gray-300 px-4 py-3">통계ㆍ학술ㆍ연구 등의 목적을 위해 제공</td>
                            <td className="border border-gray-300 px-4 py-3">비식별화, 익명화 정보</td>
                            <td className="border border-gray-300 px-4 py-3">준영구</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">통신비밀보호법</td>
                            <td className="border border-gray-300 px-4 py-3">수사기관 요청 시 제공</td>
                            <td className="border border-gray-300 px-4 py-3">이용자 식별정보, IP 등 로그기록</td>
                            <td className="border border-gray-300 px-4 py-3">3개월</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3" rowSpan={2}>전자상거래등에서의 소비자보호에 관한 법률</td>
                            <td className="border border-gray-300 px-4 py-3">소비자의 불만/분쟁 처리에 관한 기록</td>
                            <td className="border border-gray-300 px-4 py-3">이용자 식별정보, 불만/분쟁 처리 내용</td>
                            <td className="border border-gray-300 px-4 py-3">3년</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">대금결제 및 재화 등 공급에 관한 기록</td>
                            <td className="border border-gray-300 px-4 py-3">이용자 식별정보, 대금결제 기록</td>
                            <td className="border border-gray-300 px-4 py-3">5년</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">전자금융거래법</td>
                            <td className="border border-gray-300 px-4 py-3">전자금융거래에 관한 기록</td>
                            <td className="border border-gray-300 px-4 py-3">전자금융거래기록</td>
                            <td className="border border-gray-300 px-4 py-3">5년</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">신용정보의 이용 및 보호에 관한 법률</td>
                            <td className="border border-gray-300 px-4 py-3">신용정보의 수집/처리 및 이용</td>
                            <td className="border border-gray-300 px-4 py-3">신용정보의 수집/처리 및 이용</td>
                            <td className="border border-gray-300 px-4 py-3">3년</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="mt-4">2. 회사는 이용자의 관계 법령 위반에 따른 수사ㆍ조사 등이 진행 중인 경우에는 해당 수사ㆍ조사 종료 시까지, 이용자의 서비스 이용에 따른 채권ㆍ채무관계 잔존시에는 해당 채권ㆍ채무관계 정산 시까지 이용자 개인정보를 보유합니다.</p>
                    <p className="mt-2">3. 회사는 1년 동안 회사의 서비스를 이용하지 않은 이용자의 개인정보는 『정보통신망 이용촉진 및 정보보호등에 관한 법률 제29조』에 근거하여 이용자에게 사전통지하고 개인정보를 파기하거나 별도로 분리하여 저장 관리합니다.</p>
                  </div>

                  {/* Article 4 */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#191c1f]">제4조(개인정보의 제3자 제공)</h3>
                    <p className="mt-3">회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.</p>

                    <div className="mt-4 space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p>– 개인정보를 제공받는 자: 한국은행, 금융감독원, 기획재정부, 금융정보분석원 등</p>
                        <p>– 제공받는 자의 개인정보 이용목적: 외국환거래 관리, 감독, 자금세탁 방지</p>
                        <p>– 제공받는 개인정보 항목: 외국환 거래내역(해외송금 내역)</p>
                        <p>– 제공받는 자의 보유•이용기간: 제3조와 같음</p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p>– 개인정보를 제공받는 자: 금융결제원</p>
                        <p>– 제공받는 자의 개인정보 이용목적: 해외송금 대금 출금이체 수행</p>
                        <p>– 제공받는 개인정보 항목: 송금인 관련정보(금융기관명, 성명, 계좌번호, 성별, 생년월일, 휴대폰 번호, 이메일 주소)</p>
                        <p>– 제공받는 자의 보유•이용기간: 제3조와 같음</p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p>– 개인정보를 제공받는 자: 국내 시중은행 및 저축은행</p>
                        <p>– 제공받는 자의 개인정보 이용목적: 해외송금, 가상계좌 공급</p>
                        <p>– 제공받는 개인정보 항목: 송금인 관련정보(금융기관명, 성명, 계좌번호, 주소, 실명번호, 송금금액, 송금일자, 휴대폰 번호), 수취인 관련정보(수취금융기관명, 성명, 계좌번호, 전화번호)</p>
                        <p>– 제공받는 자의 보유•이용기간: 제3조와 같음</p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p>– 개인정보를 제공받는 자: 외국은행 및 외국 송금중개업체</p>
                        <p>– 제공받는 자의 개인정보 이용목적: 해외송금</p>
                        <p>– 제공받는 개인정보 항목: 송금인 관련정보(금융기관명, 성명, 계좌번호, 주소, 실명번호, 송금금액, 송금일자, 휴대폰 번호), 수취인 관련정보(수취금융기관명, 성명, 계좌번호, 전화번호)</p>
                        <p>– 제공받는 자의 보유•이용기간: 제3조와 같음</p>
                      </div>
                    </div>

                    <p className="mt-4 font-medium text-[#191c1f]">제4조의2 (개인정보의 국외이전)</p>
                    <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                      <p>– 개인정보를 제공받는 자: 외국은행 및 외국 송금중개업체</p>
                      <p>– 제공받는 자의 개인정보 이용목적: 해외송금</p>
                      <p>– 제공받는 개인정보 항목: 송금인 관련정보(금융기관명, 성명, 계좌번호, 주소, 실명번호, 송금금액, 송금일자, 휴대폰번호), 수취인 관련정보(수취금융기관명, 성명, 계좌번호, 전화번호)</p>
                      <p>– 제공받는 자의 보유•이용기간: 제3조와 같음</p>
                    </div>

                    <p className="mt-4 font-medium text-[#191c1f]">⑤ 모바일 캐시비(현, ㈜이동의즐거움)</p>
                    <p className="mt-2">1) 필수항목 : 모바일 캐시비 개인정보의 수집·이용목적 및 항목(필수)</p>
                    <div className="overflow-x-auto mt-2">
                      <table className="min-w-full border border-gray-300 text-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">수집ㆍ이용목적</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">개인정보 항목</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">보유 및 이용기간</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">모바일 캐시비 이용</td>
                            <td className="border border-gray-300 px-4 py-3">휴대전화번호</td>
                            <td className="border border-gray-300 px-4 py-3">회원탈퇴 시까지</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="mt-4">2) 선택항목 : 모바일 캐시비 개인정보의 수집·이용목적 및 항목(선택)</p>
                    <div className="overflow-x-auto mt-2">
                      <table className="min-w-full border border-gray-300 text-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">수집ㆍ이용목적</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">개인정보 항목</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">보유 및 이용기간</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3">서비스 안내 및 마케팅 정보 수신 동의</td>
                            <td className="border border-gray-300 px-4 py-3">휴대전화번호</td>
                            <td className="border border-gray-300 px-4 py-3">동의 철회 시까지</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p>– 개인정보를 제공받는 자: 한국정보인증㈜</p>
                        <p>– 제공받는 자의 개인정보 이용목적: 공동인증서 본인확인(UCPID) 서비스 이용 및 민원응대</p>
                        <p>– 제공받는 개인정보 항목: 성명, 주민등록번호 및 영상 등을 통하여 개인을 알아볼 수 있는 정보</p>
                        <p>– 제공받는 자의 보유•이용기간: 제3조와 같음</p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p>– 개인정보를 제공받는 자: 코리아크레딧뷰로㈜</p>
                        <p>– 제공받는 자의 개인정보 이용목적: 금융분야 마이데이터 관련 CI 변환서비스 이용</p>
                        <p>– 제공받는 개인정보 항목: 성명, 내선전화번호, 이메일 주소</p>
                        <p>– 제공받는 자의 보유•이용기간: 제3조와 같음</p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p>– 개인정보를 제공받는 자: ㈜쿠콘</p>
                        <p>– 제공받는 자의 개인정보 이용목적: 입금이체 및 가상계좌 중계, 예금주실명조회, 외국인 체류정보 조회, 다국어 ARS 출금동의 인증, 정부24(외국인등록사실증명, 주민등록등초본) 및 국세청(홈텍스)(소득금액증명) 증명서 발급</p>
                        <p>– 제공받는 개인정보 항목: 성명, 휴대전화번호, 이메일, 금융기관명, 계좌번호, 예금주명, 사업자등록번호</p>
                        <p>– 제공받는 자의 보유•이용기간: 제3조와 같음</p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p>– 개인정보를 제공받는 자: 비씨카드㈜</p>
                        <p>– 제공받는 자의 개인정보 이용목적: GME REMIT 앱 내 &quot;KTX 결합상품 예약서비스&quot; 제공 용도</p>
                        <p>– 제공받는 개인정보 항목: 성명, 생년월일, 휴대전화번호</p>
                        <p>– 제공받는 자의 보유•이용기간: 제3조와 같음</p>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p>– 개인정보를 제공받는 자: ㈜라쿠카라차</p>
                        <p>– 제공받는 자의 개인정보 이용목적: KTX 가맹점 대금정산, 부정사용 방지, 고객민원 응대업무</p>
                        <p>– 제공받는 개인정보 항목: 성명, 휴대전화번호, 이메일, 금융기관명, 계좌번호, 예금주명, 주소</p>
                        <p>– 제공받는 자의 보유•이용기간: 제3조와 같음</p>
                      </div>
                    </div>

                    <p className="mt-4">1) 고객님께서 동의하지 않는 경우에는 제휴사에게 제공하거나 제휴사와 공유하지 않습니다. 제휴관계에 변화가 있거나 제휴관계가 종료될 때도 같은 절차에 의하여 고지하거나 동의를 구합니다.</p>
                    <p className="mt-2">– 이용자가 사전에 공개에 동의한 경우</p>
                    <p className="mt-2">영업 양수 등에 관한 사유가 발생하여 회원의 개인정보 이전이 필요한 경우 회사는 [정보통신망 이용촉진 및 정보보호에 관한 법률] 등 관계법률에서 규정한 절차와 방법에 따라 개인정보 이전에 관한 사실 등을 사전에 고지하며 고객은 개인정보 이전에 관한 동의를 거부할 수 있습니다.</p>
                  </div>

                  {/* Article 5 */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#191c1f]">제5조(개인정보처리의 위탁에 관한 사항)</h3>
                    <p className="mt-3">① 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
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
                    <p className="mt-3">② 회사는 위탁계약 체결시 개인정보 보호법 제 25조에 따라 위탁업무수행목적 외 개인정보 처리금지, 기술적•관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리• 감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</p>
                    <p className="mt-2">③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.</p>
                  </div>

                  {/* Article 6 */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#191c1f]">제6조(이용자 및 법정대리인의 권리와 그 행사방법)</h3>
                    <p className="mt-3">① 이용자(만 14세 미만인 경우에는 법정대리인)는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
                    <ol className="list-decimal pl-6 mt-2 space-y-1">
                      <li>개인정보 열람요구</li>
                      <li>오류 등이 있을 경우 정정 요구</li>
                      <li>삭제요구</li>
                      <li>처리정지 요구</li>
                    </ol>
                    <p className="mt-3">② 제1항에 따른 권리 행사는 회사에 대해 개인정보 보호법 시행규칙 별지 제8호 서식에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 (주)글로벌머니익스프레스는 이에 대해 지체 없이 조치하겠습니다.</p>
                    <p className="mt-2">③ 이용자가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.</p>
                    <p className="mt-2">④ 제1항에 따른 권리 행사는 이용자의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</p>
                    <p className="mt-2">⑤ 이용자는 개인정보보호법 등 관계법령을 위반하여 회사가 처리하고 있는 이용자 본인이나 타인의 개인정보 및 사생활을 침해하여서는 아니됩니다.</p>
                  </div>

                  {/* Article 7 */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#191c1f]">제7조(개인정보의 파기)</h3>
                    <p className="mt-3">① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
                    <p className="mt-2">② 이용자로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.</p>
                    <p className="mt-2">③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.</p>
                    <p className="mt-2 ml-4">1. 파기절차: 회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보보호책임자의 승인을 받아 개인정보를 파기합니다.</p>
                    <p className="mt-2 ml-4">2. 파기방법: 회사는 전자적 파일 형태로 기록•저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에 기록•저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</p>
                  </div>

                  {/* Article 8 */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#191c1f]">제8조 (개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항)</h3>
                    <p className="mt-3">① 쿠키는 웹 서비스 제공자의 서버가 이용자의 컴퓨터로 전송하는 소량의 정보이며, 여기에는 방문한 웹사이트의 정보 등이 담겨 있습니다.</p>
                    <p className="mt-2">② 쿠키의 사용목적</p>
                    <p className="mt-2 ml-4">1. 이용자가 동일한 정보를 반복하여 입력할 필요를 제거하여 시간을 절약하고 웹사이트에 로그인해 있는 동안 개인화된 콘텐츠를 서비스하기 위하여 컴퓨터에 이용자의 선택 사항 및 기타 정보를 저장하는데 쿠키를 사용합니다.</p>
                    <p className="mt-2 ml-4">2. 이용자들이 방문한 각 서비스와 웹사이트들에 대한 방문 및 이용형태, 보안접속 여부, 이용자 규모 등을 파악하여 이용자에게 광고를 포함한 최적화 된 맞춤형 정보 및 서비스를 제공하기 위해 사업합니다.</p>
                    <p className="mt-2">③ 쿠키의 설치, 운영 및 거부</p>
                    <p className="mt-2 ml-4">1. 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 이용자는 웹 브라우저 상단의 [도구-&gt;인터넷 옵션 -&gt; 개인정보 -&gt; 고급정보]에서 모든 쿠키의 허용, 동의를 통한 쿠키의 허용, 모든 쿠키의 차단을 스스로 결정할 수 있습니다</p>
                    <p className="mt-2 ml-4">2. 단, 모든 쿠키의 저장을 거부하기로 선택한 경우 일부 서비스 제공에 어려움이 있을 수 있습니다.</p>
                  </div>

                  {/* Article 9 */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#191c1f]">제9조(개인정보의 안전성 확보조치)</h3>
                    <p className="mt-3">회사는 개인정보보호법 제29조 및 시행령 제30조에 따라 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
                    <div className="mt-3 space-y-3">
                      <p>1. 개인정보 취급 직원의 최소화 및 교육: 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화하여 개인정보를 관리하는 대책을 시행하고 있습니다.</p>
                      <p>2. 정기적인 자체 감사 실시: 개인정보 취급 관련 안전성 확보를 위해 정기적으로 자체 감사를 실시하고 있습니다.</p>
                      <p>3. 내부관리계획의 수립 및 시행: 개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.</p>
                      <p>4. 개인정보의 암호화: 이용자의 개인정보는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.</p>
                      <p>5. 해킹 등에 대비한 기술적 대책: 회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신•점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.</p>
                      <p>6. 개인정보에 대한 접근 제한: 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단접근을 통제하고 있습니다.</p>
                      <p>7. 접속기록의 보관 및 위변조 방지: 개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능을 사용하고 있습니다.</p>
                      <p>8. 문서보안을 위한 잠금장치 사용: 개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.</p>
                      <p>9. 비인가자에 대한 출입 통제: 개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.</p>
                    </div>
                  </div>

                  {/* Article 10 */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#191c1f]">제10조(개인정보 보호책임자에 관한 사항)</h3>
                    <p className="mt-3">① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
                    <div className="bg-gray-50 p-6 rounded-lg mt-4">
                      <p className="font-semibold text-[#191c1f] mb-3">▶ 개인정보보호 책임자</p>
                      <ul className="space-y-1">
                        <li>– 책임자: (주)글로벌머니익스프레스 최원해 본부장</li>
                        <li>– 연락처: 02-3673-5559</li>
                        <li>– 이메일: compliance@gmeremit.com</li>
                      </ul>
                      <p className="mt-3 text-sm">* 개인정보보호 담당부서로 연결됩니다.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg mt-4">
                      <p className="font-semibold text-[#191c1f] mb-3">▶ 개인정보보호 담당부서(위와 동일)</p>
                      <p className="text-sm">* 개인정보보호 담당부서에서 개인정보 열람청구 업무를 담당합니다.</p>
                    </div>
                    <p className="mt-3">② 이용자께서는 회사의 서비스(또는 사업)를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 이용자의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.</p>
                  </div>

                  {/* Article 11 */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#191c1f]">제11조(권익침해 구제방법)</h3>
                    <p className="mt-3">아래의 기관은 (주)글로벌머니익스프레스와는 별개의 기관으로서, (주)글로벌머니익스프레스의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.</p>
                    <div className="bg-gray-50 p-6 rounded-lg mt-4 space-y-3">
                      <p>1) 개인정보분쟁조정위원회 (www.kopico.go.kr)</p>
                      <p>2) 개인정보침해신고센터(privacy.kisa.or.kr / 국번없이 118)</p>
                      <p>3) 대검찰청 사이버범죄수사단(www.spo.go.kr / 국번없이 1301)</p>
                      <p>4) 경찰청 사이버범죄수사단(www.police.go.kr / 국번없이 182)</p>
                    </div>
                  </div>

                  {/* Article 12 */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#191c1f]">제12조(기타 사항)</h3>
                    <p className="mt-3">회사는 고객님께 다른 회사의 웹사이트 또는 자료에 대한 링크를 제공할 수 있습니다. 이 경우 회사는 외부사이트 및 자료에 대한 아무런 통제권이 없으므로 그로부터 제공받는 서비스나 자료의 유용성에 대해 책임질 수 없으며 보증할 수 없습니다. 회사가 포함하고 있는 링크를 클릭하여 타 사이트의 페이지로 옮겨갈 경우 해당 사이트의 개인정보 보호정책은 회사와 무관하므로 새로 방문한 사이트의 정책을 확인하시기 바랍니다.</p>
                  </div>

                  {/* Article 13 */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#191c1f]">제13조(개인정보처리방침 변경)</h3>
                    <p className="mt-3">현 개인정보 처리방침이 추가 및 삭제, 수정이 있을 시에는 시행 7일 전에 홈페이지 또는 이메일을 통해 사전 공지하며, 사전 공지가 곤란한 경우 지체 없이 공지할 수 있습니다. 이 정책은 공지한 날로부터 시행됩니다.</p>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="font-medium">– 시행일자: 2024년 12월 2일 시행</p>
                    </div>
                  </div>

                  {/* 변경 내역 */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#191c1f]">개인정보 처리방침 변경 내역</h3>
                    <p className="mt-3">2023년 4월 19일 변경</p>
                  </div>
                </div>

                {/* 개인정보 수집·이용 동의 Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
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

            {/* Contact Info */}
            <div className="mt-12 bg-white rounded-2xl shadow-sm p-6 lg:p-10">
              <h2 className="text-xl font-bold text-[#191c1f] mb-4">Contact Information</h2>
              <p className="text-gray-600">
                For any further information please contact: GME Online Team, GME Co. Ltd.
              </p>
              <p className="text-gray-600 mt-2">
                서울특별시 영등포구 영등포로 150, 생각공장당산 B동 901~911호
              </p>
              <p className="text-gray-600">
                Tel. 02-3673-5559 | Email: compliance@gmeremit.com
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
