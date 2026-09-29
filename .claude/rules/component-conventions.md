# 컴포넌트 작성 규칙

기준 구현은 `src/components/support/inquiry/` 다. 새 화면을 만들 때 이 구조를 따른다.

## 폴더 구조

```
<feature>/
├── types.ts              타입 정의
├── constants.ts          화면에 쓰이는 데이터 (문구, 목록, 설정값)
├── api.ts                API 호출 함수
├── molecules/
│   ├── index.ts          barrel export
│   ├── styles.ts         molecule 끼리 공유하는 스타일
│   └── <Component>/
│       ├── index.tsx
│       └── styles.ts
├── organisms/
│   ├── index.ts
│   └── <Component>/
│       ├── index.tsx
│       └── styles.ts
└── templates/
    ├── index.tsx
    └── styles.ts
```

아토믹 디자인을 쓰되 **최소 단위는 molecule** 이다. `atoms/` 를 만들지 않는다. 더 잘게 나눠도 얻는 것 없이 트리만 깊어진다.

각 컴포넌트는 자기 폴더에 `index.tsx` 를 두고, 같은 레벨의 `index.ts` 에서 barrel 로 내보낸다.

### 파일을 두는 위치

**실제로 쓰는 곳에 가장 가까운 곳에 둔다.** 공용 스타일이 molecule 두 곳에서만 쓰이면 `molecules/styles.ts` 에 두지, feature 최상위로 올리지 않는다. 최상위는 feature 전체가 쓰는 것만 둔다.

## import 경로

폴더 밖을 참조할 때는 **`@` 별칭**을 쓴다. `../../` 로 올라가지 않는다.

```ts
// 나쁨
import { EMPTY_FORM } from "../../constants";
import FieldLabel from "../FieldLabel";

// 좋음
import { EMPTY_FORM } from "@/components/support/inquiry/constants";
import FieldLabel from "@/components/support/inquiry/molecules/FieldLabel";
```

같은 폴더 안은 `./` 를 쓴다. 같은 폴더라는 사실이 드러나는 편이 낫다.

```ts
import * as S from "./styles";
```

## 함수 이름

무엇을 하는지 이름에서 드러나야 한다. `handleSubmit`, `handleClick` 처럼 이벤트 이름만 붙이지 않는다.

```ts
// 나쁨
const handleSubmit = () => { ... };
const handleToken = () => { ... };

// 좋음
const submitInquiryForm = () => { ... };
const updateTurnstileToken = () => { ... };
```

Boolean 을 돌려주는 함수는 `is / has / can / should` 접두를 쓴다. 반환값의 방향이 이름에 박혀 있어야 호출부에서 헷갈리지 않는다.

```ts
// 나쁨 — 통과가 true 인지 에러가 true 인지 모른다
if (validateForm()) return;
if (checkedValidation()) return;

// 좋음
if (hasValidationError()) return;
```

props 로 받는 콜백은 예외다. `onSubmit`, `onReset` 처럼 `on<Event>` 를 쓴다.

## 스타일 분리

**요소가 5개 이상이거나 클래스 변수가 5개 이상 필요할 때** `styles.ts` 로 뺀다. 그보다 작으면 인라인 `className` 이 낫다.

```tsx
import * as S from "./styles";

<div className={S.InquiryFormDeptBox}>
```

### 이름 규칙

공용 컴포넌트가 아니므로 **어느 화면의 어느 요소인지** 이름에 담는다. 전역 검색으로 찾을 수 있어야 한다.

```
<화면><컴포넌트><파트>
```

```ts
// 나쁨 — 다른 화면과 겹쳐서 검색이 안 된다
export const Wrapper = "...";
export const Title = "...";

// 좋음
export const InquiryFormFieldWrapper = "...";
export const InquiryGuidePanelTitle = "...";
```

## 단일 책임

함수 하나는 한 가지만 한다.

- API 호출은 각각 `api.ts` 의 함수로 분리한다. 한 함수 안에서 `fetch` 를 여러 번 부르지 않는다
- 이벤트 핸들러는 그 함수들을 **순서대로 부르기만** 한다
- 앞 단계의 결과를 확인한 뒤 다음 단계로 넘어간다. 여러 `await` 를 먼저 실행하고 나중에 한꺼번에 검사하지 않는다

```ts
const submitInquiryForm = async (e: React.FormEvent) => {
  e.preventDefault();
  if (isSubmitting) return;

  if (hasValidationError()) return;

  setIsSubmitting(true);

  const isHuman = await getVerifyTurnstileToken();
  if (!isHuman) return;

  const isSent = await postSendInquiryEmail();
  if (!isSent) return;

  onSubmitted();
};
```

## 주석

**코드에 주석을 달지 않는다.** 이름으로 드러내는 것이 원칙이다. 주석이 필요하다고 느끼면 이름이나 구조가 잘못된 것이다.

예외는 `api.ts` 다. 외부와의 계약이라 문서화 대상이므로 JSDoc 을 단다. 어떤 동작을 하는지, 무엇을 받는지, 응답이 어떻게 처리되는지를 적는다.

```ts
/**
 * Turnstile 토큰이 유효한지 서버에 확인한다.
 *
 * 토큰은 1회용이라 이 함수를 부르는 순간 소진된다.
 *
 * @param token - Turnstile 위젯이 발급한 토큰
 * @returns `success` 가 `true` 면 사람, `false` 면 봇이거나 토큰이 만료된 경우
 * @throws {Error} 서버가 2xx 가 아닌 응답을 준 경우
 *
 * @example
 * const { success } = await verifyTurnstileToken(token);
 */
```

## 서버 호출

비밀 값이나 CORS 제약이 있는 외부 API 는 **반드시 `src/app/api/**/route.ts` 를 거친다.**

`api.ts` 의 코드는 브라우저 번들에 그대로 실린다. 다음은 route 에만 둔다.

- `NEXT_PUBLIC_` 이 없는 환경변수 (API 키, 시크릿)
- 수신 이메일 주소처럼 크롤러에 노출되면 안 되는 값
- 브라우저에서 CORS 로 막히는 엔드포인트

```
브라우저                      서버
api.ts                    route.ts
 fetch("/api/inquiry") ──→ RESEND_API_KEY, 수신 주소
                           → api.resend.com
```

## 타입

- 객체 모양은 `interface`, 유니온·유틸리티는 `type`
- 이름은 PascalCase. `sendInquiryEmailResponse` 처럼 소문자로 시작하면 함수로 보인다
- `any` 금지. 응답 타입을 정의해서 흘린다
