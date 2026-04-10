# Project Instructions

## Skills

Load custom skills from `.claude/skills/` directory for enhanced capabilities.

### Available Skills

1. **[frontend-design.md](.claude/skills/frontend-design.md)** - Design thinking & aesthetic guidelines
   - Prioritize distinctive, production-grade UI
   - Avoid generic AI aesthetics
   - Choose unique typography, cohesive color palettes
   - Use intentional motion and spatial composition

2. **[ui-ux-pro-max.md](.claude/skills/ui-ux-pro-max.md)** - Comprehensive UI/UX intelligence
   - 50+ styles, 97 color palettes, 57 font pairings
   - Priority-based rules (Accessibility, Touch, Performance, Layout)
   - Pre-delivery checklists
   - Chart type selection guide
   - Light/Dark mode contrast rules

### UI/UX Guidelines for Korean Fintech

**Design Principles:**
- Clean, minimal interfaces (Toss, Kakao style)
- Trust-building elements (statistics, certifications)
- Professional typography hierarchy
- Purposeful whitespace
- Subtle shadows and borders

**Color System:**
- Primary: #ed1c24 (GME Red)
- Dark: #191c1f
- Surface: #fafafa, #f5f6f7
- Text: Gray scale with proper contrast

**Typography:**
- Korean: System fonts or Pretendard
- English: Clean sans-serif
- Clear hierarchy (heading, body, caption)

**Components:**
- Rounded corners (xl to 3xl)
- Soft shadows
- Clear visual feedback on interactions
- Mobile-first responsive design

---

## Recent Refactor: 코드 구조 개선 및 컴포넌트 분리

### Summary

- Board 페이지의 데이터 fetching / 검색 로직을 커스텀 훅과 유틸로 분리
- Header 언어 선택 UI의 Desktop/Mobile 중복 코드를 공통 컴포넌트로 통합
- BoardForm 내 타입별 필드를 개별 컴포넌트로 추출
- Next.js Image 최적화 적용

### Changes

#### 1. `useBoardEntries` 훅 추출 (신규)

| 파일 | 변경 |
|------|------|
| `src/hooks/useBoardEntries.ts` | **신규** — Supabase fetch 로직을 `board/page.tsx`에서 분리 |
| `src/app/board/page.tsx` | fetch/state 로직 제거, `useBoardEntries` 훅으로 대체 |

- `useEffect` + cleanup(`cancelled` flag) 패턴 적용
- 페이지 컴포넌트가 UI 렌더링에만 집중하도록 개선

#### 2. `boardEntries` 유틸 추출 (신규)

| 파일 | 변경 |
|------|------|
| `src/utils/boardEntries.ts` | **신규** — `getBoardTab()`, `filterBoardEntries()`, `BoardSearchType` 타입 |
| `src/app/board/page.tsx` | 인라인 필터링 로직 제거, `useMemo` + 유틸 함수로 대체 |
| `src/components/board/SearchBar.tsx` | `string` → `BoardSearchType` 타입 적용 |

#### 3. `LanguageOptionList` 공통 컴포넌트 (신규)

| 파일 | 변경 |
|------|------|
| `src/components/header/LanguageOptionList.tsx` | **신규** — render prop 패턴으로 언어 목록 로직 통합 |
| `src/components/header/DesktopNav.tsx` | 언어 반복 렌더링 → `LanguageOptionList` 사용 |
| `src/components/header/MobileNav.tsx` | 동일하게 `LanguageOptionList`로 교체 |

- `useLanguage`, `languages` import가 각 Nav에서 제거됨
- 언어 선택 로직 변경 시 한 곳만 수정하면 됨

#### 4. 기타

| 파일 | 변경 |
|------|------|
| `src/app/services/remittance/page.tsx` | `<img>` → Next.js `<Image fill>` 전환 |
| `.gitignore` | `REFACTORING.md` 추가 |

### Test Plan

- [ ] Board 페이지 — 공지/보도/블로그 탭 전환 및 데이터 로딩 확인
- [ ] Board 페이지 — 제목/내용/전체 검색 동작 확인
- [ ] Header — 데스크탑/모바일 언어 선택 동작 확인
- [ ] Board 관리 — 공지/보도/블로그 폼 작성 및 수정 확인
- [ ] 송금 페이지 — 세계지도 이미지 정상 렌더링 확인

---

## 프로젝트 인수인계 문서

### 1. 기술 스택

| 영역 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | Next.js (App Router) | 16.1.1 |
| UI | React | 19.2.3 |
| 언어 | TypeScript | 5.x |
| 스타일 | Tailwind CSS | 4.x |
| DB / 인증 | Supabase | 2.93.3 |
| 다국어 | next-intl + Lokalise | 4.8.2 |
| 에디터 | Tiptap | 3.19.0 |
| 스크롤 | Lenis | 1.3.17 |
| 폰트 | Pretendard (로컬) | 1.3.9 |
| 배포 | Vercel | - |

### 2. 프로젝트 구조

