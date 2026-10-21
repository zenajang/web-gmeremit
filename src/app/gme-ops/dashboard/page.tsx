import { redirect } from 'next/navigation'
import { AdminDashboardTemplate } from '@/components/admin/templates'
import { fetchBoardCounts, fetchBoardEntries } from '@/lib/board-admin'
import { createServer } from '@/lib/supabase/server'

interface DashboardPageProps {
  searchParams?: Promise<{
    filter?: string;
  }>
}

export default async function AdminDashboardPage({ searchParams }: DashboardPageProps) {
  const params = await searchParams
  const filter =
    params?.filter === 'notice' || params?.filter === 'press' || params?.filter === 'blog'
      ? params.filter
      : 'all'

  const supabase = await createServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/gme-ops/login')
  }

  const [entries, totalCounts] = await Promise.all([
    fetchBoardEntries(supabase, filter),
    fetchBoardCounts(supabase),
  ])

  return (
    <AdminDashboardTemplate
      entries={entries}
      totalCounts={totalCounts}
      activeFilter={filter}
    />
  )
}
