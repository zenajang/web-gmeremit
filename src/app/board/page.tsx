"use client";

import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BoardTabs from "@/components/board/BoardTabs";
import SearchBar from "@/components/board/SearchBar";
import BoardTable from "@/components/board/BoardTable";
import BlogGrid from "@/components/board/BlogGrid";
import Pagination from "@/components/board/Pagination";
import { BoardEntry, TabType } from "@/types/board";
import Lenis from "lenis";

export const dynamic = 'force-dynamic';

// Sample data combining notices and press releases
const sampleData: BoardEntry[] = [
  {
    id: 1,
    type: "press",
    title: "GME Remit, 2024년 해외송금 거래액 4조원 돌파",
    excerpt: "Global Money Express가 2024년 한 해 동안 해외송금 거래액 4조원을 돌파했다고 밝혔다.",
    date: "2026-02-01",
    source: "매일경제",
    has_attachment: true,
    attachment_url: "/files/press-1.pdf",
    attachment_name: "보도자료_2024년_거래액.pdf",
  },
  {
    id: 2,
    type: "notice",
    title: "2025년 설 연휴 송금 서비스 안내",
    content: "설 연휴 기간 중 송금 서비스 운영 시간을 안내드립니다.",
    date: "2026-01-31"
  },
  {
    id: 3,
    type: "press",
    title: "GME Remit, '송금 수수료 제로' 이벤트 진행",
    excerpt: "GME Remit이 신규 고객 대상으로 송금 수수료 면제 이벤트를 시작한다.",
    date: "2026-01-30",
    source: "한국경제",
  },
  {
    id: 4,
    type: "notice",
    title: "개인정보 처리방침 개정 안내",
    content: "개인정보 처리방침이 2025년 2월 1일부터 개정됩니다.",
    date: "2026-01-29"
  },
  {
    id: 5,
    type: "press",
    title: "GME Remit, 동남아 7개국 실시간 송금 서비스 확대",
    excerpt: "베트남, 필리핀, 태국 등 동남아 7개국에 실시간 송금 서비스를 확대 제공한다.",
    date: "2026-01-28",
    source: "서울경제",
    has_attachment: true,
    attachment_url: "/files/press-2.pdf",
    attachment_name: "동남아_서비스_확대.pdf",
  },
  {
    id: 6,
    type: "notice",
    title: "앱 버전 업데이트 안내 (v3.2.0)",
    content: "GME Remit 앱이 새로운 기능과 함께 업데이트되었습니다.",
    date: "2025-01-03",
    has_attachment: true,
    attachment_url: "/files/update-guide.pdf",
    attachment_name: "업데이트_가이드.pdf",
  },
  {
    id: 7,
    type: "press",
    title: "GME Remit, 누적 가입자 200만 명 돌파",
    excerpt: "국내 대표 해외송금 플랫폼 GME Remit의 누적 가입자 수가 200만 명을 넘어섰다.",
    date: "2024-12-28",
    source: "이데일리",
  },
  {
    id: 8,
    type: "notice",
    title: "2024년 송금 서비스 이용 통계 발표",
    content: "2024년 한 해 동안의 송금 서비스 이용 현황을 공유합니다.",
    date: "2024-12-25",
  },
  {
    id: 9,
    type: "press",
    title: "GME Remit, '핀테크 대상' 우수상 수상",
    excerpt: "금융위원회가 주최한 2024 핀테크 대상에서 우수상을 수상했다.",
    date: "2024-12-20",
    source: "파이낸셜뉴스",
  },
  {
    id: 10,
    type: "notice",
    title: "연말연시 고객센터 운영 안내",
    content: "연말연시 기간 고객센터 운영 시간을 안내드립니다.",
    date: "2024-12-18",
  },
  {
    id: 11,
    type: "press",
    title: "GME Remit, AI 기반 환율 알림 서비스 출시",
    excerpt: "인공지능을 활용한 맞춤형 환율 알림 서비스를 새롭게 선보인다.",
    date: "2024-12-15",
    source: "디지털타임스",
    has_attachment: true,
    attachment_url: "/files/press-3.pdf",
    attachment_name: "AI_환율알림_서비스.pdf",
  },
  {
    id: 12,
    type: "notice",
    title: "시스템 정기 점검 안내 (12월)",
    content: "12월 정기 시스템 점검이 예정되어 있습니다.",
    date: "2024-12-10",
  },
  {
    id: 13,
    type: "press",
    title: "GME Remit, 블록체인 기반 송금 서비스 시범 운영",
    excerpt: "블록체인 기술을 활용한 차세대 송금 서비스 시범 운영을 시작한다.",
    date: "2024-12-05",
    source: "전자신문",
  },
  {
    id: 14,
    type: "notice",
    title: "보안 강화를 위한 2단계 인증 의무화 안내",
    content: "고객님의 안전한 금융거래를 위해 2단계 인증이 의무화됩니다.",
    date: "2024-12-01",
  },
  {
    id: 15,
    type: "press",
    title: "GME Remit, 중소기업 해외 진출 지원 프로그램 론칭",
    excerpt: "중소기업의 글로벌 진출을 돕기 위한 특별 송금 프로그램을 시작한다.",
    date: "2024-11-28",
    source: "아시아경제",
  },
  {
    id: 16,
    type: "notice",
    title: "11월 우수 고객 이벤트 당첨자 발표",
    content: "11월 우수 고객 이벤트 당첨자를 안내드립니다.",
    date: "2024-11-25",
  },
  {
    id: 17,
    type: "press",
    title: "GME Remit, 친환경 경영 실천 선언",
    excerpt: "지속 가능한 경영을 위한 친환경 경영 활동을 본격화한다.",
    date: "2024-11-20",
    source: "그린포스트코리아",
  },
  {
    id: 18,
    type: "notice",
    title: "환율 우대 프로모션 진행 안내",
    content: "특별 환율 우대 프로모션이 진행됩니다.",
    date: "2024-11-15",
  },
  {
    id: 19,
    type: "press",
    title: "GME Remit, 유럽 5개국 송금 서비스 개시",
    excerpt: "영국, 독일, 프랑스 등 유럽 주요 국가로의 송금 서비스를 시작한다.",
    date: "2024-11-10",
    source: "뉴스핌",
  },
  {
    id: 20,
    type: "notice",
    title: "카카오페이 연동 서비스 출시",
    content: "카카오페이를 통한 간편 송금 서비스가 시작됩니다.",
    date: "2024-11-05",
  },
  {
    id: 21,
    type: "press",
    title: "GME Remit, 송금 앱 UI/UX 혁신상 수상",
    excerpt: "사용자 중심의 혁신적인 앱 디자인으로 UI/UX 대상을 수상했다.",
    date: "2024-10-30",
    source: "디자인정글",
  },
  {
    id: 22,
    type: "notice",
    title: "추석 연휴 고객센터 운영 안내",
    content: "추석 연휴 기간 고객센터 운영 시간을 안내드립니다.",
    date: "2024-09-10",
  },
  {
    id: 23,
    type: "press",
    title: "GME Remit, 모바일 인증서 서비스 도입",
    excerpt: "편리한 모바일 인증서 기반 본인 확인 서비스를 도입한다.",
    date: "2024-09-05",
    source: "보안뉴스",
  },
  {
    id: 24,
    type: "notice",
    title: "여름휴가 시즌 24시간 고객지원 운영",
    content: "여름휴가 시즌 동안 24시간 고객지원을 운영합니다.",
    date: "2024-08-01",
  },
  {
    id: 25,
    type: "press",
    title: "GME Remit, 미국 송금 수수료 50% 할인 이벤트",
    excerpt: "미국으로의 송금 수수료를 50% 할인하는 특별 이벤트를 진행한다.",
    date: "2024-07-25",
    source: "한경비즈니스",
  },
  {
    id: 26,
    type: "notice",
    title: "신규 가입 고객 환영 이벤트",
    content: "신규 가입 고객을 위한 특별 혜택을 제공합니다.",
    date: "2024-07-15",
  },
  {
    id: 27,
    type: "press",
    title: "GME Remit, 캐나다 송금 서비스 확대",
    excerpt: "캐나다 주요 은행과의 제휴를 통해 송금 서비스를 확대한다.",
    date: "2024-07-10",
    source: "연합뉴스",
  },
  {
    id: 28,
    type: "notice",
    title: "여름 휴가 시즌 송금 팁",
    content: "여름 휴가 시즌 송금 시 유의사항을 안내드립니다.",
    date: "2024-07-01",
  },
  {
    id: 29,
    type: "press",
    title: "GME Remit, 상반기 거래액 전년 대비 40% 증가",
    excerpt: "2024년 상반기 해외송금 거래액이 전년 대비 40% 증가했다.",
    date: "2024-06-28",
    source: "머니투데이",
  },
  {
    id: 30,
    type: "notice",
    title: "고객 만족도 조사 참여 안내",
    content: "고객 만족도 조사에 참여해주시면 감사하겠습니다.",
    date: "2024-06-20",
  },
  {
    id: 31,
    type: "press",
    title: "GME Remit, 호주 송금 실시간 처리 서비스 시작",
    excerpt: "호주로의 송금이 실시간으로 처리되는 서비스를 시작한다.",
    date: "2024-06-15",
    source: "파이낸셜뉴스",
  },
  {
    id: 32,
    type: "notice",
    title: "앱 버전 업데이트 안내 (v3.1.0)",
    content: "GME Remit 앱 v3.1.0 업데이트가 배포되었습니다.",
    date: "2024-06-10",
  },
  {
    id: 33,
    type: "press",
    title: "GME Remit, 송금 보안 강화 시스템 도입",
    excerpt: "최신 보안 기술을 적용한 송금 보안 시스템을 도입한다.",
    date: "2024-06-05",
    source: "보안뉴스",
  },
  {
    id: 34,
    type: "notice",
    title: "어린이날 기념 이벤트",
    content: "어린이날을 맞아 특별 이벤트를 진행합니다.",
    date: "2024-05-05",
  },
  {
    id: 35,
    type: "press",
    title: "GME Remit, 가족 초청 송금 서비스 출시",
    excerpt: "가족 초청을 위한 특별 송금 서비스를 출시한다.",
    date: "2024-05-01",
    source: "조선비즈",
  },
  {
    id: 36,
    type: "notice",
    title: "봄맞이 환율 우대 이벤트",
    content: "봄을 맞아 환율 우대 이벤트를 진행합니다.",
    date: "2024-04-15",
  },
  {
    id: 37,
    type: "press",
    title: "GME Remit, 뉴질랜드 송금 서비스 개시",
    excerpt: "뉴질랜드로의 해외송금 서비스를 새롭게 시작한다.",
    date: "2024-04-10",
    source: "이투데이",
  },
  {
    id: 38,
    type: "notice",
    title: "3월 시스템 정기 점검 안내",
    content: "3월 정기 시스템 점검 일정을 안내드립니다.",
    date: "2024-03-25",
  },
  {
    id: 39,
    type: "press",
    title: "GME Remit, 중국 위안화 송금 서비스 강화",
    excerpt: "중국 위안화 송금 서비스의 편의성을 대폭 강화한다.",
    date: "2024-03-20",
    source: "중앙일보",
  },
  {
    id: 40,
    type: "notice",
    title: "신학기 맞이 학생 우대 프로그램",
    content: "신학기를 맞아 학생 고객을 위한 우대 프로그램을 운영합니다.",
    date: "2024-03-01",
  },
  {
    id: 41,
    type: "press",
    title: "GME Remit, 송금 한도 상향 조정",
    excerpt: "고객 편의를 위해 1회 송금 한도를 상향 조정한다.",
    date: "2024-02-28",
    source: "한국경제TV",
  },
  {
    id: 42,
    type: "notice",
    title: "설 연휴 송금 서비스 안내 (2024)",
    content: "2024년 설 연휴 기간 송금 서비스 운영 안내입니다.",
    date: "2024-02-05",
  },
  {
    id: 43,
    type: "press",
    title: "GME Remit, 2023년 연간 보고서 발표",
    excerpt: "2023년 한 해 동안의 경영 성과와 향후 계획을 발표했다.",
    date: "2024-01-31",
    source: "서울파이낸스",
  },
  {
    id: 44,
    type: "notice",
    title: "1월 신규 가입 이벤트",
    content: "1월 한 달간 신규 가입 고객을 위한 특별 이벤트를 진행합니다.",
    date: "2024-01-10",
  },
  {
    id: 45,
    type: "press",
    title: "GME Remit, 신년 특별 수수료 할인 행사",
    excerpt: "새해를 맞아 모든 국가 송금 수수료를 특별 할인한다.",
    date: "2024-01-02",
    source: "매일경제",
  },
  {
    id: 46,
    type: "notice",
    title: "2024년 새해 인사",
    content: "2024년 새해를 맞아 고객 여러분께 감사 인사를 전합니다.",
    date: "2024-01-01"
  },
  {
    id: 47,
    type: "press",
    title: "GME Remit, 연말 감사 이벤트 성료",
    excerpt: "2023년 연말 감사 이벤트가 성황리에 마무리되었다.",
    date: "2023-12-31",
    source: "아주경제",
  },
  {
    id: 48,
    type: "notice",
    title: "연말정산 서류 발급 안내",
    content: "연말정산을 위한 송금 증빙 서류 발급 방법을 안내드립니다.",
    date: "2023-12-15",
  },
  {
    id: 49,
    type: "press",
    title: "GME Remit, 글로벌 송금 플랫폼 1위 달성",
    excerpt: "국내 해외송금 시장에서 이용자 수 1위를 달성했다.",
    date: "2023-12-10",
    source: "한국일보",
  },
  {
    id: 50,
    type: "notice",
    title: "겨울 시즌 고객 감사 이벤트",
    content: "겨울을 맞아 고객 감사 이벤트를 진행합니다.",
    date: "2023-12-01",
  },
  // Blog posts
  {
    id: 51,
    type: "blog",
    title: "방금 올라온 콘텐츠",
    description: "실시간 업데이트 소식 살펴보기",
    date: "2026.02.03",
  },
  {
    id: 52,
    type: "blog",
    title: "GME 결제 해택 총정리 2026년 2월",
    description: "",
    date: "2026.02.01"
  },
  {
    id: 53,
    type: "blog",
    title: "연말정산 부양가족·원세·대출·이로비: 국세청이 공개한 오답노트",
    description: "",
    date: "2026.01.30"
  },
  {
    id: 54,
    type: "blog",
    title: "Why should sending money be so hard?",
    description: "",
    date: "2026.01.29"
  },
  {
    id: 55,
    type: "blog",
    title: "이자는 언제 기회가 되고, 언제 위기가 될까?",
    description: "",
    date: "2026.01.20"
  },
  {
    id: 56,
    type: "blog",
    title: "2026년부터 이렇게 달라집니다: 새로운 금융·복지·노동 정책 26가지",
    description: "",
    date: "2026.01.14"
  },
  {
    id: 57,
    type: "blog",
    title: "GME 뮤직비디오 <Spectrum>, 영화관에서 만나요",
    description: "",
    date: "2026.01.09"
  },
  {
    id: 58,
    type: "blog",
    title: "GME 해택, 사용법 총정리 2026년 1월",
    description: "",
    date: "2026.01.01"
  },
  {
    id: 59,
    type: "blog",
    title: "슈퍼볼은 어떻게 지상 최대 스포츠 이벤트가 됐을까?",
    description: "",
    date: "2025.12.28"
  },
];