```
src/
├── app/                        # 페이지 라우팅 (Next.js App Router)
│   ├── gme-backoffice/         # 관리자 페이지 (middleware로 인증 보호)
│   │   ├── board/              # 게시판 관리 (CRUD)
│   │   ├── dashboard/          # 관리자 대시보드
│   │   └── login/              # 관리자 로그인
│   ├── board/                  # 공개 게시판 (공지/보도/블로그)
│   ├── services/               # 서비스 페이지 (송금, 대출, 카드, 결제)
│   ├── support/                # 지원 페이지 (지점 안내, SNS 채널)
│   ├── company/                # 회사 소개
│   ├── api/exchange-rate/      # 환율 API 엔드포인트
│   └── layout.tsx              # 루트 레이아웃 (Provider 설정)
│
├── components/                 # 컴포넌트
│   ├── header/                 # 헤더 (DesktopNav, MobileNav, LanguageOptionList)
│   ├── board/                  # 게시판 (BoardForm, SearchBar, BoardTable 등)
│   ├── home/                   # 메인 페이지
│   ├── service/                # 서비스 페이지
│   ├── admin/                  # 관리자 전용
│   ├── ui/                     # 공통 UI (DotLoader 등)
│   └── layout/                 # 레이아웃 (PublicLayout 등)
│
├── contexts/                   # 전역 상태 (Context API)
│   ├── LanguageContext.tsx      # 다국어 (17개 언어, 쿠키 + localStorage 저장)
│   └── AuthContext.tsx          # 인증 상태
│
├── hooks/                      # 커스텀 훅
│   ├── useBoardEntries.ts      # 게시판 데이터 fetch (Supabase)
│   ├── useTranslation.ts       # 번역
│   ├── useScrollFadeIn.ts      # 스크롤 애니메이션
│   ├── useLenis.ts             # 부드러운 스크롤
│   └── useClickOutside.ts      # 외부 클릭 감지
│
├── utils/                      # 유틸 함수
│   ├── boardEntries.ts         # 게시판 필터링, 검색, 탭 유틸
│   ├── board.ts                # 게시판 유틸
│   └── scroll.ts               # 스크롤 유틸
│
├── lib/                        # 라이브러리 설정
│   ├── supabase/
│   │   ├── client.ts           # 브라우저용 클라이언트 (싱글톤)
│   │   ├── server.ts           # 서버 컴포넌트용
│   │   └── server-action.ts    # Server Action용
│   ├── board-admin.ts          # 게시판 CRUD (생성/수정/삭제)
│   └── language.ts             # 언어 설정 (17개 언어 목록)
│
├── types/                      # 타입 정의
│   └── board.ts                # BoardEntry, BoardFormData, TabType
│
└── data/                       # 정적 데이터
    ├── branches.ts             # 지점 위치 정보
    ├── countries.ts            # 국가 목록
    ├── headerMenu.tsx          # 헤더 메뉴 구조
    └── ...                     # 서비스별 데이터 파일
```

### 3. 주요 흐름

#### 인증
```
관리자 접속 (/gme-backoffice)
→ middleware.ts에서 Supabase 세션 확인
→ 미인증 시 로그인 페이지로 리다이렉트
→ 인증 완료 시 JWT 토큰을 쿠키에 저장 (Supabase 자동 처리)
```

#### 게시판 데이터 흐름
```
board/page.tsx
→ useBoardEntries(activeTab) 훅으로 Supabase에서 데이터 fetch
→ filterBoardEntries()로 검색/필터링 (useMemo)
→ BoardTable 또는 BlogGrid로 렌더링
```

#### 다국어
```
LanguageContext (Provider)
→ useTranslation() 훅으로 번역 키 접근
→ 번역 파일은 Lokalise에서 관리 (npm run i18n:sync)
→ 언어 설정은 쿠키 + localStorage에 저장
```

### 4. Supabase 연동

#### 테이블
| 테이블 | 용도 |
|--------|------|
| `board_entries` | 게시판 (공지/보도/블로그) |

#### 스토리지 버킷
| 버킷 | 용도 |
|------|------|
| `blog-images` | 블로그 이미지 |
| `press-images` | 보도자료 썸네일 |
| `board-attachments` | 첨부파일 |

#### CRUD 함수 (`src/lib/board-admin.ts`)
| 함수 | 역할 |
|------|------|
| `fetchBoardEntries()` | 목록 조회 |
| `fetchBoardEntryById()` | 단건 조회 |
| `fetchBoardCounts()` | 타입별 카운트 |
| `createBoardEntry()` | 생성 (파일 업로드 포함) |
| `updateBoardEntry()` | 수정 |
| `deleteBoardEntry()` | 삭제 |

### 5. 보안

| 보안 요소 | 기술 | 위치 |
|----------|------|------|
| 접근 차단 | Vercel Edge Middleware (Geo IP) | 서버 앞단 |
| 인증 | Supabase JWT | 쿠키 (httpOnly) |
| 권한 관리 | Supabase RLS | DB 레벨 |
| 통신 암호화 | HTTPS (SSL/TLS) | Vercel 자동 적용 |
| API 출처 제한 | CORS | Supabase 자동 처리 |

