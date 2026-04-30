import { redirect } from 'next/navigation'
import EditBoardEntryClient from '@/components/admin/EditBoardEntryClient'
import { fetchBoardEntryById, toBoardFormData } from '@/lib/board-admin'
import { createServer } from '@/lib/supabase/server'

interface EditBoardEntryPageProps {
  params: Promise<{
    id: string;
  }>
}

export default async function EditBoardEntryPage({
  params,
}: EditBoardEntryPageProps) {
  const { id } = await params
  const supabase = await createServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/gme-backoffice/login')
  }

  let entry

  try {
    entry = await fetchBoardEntryById(supabase, id)
  } catch {
    redirect('/gme-backoffice/dashboard')
  }

  return (
    <EditBoardEntryClient
      id={id}
      initialFormData={toBoardFormData(entry)}
      initialImageUrl={entry.image_url || ''}
    />
  )
}
