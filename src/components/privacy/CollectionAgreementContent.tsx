function LegalRetentionTable() {
  return (
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
            <td className="border border-gray-300 px-4 py-3">통계ㆍ학술ㆍ연구 목적</td>
            <td className="border border-gray-300 px-4 py-3">비식별화, 익명화 작업을 거친 정보</td>
            <td className="border border-gray-300 px-4 py-3">준영구</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3">통신비밀보호법</td>
            <td className="border border-gray-300 px-4 py-3">법원의 영장을 받아 수사기관이 요청 시 제공</td>
            <td className="border border-gray-300 px-4 py-3">IP 등 로그기록</td>
            <td className="border border-gray-300 px-4 py-3">3개월</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3" rowSpan={3}>전자상거래등에서의 소비자보호에관한 법률</td>
            <td className="border border-gray-300 px-4 py-3">소비자의 불만 또는 분쟁처리에 관한 기록확인</td>
            <td className="border border-gray-300 px-4 py-3">이용자 식별정보, 분쟁처리 기록 등</td>
            <td className="border border-gray-300 px-4 py-3">3년</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3">대금결제 및 재화 등의 공급에 관한 기록확인</td>
            <td className="border border-gray-300 px-4 py-3">이용자 식별정보, 계약/청약철회 기록 등</td>
            <td className="border border-gray-300 px-4 py-3">5년</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3">계약 또는 청약철회 등에 관한 기록확인</td>
            <td className="border border-gray-300 px-4 py-3">-</td>
            <td className="border border-gray-300 px-4 py-3">-</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 px-4 py-3">전자금융거래법</td>
            <td className="border border-gray-300 px-4 py-3">전자금융거래기록 확인</td>
            <td className="border border-gray-300 px-4 py-3">전자금융거래에 관한 기록</td>
            <td className="border border-gray-300 px-4 py-3">5년</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-3">신용정보의 이용 및 보호에 관한 법률</td>
            <td className="border border-gray-300 px-4 py-3">신용정보의 수집/처리 및 이용 등에 관한 기록확인</td>
            <td className="border border-gray-300 px-4 py-3">신용정보의 수집/처리 및 이용 등에 관한 기록</td>
            <td className="border border-gray-300 px-4 py-3">3년</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function MobileCashbeeTables() {
  return (
    <>
      <p className="mt-2">1) 필수항목 : 모바일 캐시비 개인정보의 수집·이용목적 및 항목(필수) : 수집/이용목적, 개인정보 항목</p>
      <div className="overflow-x-auto mt-3">
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
              <td className="border border-gray-300 px-4 py-3">[필수] 본인확인정보(성명, 성별, 생년월일, CI(개인식별정보), 발급식별번호), 휴대폰정보(휴대폰번호, 이동통신사, 단말모델명), 캐시비 카드번호</td>
              <td className="border border-gray-300 px-4 py-3">모바일 캐시비 탈퇴 혹은 제휴 계약 종료시까지</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3">요금정산</td>
              <td className="border border-gray-300 px-4 py-3">[필수] 승·하차 정보, 정류장 정보, 거래 위치 정보, 가맹점명, 노선번호</td>
              <td className="border border-gray-300 px-4 py-3">모바일 캐시비 탈퇴 혹은 제휴 계약 종료시까지</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4">2) 선택항목 : 모바일 캐시비 개인정보의 수집·이용목적 및 항목(선택) : 수집/이용목적, 개인정보 항목</p>
      <div className="overflow-x-auto mt-3">
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
              <td className="border border-gray-300 px-4 py-3">소득공제</td>
              <td className="border border-gray-300 px-4 py-3">[필수] 성명, CI(개인식별정보), 캐시비카드번호, 주민등록번호 or 외국인등록번호</td>
              <td className="border border-gray-300 px-4 py-3">모바일 캐시비 탈퇴 혹은 제휴 계약 종료시까지</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3">잔액 이전</td>
              <td className="border border-gray-300 px-4 py-3">[필수] CI(개인식별정보)</td>
              <td className="border border-gray-300 px-4 py-3">모바일 캐시비 탈퇴 혹은 제휴 계약 종료시까지</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">잔액 환불</td>
              <td className="border border-gray-300 px-4 py-3">[필수] 본인확인정보(성명, 성별, 생년월일, CI(개인식별정보)), 캐시비카드번호, 휴대폰 정보(휴대폰번호, 이동통신사, 단말모델명), 은행명, 계좌번호, 예금주</td>
              <td className="border border-gray-300 px-4 py-3">모바일 캐시비 탈퇴 혹은 제휴 계약 종료시까지</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3">서비스 안내 및 마케팅 정보 수신 동의</td>
              <td className="border border-gray-300 px-4 py-3">[선택] 앱푸쉬, 이메일, 카카오알림톡, SMS</td>
              <td className="border border-gray-300 px-4 py-3">모바일 캐시비 탈퇴 혹은 제휴 계약 종료시까지</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">어린이·청소년 할인등록</td>
              <td className="border border-gray-300 px-4 py-3">[필수] 캐시비카드번호, 생년월일, 학년정보</td>
              <td className="border border-gray-300 px-4 py-3">모바일 캐시비 탈퇴 혹은 제휴 계약 종료시까지</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3">복지카드 할인등록</td>
              <td className="border border-gray-300 px-4 py-3">[필수] 캐시비카드번호, 성명, 주민등록번호, 생년월일</td>
              <td className="border border-gray-300 px-4 py-3">모바일 캐시비 탈퇴 혹은 제휴 계약 종료시까지</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">신용카드 간편등록·결제</td>
              <td className="border border-gray-300 px-4 py-3">[필수] 본인확인정보(성명, 성별, 생년월일, CI(개인식별정보)), 캐시비카드번호 휴대폰 정보(휴대폰번호, 이동통신사, 단말모델명), 은행명, 계좌번호, 예금주</td>
              <td className="border border-gray-300 px-4 py-3">모바일 캐시비 탈퇴 혹은 제휴 계약 종료시까지</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-3">분실·도난 안심 서비스</td>
              <td className="border border-gray-300 px-4 py-3">[필수] CI(개인식별정보), 이메일, 비밀번호, 은행명, 계좌번호, 예금주</td>
              <td className="border border-gray-300 px-4 py-3">모바일 캐시비 탈퇴 혹은 제휴 계약 종료시까지</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default function CollectionAgreementContent() {
  return (
    <div className="prose prose-gray max-w-none">
      <div className="space-y-8 text-gray-600">
        {/* 1. 개인정보 수집·이용 동의 */}
        <div>
          <h2 className="typo-content-title mb-6">1. 개인정보 수집·이용 동의</h2>
          <p className="text-gray-600 mb-6">
            (주)글로벌머니익스프레스와의 금융거래와 관련하여 (주)글로벌머니익스프레스가 고객의 개인정보를 수집·이용하고자 하는 경우에는 「개인정보 보호법」 제15조, 제22조 및 제24조, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제22조에 따라 동의를 얻어야 합니다. 이에 (주)글로벌머니익스프레스가 아래와 같이 고객의 개인정보를 수집·이용하는데 동의합니다.
          </p>

          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold text-dark">1. 개인정보의 필수적인 수집·이용에 관한 사항</h3>

              <p className="mt-4 font-medium">1) 개인정보의 수집·이용 목적</p>
              <div className="mt-2 space-y-2 ml-4">
                <p>① 회원 가입 및 관리: 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별•인증, 회원자격 유지•관리, 본인확인제 시행에 따른 본인확인, 금융거래관계의 설정 및 유지, 신청한 서비스 제공</p>
                <p>② 재화 또는 서비스 제공: 소액해외송금 서비스 제공 시 이와 관련된 본인인증, 상담 또는 새로운 상거래 신청 시 본인 여부 확인</p>
                <p>③ 이용자의 거래 관계 및 민원사무 처리 등 원활한 의사소통 경로 확보: 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락•통지, 처리결과 통보 등 각종 고지•통지, 각종 불편사항 접수 및 분쟁 조정을 위한 기록 보전</p>
                <p>④ 서비스 개선, 신규 서비스 개발 및 마케팅, 서비스 이용 통계 및 설문: 서비스 이용현황 통계분석 및 활용, 서비스 개선 및 신규서비스 개발, 새로운 서비스나 이벤트 등 최신정보 안내, 부정이용방지, 사고조사 및 보안정책 수립을 위한 자료로 활용</p>
              </div>

              <p className="mt-4 font-medium">2) 수집하는 개인정보의 항목</p>
              <div className="mt-2 ml-4 space-y-2">
                <p>① 필수항목</p>
                <p>– 성명, 국적, 생년월일, 주소, 휴대폰 번호, 이메일 주소, 어플리케이션/웹사이트 비밀번호, 이체비밀번호, 실명번호, 실명인증수단 사진, 송금인 관련정보(금융기관명, 성명, 계좌번호, 주소, 실명번호, 송금금액, 송금일자, 신청인과의 관계, 송금목적, 자금 출처, 직업군), 수취인 관련정보(수취금융기관명, 성명, 국적, 계좌번호, 주소, 전화번호)</p>
                <p>② 자동수집 항목 및 수집방법</p>
                <p>– 수집항목: IP주소, MAC주소, 쿠키, 접속기록, 서비스 이용 기록, 불량이용기록, 회원 PC환경(OS, 방화벽, 브라우저, 키보드 타입 등)</p>
                <p>– 수집방법: 서비스 이용 과정에서 이용자에 관한 정보를 정보통신서비스 제공자가 자동화된 방법으로 생성하여 이를 저장(수집)</p>
              </div>

              <p className="mt-4 font-medium">3) 개인정보의 보유·이용 기간</p>
              <p className="mt-2">
                글로벌머니익스프레스가 이용자의 개인정보를 수집하는 경우 그 보유기간은 원칙적으로 회원가입 후 계약기간 및 이용계약의 종료시까지며, 이용 계약 종료의 경우 (주)글로벌머니익스프레스는 이용자 개인정보를 즉시 파기하며, 제3자에게 제공된 정보에 대해서도 지체없이 파기하도록 조치합니다. (단, 재가입 유예기간 동안의 재가입방지 등을 위해 이용계약이 종료한 날로부터 3개월 경과 후에 파기하도록 합니다.) 단, 이용자에게 개인정보 보관기간에 대해 별도의 동의를 얻은 경우, 또는 아래와 같이 법령에서 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게 보관합니다.
              </p>
              <LegalRetentionTable />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-dark">2. 개인정보 수집 동의 거부의 권리</h3>
              <p className="mt-2">1) 귀하는 위 개인정보의 수집이용에 대한 동의를 거부할 수 있으며, 동의 후에도 언제든지 철회 가능합니다.</p>
              <p className="mt-1">2) 위 개인정보의 수집이용에 동의하지 않을 경우, 서비스 제공이 되지 않는 등의 불이익을 받을 수 있습니다.</p>
            </div>
          </div>
        </div>

        {/* 2. 고유식별정보 수집·이용 동의 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="typo-content-title mb-6">2. 고유식별정보 수집·이용 동의</h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold text-dark">1. 고유식별정보의 필수적인 수집·이용에 관한 사항</h3>

              <p className="mt-4 font-medium">1) 고유식별정보의 수집·이용 목적</p>
              <div className="mt-2 space-y-2 ml-4">
                <p>① 회원 가입 및 관리: 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별•인증, 회원자격 유지•관리, 본인확인제 시행에 따른 본인확인, 금융거래관계의 설정 및 유지, 신청한 서비스 제공</p>
                <p>② 재화 또는 서비스 제공: 소액해외송금 서비스 제공 시 이와 관련된 본인인증, 상담 또는 새로운 상거래 신청 시 본인 여부 확인</p>
                <p>③ 이용자의 거래 관계 및 민원사무 처리 등 원활한 의사소통 경로 확보: 민원인의 신원확인, 민원사항 확인, 사실조사를 위한 연락•통지, 처리결과 통보 등 각종 고지•통지, 각종 불편사항 접수 및 분쟁 조정을 위한 기록 보전</p>
                <p>④ 서비스 개선, 신규 서비스 개발 및 마케팅, 서비스 이용 통계 및 설문: 서비스 이용현황 통계분석 및 활용, 서비스 개선 및 신규서비스 개발, 새로운 서비스나 이벤트 등 최신정보 안내, 부정이용방지, 사고조사 및 보안정책 수립을 위한 자료로 활용</p>
              </div>

              <p className="mt-4 font-medium">2) 수집하는 고유식별정보의 항목</p>
              <p className="mt-2 ml-4">여권번호, 주민등록번호, 외국인등록번호, 운전면허번호</p>

              <p className="mt-4 font-medium">3) 보유·이용 기간</p>
              <p className="mt-2">
                (주)글로벌머니익스프레스가 이용자의 고유식별정보를 수집하는 경우 그 보유기간은 원칙적으로 회원가입 후 계약기간 및 이용계약의 종료시까지며, 이용 계약 종료의 경우 (주)글로벌머니익스프레스는 이용자 고유식별정보를 즉시 파기하며, 제 3자에게 제공된 정보에 대해서도 지체없이 파기하도록 조치합니다. (단, 재가입 유예기간 동안의 재가입 방지등을 위해 이용계약이 종료한 날로부터 3개월 경과 후에 파기하도록 합니다.) 단, 이용자에게 개인정보 보관기간에 대해 별도의 동의를 얻은 경우, 또는 아래와 같이 법령에서 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게 보관합니다.
              </p>
              <LegalRetentionTable />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-dark">2. 고유식별정보 수집 동의 거부의 권리</h3>
              <p className="mt-2">1) 귀하는 위 고유식별정보의 수집이용에 대한 동의를 거부할 수 있으며, 동의 후에도 언제든지 철회 가능합니다.</p>
              <p className="mt-1">2) 위 고유식별정보의 수집이용에 동의하지 않을 경우, 서비스 제공이 되지 않는 등의 불이익을 받을 수 있습니다.</p>
            </div>
          </div>
        </div>

        {/* 3. 개인정보 제공 동의 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="typo-content-title mb-6">3. 개인정보 제공 동의</h2>
          <p className="text-gray-600 mb-6">
            (주)글로벌머니익스프레스와의 금융거래와 관련하여 (주)글로벌머니익스프레스가 고객으로부터 취득한 개인정보는 「개인정보 보호법」 제17조, 제22조 및 제24조, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제24조의2에 따라 제3자에게 제공할 경우 본인의 사전 동의를 얻어야 하는 정보입니다. 이에 (주)글로벌머니익스프레스가 고객의 개인정보를 아래와 같이 제3자에게 제공하는 것에 대해 동의합니다.
          </p>

          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold text-dark">1. 개인정보의 필수적인 제공에 관한 사항</h3>
              <p className="mt-3 font-medium">1) 거래목적 달성을 위해 개인정보를 제공받는 자 • 이용목적 • 제공 항목</p>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-medium text-dark">① 금융당국</p>
                  <p>– 개인정보를 제공받는 자: 한국은행, 금융감독원, 기획재정부, 금융정보분석원 등</p>
                  <p>– 제공받는 자의 개인정보 이용목적: 외국환거래 관리, 감독, 자금세탁 방지</p>
                  <p>– 제공받는 개인정보 항목: 외국환 거래내역(해외송금 내역)</p>
                </div>

                <div>
                  <p className="font-medium text-dark">② 금융결제원</p>
                  <p>– 개인정보를 제공받는 자: 금융결제원</p>
                  <p>– 제공받는 자의 개인정보 이용목적: 해외송금 대금 출금이체 수행</p>
                  <p>– 제공받는 개인정보 항목: 송금인 관련정보(금융기관명, 성명, 계좌번호, 성별, 생년월일, 휴대폰 번호, 이메일 주소)</p>
                </div>

                <div>
                  <p className="font-medium text-dark">③ 국내 금융기관</p>
                  <p>– 개인정보를 제공받는 자: 국내 시중은행 및 저축은행</p>
                  <p>– 제공받는 자의 개인정보 이용목적: 해외송금, 가상계좌 공급</p>
                  <p>– 제공받는 개인정보 항목: 송금인 관련정보(금융기관명, 성명, 계좌번호, 주소, 실명번호, 송금금액, 송금일자, 휴대폰 번호), 수취인 관련정보(수취금융기관명, 성명, 계좌번호, 전화번호)</p>
                </div>

                <div>
                  <p className="font-medium text-dark">④ 해외 금융기관</p>
                  <p>– 개인정보를 제공받는 자: 외국은행 및 외국 송금중개업체</p>
                  <p>– 제공받는 자의 개인정보 이용목적: 해외송금</p>
                  <p>– 제공받는 개인정보 항목: 송금인 관련정보(금융기관명, 성명, 계좌번호, 주소, 실명번호, 송금금액, 송금일자, 휴대폰 번호), 수취인 관련정보(수취금융기관명, 성명, 계좌번호, 전화번호)</p>
                </div>

                <div>
                  <p className="font-medium text-dark">⑤ 모바일 캐시비(현, ㈜이동의즐거움)</p>
                  <MobileCashbeeTables />
                </div>

                <div>
                  <p className="font-medium text-dark">⑥ 한국정보인증㈜</p>
                  <p>– 개인정보를 제공받는 자: 한국정보인증㈜</p>
                  <p>– 제공받는 자의 개인정보 이용목적 : 공동인증서 본인확인(UCPID) 서비스 이용 및 민원응대</p>
                  <p>– 제공받는 개인정보 항목: 성명, 주민등록번호 및 영상 등을 통하여 개인을 알아볼 수 있는 정보</p>
                </div>

                <div>
                  <p className="font-medium text-dark">⑦ 코리아크레딧뷰로㈜</p>
                  <p>– 개인정보를 제공받는 자: 코리아크레딧뷰로㈜</p>
                  <p>– 제공받는 자의 개인정보 이용목적 : 금융분야 마이데이터 관련 CI 변환서비스 이용</p>
                  <p>– 제공받는 개인정보 항목: 성명, 내선전화번호, 이메일 주소</p>
                </div>

                <div>
                  <p className="font-medium text-dark">⑧ ㈜쿠콘</p>
                  <p>– 개인정보를 제공받는 자: ㈜쿠콘</p>
                  <p>– 제공받는 자의 개인정보 이용목적 : 입금이체 및 가상계좌 중계, 예금주실명조회, 외국인 체류정보 조회, 다국어 ARS 출금동의 인증, 정부24(외국인등록사실증명, 주민등록등초본) 및 국세청(홈텍스)(소득금액증명) 증명서 발급</p>
                  <p>– 제공받는 개인정보 항목: 성명, 휴대전화번호, 이메일, 금융기관명, 계좌번호, 예금주명, 사업자등록번호</p>
                </div>

                <div>
                  <p className="font-medium text-dark">⑨ 비씨카드㈜</p>
                  <p>– 개인정보를 제공받는 자: 비씨카드㈜</p>
                  <p>– 제공받는 자의 개인정보 이용목적 : GME REMIT 앱 내 &ldquo;KTX 결합상품 예약서비스&rdquo; 제공 용도</p>
                  <p>– 제공받는 개인정보 항목: 성명, 생년월일, 휴대전화번호</p>
                </div>

                <div>
                  <p className="font-medium text-dark">⑩ ㈜라쿠카라차</p>
                  <p>– 개인정보를 제공받는 자: ㈜라쿠카라차</p>
                  <p>– 제공받는 자의 개인정보 이용목적 : KTX 가맹점 대금정산, 부정사용 방지, 고객민원 응대업무</p>
                  <p>– 제공받는 개인정보 항목: 성명, 휴대전화번호, 이메일, 금융기관명, 계좌번호, 예금주명, 주소</p>
                </div>
              </div>

              <p className="mt-6 font-medium">2) 개인정보를 제공받는 자의 개인정보 보유 및 이용 기간</p>
              <p className="mt-2">이용계약 종료시까지를 원칙으로 하며, 아래와 같이 법령에서 일정 기간 정보보관 의무를 부과하는 경우에는 해당기간 동안 개인정보를 제공합니다.</p>
              <LegalRetentionTable />
            </div>
          </div>
        </div>

        {/* 4. 고유식별정보 제공 동의 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="typo-content-title mb-6">4. 고유식별정보 제공 동의</h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold text-dark">1. 고유식별정보의 필수적인 제공에 관한 사항</h3>
              <p className="mt-3 font-medium">1) 거래목적 달성을 위해 고유식별정보를 제공받는 자•이용목적•제공 항목</p>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-medium text-dark">① 금융당국</p>
                  <p>– 개인정보를 제공받는 자: 한국은행, 금융감독원, 기획재정부, 금융정보분석원 등</p>
                  <p>– 제공받는 자의 개인정보 이용목적: 외국환거래 관리, 감독, 자금세탁 방지</p>
                  <p>– 제공받는 개인정보 항목: 외국환 거래내역(해외송금 내역), 실명번호</p>
                </div>

                <div>
                  <p className="font-medium text-dark">② 금융결제원</p>
                  <p>– 개인정보를 제공받는 자: 금융결제원</p>
                  <p>– 제공받는 자의 개인정보 이용목적: 해외송금 대금 출금이체 수행</p>
                  <p>– 제공받는 개인정보 항목: 송금인 관련정보(금융기관명, 성명, 계좌번호, 성별, 생년월일, 휴대폰 번호, 이메일 주소)</p>
                </div>

                <div>
                  <p className="font-medium text-dark">③ 국내 금융기관</p>
                  <p>– 개인정보를 제공받는 자: 국내 시중은행</p>
                  <p>– 제공받는 자의 개인정보 이용목적: 해외송금</p>
                  <p>– 제공받는 개인정보 항목: 송금인 관련정보(금융기관명, 성명, 계좌번호, 주소, 실명번호, 송금금액, 송금일자, 휴대폰 번호), 수취인 관련정보(수취금융기관명, 성명, 계좌번호, 전화번호)</p>
                </div>

                <div>
                  <p className="font-medium text-dark">④ 해외 금융기관</p>
                  <p>– 개인정보를 제공받는 자: 외국은행 및 외국 송금중개업체</p>
                  <p>– 제공받는 자의 개인정보 이용목적: 해외송금</p>
                  <p>– 제공받는 개인정보 항목: 송금인 관련정보(금융기관명, 성명, 계좌번호, 주소, 실명번호, 송금금액, 송금일자, 휴대폰번호), 수취인 관련정보(수취금융기관명, 성명, 계좌번호, 전화번호), 실명번호</p>
                </div>

                <div>
                  <p className="font-medium text-dark">⑤ 모바일 캐시비(현, ㈜이동의즐거움)</p>
                  <MobileCashbeeTables />
                </div>

                <div>
                  <p className="font-medium text-dark">⑥ 한국정보인증㈜</p>
                  <p>– 개인정보를 제공받는 자: 한국정보인증㈜</p>
                  <p>– 제공받는 자의 개인정보 이용목적 : 공동인증서 본인확인(UCPID) 서비스 이용 및 민원응대</p>
                  <p>– 제공받는 개인정보 항목: 성명, 주민등록번호 및 영상 등을 통하여 개인을 알아볼 수 있는 정보</p>
                </div>
              </div>

              <p className="mt-6 font-medium">2) 고유식별정보를 제공받는 자의 개인정보 보유 및 이용 기간</p>
              <p className="mt-2">이용계약 종료시까지를 원칙으로 하며, 아래와 같이 법령에서 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 고유식별정보를 제공합니다.</p>
              <LegalRetentionTable />
            </div>
          </div>
        </div>

        {/* 5. 개인정보처리 업무위탁 안내 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="typo-content-title mb-6">5. 개인정보처리 업무위탁 안내</h2>
          <p className="text-gray-600 mb-4">
            (주)글로벌머니익스프레스는 고객의 동의 없이 고객의 정보를 외부 업체에 위탁하지 않습니다. 하단의 업체는 고객에게 사전 통지 또는 동의를 얻어 위탁 업무를 대행하고 있습니다. 수탁자(하단의 업체)는 (주)글로벌머니익스프레스로부터 위탁 받은 해당 업무범위를 초과하여 개인정보를 이용하거나 제3자에게 제공하지 않습니다. 향후 수탁자와 위탁 업무가 추가될 경우 고객에게 사전 통지하고 필요한 경우 사전 동의를 받습니다.
          </p>

          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold text-dark">1. 수탁자(위탁받는 자) 및 위탁하는 업무 내용</h3>
              <div className="mt-3 space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-dark">1) 전화 상담센터 운영</p>
                  <p>– 위탁받는 자(수탁자): 미정</p>
                  <p>– 위탁하는 업무의 내용: 고객의 전화상담 응대, 부서 및 직원 안내 등</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-dark">2) 출금이체 서비스</p>
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