### 6. 개발 환경

```bash
# 설치
npm install

# 개발 서버 실행
npm run dev          # http://localhost:3000

# 빌드
npm run build

# 번역 동기화 (Lokalise)
npm run i18n:sync
```

#### 환경변수 (.env)
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

### 7. 배포

- **플랫폼**: Vercel
- **브랜치**: `main` 푸시 시 자동 배포
- **빌드 출력**: standalone 모드 (`next.config.ts`)

### 8. 접근 정보

> 아래 항목을 채워서 후임자에게 전달할 것 (git에 커밋하지 말 것)

#### Supabase
- 대시보드 URL:
- 프로젝트 ID:
- 관리자 계정 (email):
- NEXT_PUBLIC_SUPABASE_URL:
- NEXT_PUBLIC_SUPABASE_ANON_KEY:
- SUPABASE_SERVICE_ROLE_KEY (있다면):

#### Vercel
- 대시보드 URL:
- 팀/프로젝트 이름:
- 프로덕션 도메인:
- 관리자 계정 (email):

#### Lokalise (다국어)
- 대시보드 URL:
- 프로젝트 ID:
- API 토큰:

#### 도메인 / DNS
- 도메인 관리 서비스:
- 관리자 계정:
- 도메인 만료일:

#### 카카오맵 API
- 카카오 개발자 앱 URL:
- JavaScript 앱 키:

#### 기타 계정
- 서비스명 / 용도 / 계정:
- 서비스명 / 용도 / 계정:

### 9. 비즈니스 맥락

> 기획 의도나 결정 배경을 기록

- 서비스 대상:
- 주요 기능 우선순위:
- 향후 개발 계획:
- 알려진 이슈 / 기술 부채:
- 담당자 연락처 (기획):
- 담당자 연락처 (디자인):

### 10. Geo IP 차단 (Vercel Edge Middleware)

> 현재 `middleware.ts`에는 관리자 인증만 구현되어 있음
> Geo IP 차단은 **Vercel 대시보드**에서 설정하거나 별도 로직 추가 필요

- Vercel에서 제공하는 `request.geo.country` 값으로 국가 판별
- 허용 국가 외 접속 시 차단 응답 반환
- 현재 허용 국가:
- 차단 방식 (Vercel 대시보드 / 코드):

### 11. SEO 설정

- `layout.tsx`에 OpenGraph, Twitter Card, Google 검색 인증 설정 완료
- `robots`: index, follow 허용
- Google Search Console 인증 키: 설정됨
- 프로덕션 URL: https://www.gmeremit.com
- `sitemap.xml` 여부:
- `robots.txt` 여부:

### 12. 글로벌 컴포넌트 (layout.tsx)

```
RootLayout
├── AuthProvider          # 인증 상태
├── LanguageProvider      # 다국어 (쿠키에서 초기 언어 읽음)
├── {children}            # 페이지 콘텐츠
├── ScrollToTop           # 맨 위로 스크롤 버튼
└── KakaoFloatingButton   # 카카오 상담 플로팅 버튼
```

### 13. 다국어 스크립트

- `npm run i18n:pull` — Lokalise에서 번역 파일 다운로드
- `npm run i18n:push` — 로컬 번역 파일을 Lokalise에 업로드
- 스크립트 위치: `scripts/lokalise-sync.mjs`
- 실행 시 Lokalise API 토큰 필요 (환경변수 또는 `.env`)

### 14. Next.js 설정 (`next.config.ts`)

- `output: 'standalone'` — Vercel 배포용 독립 빌드
- `images.remotePatterns` — Supabase 스토리지 이미지 허용
- Supabase 호스트: `xefbrjypqyzabuanliuc.supabase.co`

### 15. 테스트

- 현재 테스트 코드 없음
- 테스트 프레임워크 미설치 (Vitest, Jest 등)
- 도입 시 참고: `src/utils/boardEntries.ts` 유틸 함수부터 시작 추천

### 16. 주의사항

- Supabase 클라이언트는 `client.ts`에서 **싱글톤 패턴**으로 생성됨 — 직접 `createClient()` 호출하지 말 것
- 게시판 타입은 `notice | press | blog` 3가지 — 타입 추가 시 `types/board.ts` 수정 필요
- 다국어 키 추가 시 Lokalise에서 작업 후 `npm run i18n:sync`로 동기화
- 이미지는 반드시 Next.js `<Image>` 컴포넌트 사용 (Lighthouse 최적화)
- 관리자 페이지(`/gme-backoffice`)는 `middleware.ts`에서 인증 체크됨
- **8번 접근 정보는 절대 git에 커밋하지 말 것** — 별도 문서로 전달 권장
- `next.config.ts`의 Supabase 호스트명 변경 시 이미지 로딩 깨짐 — 프로젝트 이관 시 주의
- `dompurify`로 HTML 새니타이징 처리 중 — 게시판 콘텐츠 렌더링 시 XSS 방지 용도
