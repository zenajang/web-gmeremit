// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip')?.trim() ?? '';
}

function isIpAllowed(req: NextRequest): boolean {
  const raw = process.env.ADMIN_ALLOWED_IPS?.trim();
  if (!raw) return true;

  const allowList = raw.split(',').map((ip) => ip.trim()).filter(Boolean);
  if (allowList.length === 0) return true;

  return allowList.includes(getClientIp(req));
}

const VISITOR_COOKIE_NAME = 'vid';
const VISITOR_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

/** 페이지를 실제로 연 방문자에게만 익명 ID를 심는다. API 직접 호출에는 발급되지 않는다 */
function issueVisitorCookie(req: NextRequest, res: NextResponse) {
  if (req.cookies.has(VISITOR_COOKIE_NAME)) return;

  res.cookies.set(VISITOR_COOKIE_NAME, crypto.randomUUID(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: true,
    path: '/',
    maxAge: VISITOR_COOKIE_MAX_AGE,
  });
}

export async function middleware(req: NextRequest) {
  if (!req.nextUrl.pathname.startsWith('/gme-ops')) {
    const res = NextResponse.next();
    issueVisitorCookie(req, res);
    return res;
  }

  if (!isIpAllowed(req)) {
    return NextResponse.rewrite(new URL('/404-ip-restricted', req.url), {
      headers: { 'X-Robots-Tag': 'noindex, nofollow' },
    });
  }

  const res = NextResponse.next();
  res.headers.set('X-Robots-Tag', 'noindex, nofollow');

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            res.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();

  if (!user && req.nextUrl.pathname !== '/gme-ops/login') {
    const url = new URL('/gme-ops/login', req.url);
    return NextResponse.redirect(url);
  }
  return res;
}

export const config = {
  matcher: [
    // 페이지 요청만 통과시킨다. API, 정적 파일, Next 내부 경로는 제외
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.[a-zA-Z0-9]+$).*)',
  ],
};
