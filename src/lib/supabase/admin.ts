import { createClient } from '@supabase/supabase-js'

/**
 * Service Role 클라이언트를 호출 시점에 만든다.
 * 모듈 최상위에서 만들면 키가 없는 빌드 단계에서 import만으로 실패한다.
 */
export function createSupabaseAdmin() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!serviceRoleKey) return null

  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, serviceRoleKey, {
    auth: { persistSession: false },
  })
}
