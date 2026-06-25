'use server'

import { revalidatePath } from 'next/cache'
import { createServerAction } from '@/lib/supabase/server-action'
import {
  createBoardEntry,
  deleteBoardEntry,
  updateBoardEntry,
} from '@/lib/board-admin'
import type { BoardEntryType, BoardFormData } from '@/types/board'

interface BoardActionResult {
  success: boolean
  error?: string
}

function getStringValue(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === 'string' ? value : ''
}

function getOptionalFileValue(formData: FormData, key: string) {
  const value = formData.get(key)
  return value instanceof File && value.size > 0 ? value : null
}

function parseBoardFormData(formData: FormData): BoardFormData {
  return {
    type: getStringValue(formData, 'type') as BoardEntryType,
    title: getStringValue(formData, 'title'),
    content: getStringValue(formData, 'content'),
    date: getStringValue(formData, 'date'),
    isImportant: getStringValue(formData, 'isImportant') === 'true',
    source: getStringValue(formData, 'source'),
    excerpt: getStringValue(formData, 'excerpt'),
    description: getStringValue(formData, 'description'),
  }
}

async function ensureAuthenticated() {
  const supabase = await createServerAction()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  return supabase
}

function revalidateBoardPaths() {
  revalidatePath('/gme-backoffice/dashboard')
  revalidatePath('/board')
  revalidatePath('/board/notice')
  revalidatePath('/board/press')
  revalidatePath('/board/blog')
}

export async function createBoardEntryAction(
  payload: FormData
): Promise<BoardActionResult> {
  const supabase = await ensureAuthenticated()

  if (!supabase) {
    return { success: false, error: '로그인이 필요합니다.' }
  }

  try {
    await createBoardEntry(supabase, {
      formData: parseBoardFormData(payload),
      imageFile: getOptionalFileValue(payload, 'imageFile'),
      attachmentFile: getOptionalFileValue(payload, 'attachmentFile'),
    })

    revalidateBoardPaths()
    return { success: true }
  } catch {
    return { success: false, error: '게시글 등록 중 오류가 발생했습니다.' }
  }
}

export async function updateBoardEntryAction(
  payload: FormData
): Promise<BoardActionResult> {
  const supabase = await ensureAuthenticated()

  if (!supabase) {
    return { success: false, error: '로그인이 필요합니다.' }
  }

  const id = getStringValue(payload, 'id')

  if (!id) {
    return { success: false, error: '게시글 ID가 없습니다.' }
  }

  try {
    await updateBoardEntry(supabase, {
      id,
      formData: parseBoardFormData(payload),
      imageFile: getOptionalFileValue(payload, 'imageFile'),
      existingImageUrl: getStringValue(payload, 'existingImageUrl'),
    })

    revalidateBoardPaths()
    revalidatePath(`/board/${id}`)
    return { success: true }
  } catch {
    return { success: false, error: '게시글 수정 중 오류가 발생했습니다.' }
  }
}

export async function deleteBoardEntryAction(
  id: number
): Promise<BoardActionResult> {
  const supabase = await ensureAuthenticated()

  if (!supabase) {
    return { success: false, error: '로그인이 필요합니다.' }
  }

  try {
    await deleteBoardEntry(supabase, id)
    revalidateBoardPaths()
    revalidatePath(`/board/${id}`)
    return { success: true }
  } catch {
    return { success: false, error: '삭제 중 오류가 발생했습니다.' }
  }
}