const ITEMS_PER_PAGE = 10;

export default function BoardPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("title");
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  // Lenis 부드러운 스크롤
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Get active tab from URL (default to "notice")
  const tabParam = searchParams.get("tab");
  const activeTab: TabType =
    tabParam === "press" ? "press" :
    tabParam === "blog" ? "blog" :
    "notice";

  // Filter entries by tab
  let filteredEntries = sampleData.filter((entry) => entry.type === activeTab);

  // Apply search filter
  if (searchQuery) {
    filteredEntries = filteredEntries.filter((entry) => {
      const query = searchQuery.toLowerCase();
      if (searchType === "title") {
        return entry.title.toLowerCase().includes(query);
      } else if (searchType === "content") {
        return (
          entry.content?.toLowerCase().includes(query) ||
          entry.excerpt?.toLowerCase().includes(query)
        );
      } else {
        // all
        return (
          entry.title.toLowerCase().includes(query) ||
          entry.content?.toLowerCase().includes(query) ||
          entry.excerpt?.toLowerCase().includes(query)
        );
      }
    });
  }

  const totalCount = filteredEntries.length;
  const displayedEntries = filteredEntries.slice(0, displayCount);
  const hasMore = displayCount < totalCount;

  const handleSearch = useCallback((query: string, type: string) => {
    setSearchQuery(query);
    setSearchType(type);
    setDisplayCount(ITEMS_PER_PAGE); // Reset to first page
  }, []);

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + ITEMS_PER_PAGE, totalCount));
  };

  // Get title based on active tab
  const getPageTitle = () => {
    switch (activeTab) {
      case "notice":
        return "공지사항";
      case "press":
        return "언론보도";
      case "blog":
        return "블로그";
      default:
        return "공지사항";
    }
  };

  return (
    <>
      <Header />
      <main className="pt-[82px] lg:pt-[120px] min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-16 lg:pt-20 pb-8 lg:pb-10 animate-fadeIn">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative inline-block">
              <div className="absolute -top-6 -left-2 w-20 h-20 bg-gradient-to-br from-[#ed1c24]/20 via-[#ed1c24]/10 to-transparent rounded-2xl" />
              <div className="absolute -top-4 left-0 w-4 h-4 bg-gradient-to-br from-[#ed1c24] to-[#ed1c24]/60 rounded-sm" />

              <p className="text-xs font-semibold text-[#ed1c24] tracking-[0.2em] mb-3 uppercase relative z-10">
                GME Remit의 새로운 소식을 확인하세요
              </p>
              <h1 className="text-3xl lg:text-5xl font-bold text-[#191c1f] tracking-tight relative z-10">
                {getPageTitle()}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pt-6 lg:pt-10 pb-16 lg:pb-24 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs */}
            <div className="mb-10">
              <BoardTabs activeTab={activeTab} />
            </div>

            {/* Total Count and Search */}
            <div className="flex items-center justify-between mb-6">
              {/* Total Count */}
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-gray-700">총</span>
                <span className="text-base font-bold text-[#ed1c24]">
                  {totalCount}건
                </span>
              </div>

              {/* Search Bar */}
              <SearchBar onSearch={handleSearch} />
            </div>

            {/* Table or Grid based on tab */}
            {activeTab === "blog" ? (
              <BlogGrid entries={displayedEntries} />
            ) : (
              <BoardTable entries={displayedEntries} />
            )}

            {/* Load More Pagination */}
            <Pagination
              currentCount={displayedEntries.length}
              totalCount={totalCount}
              hasMore={hasMore}
              onLoadMore={handleLoadMore}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
