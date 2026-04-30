'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi2'
import BoardForm from '@/components/board/BoardForm'
import { useToast } from '@/components/ui/Toast'
import type { BoardFormData } from '@/types/board'
import {
  buildBoardSubmissionFormData,
  createImagePreview,
} from '@/lib/board-admin'
import { updateBoardEntryAction } from '@/app/gme-backoffice/board/actions'

interface EditBoardEntryClientProps {
  id: string
  initialFormData: BoardFormData
  initialImageUrl: string
}

export default function EditBoardEntryClient({
  id,
  initialFormData,
  initialImageUrl,
}: EditBoardEntryClientProps) {
  const router = useRouter()
  const toast = useToast()
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState<BoardFormData>(initialFormData)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(initialImageUrl || null)
  const [existingImageUrl] = useState(initialImageUrl)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      void createImagePreview(file).then(setImagePreview)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const result = await updateBoardEntryAction(
        buildBoardSubmissionFormData({
          id,
          formData,
          imageFile,
          existingImageUrl,
        })
      )

      if (!result.success) {
        throw new Error(result.error)
      }

      toast.success('게시글이 수정되었습니다.')
      setTimeout(() => router.push('/gme-backoffice/dashboard'), 800)
    } catch {
      toast.error('게시글 수정 중 오류가 발생했습니다.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/gme-backoffice/dashboard"
          className="inline-flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-gray-600 mb-5 transition-colors"
        >
          <HiArrowLeft className="w-4 h-4" />
          <span>돌아가기</span>
        </Link>
        <h1 className="text-[22px] font-bold text-gray-900">게시글 수정</h1>
        <p className="text-[14px] text-gray-500 mt-1">게시글 내용을 수정합니다</p>
      </div>

      <BoardForm
        formData={formData}
        onChange={setFormData}
        imageFile={imageFile}
        imagePreview={imagePreview}
        onImageChange={handleImageChange}
        onSubmit={handleSubmit}
        submitting={saving}
        submitLabel="수정 완료"
        submittingLabel="저장 중..."
      />
    </div>
  )
}
