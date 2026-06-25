'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { HiArrowLeft } from 'react-icons/hi2'
import Link from 'next/link'
import BoardForm from '@/components/board/BoardForm'
import { useToast } from '@/components/ui/Toast'
import { BoardFormData } from '@/types/board'
import {
  buildBoardSubmissionFormData,
  createImagePreview,
} from '@/lib/board-admin'
import { createBoardEntryAction } from '@/app/gme-backoffice/board/actions'

export default function CreateBoardEntryPage() {
  const router = useRouter()
  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<BoardFormData>({
    type: 'notice',
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    isImportant: false,
    source: '',
    excerpt: '',
    description: '',
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [attachmentFile, setAttachmentFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      void createImagePreview(file).then(setImagePreview)
    }
  }

  const handleAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setAttachmentFile(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await createBoardEntryAction(buildBoardSubmissionFormData({
        formData,
        imageFile,
        attachmentFile,
      }))

      if (!result.success) {
        throw new Error(result.error)
      }

      toast.success('게시글이 등록되었습니다.')
      setTimeout(() => router.push('/gme-backoffice/dashboard'), 800)
    } catch {
      toast.error('게시글 등록 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
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
        <h1 className="text-[22px] font-bold text-gray-900">새 게시글 작성</h1>
        <p className="text-[14px] text-gray-500 mt-1">새로운 게시글을 작성합니다</p>
      </div>

      <BoardForm
        formData={formData}
        onChange={setFormData}
        imageFile={imageFile}
        imagePreview={imagePreview}
        onImageChange={handleImageChange}
        attachmentFile={attachmentFile}
        onAttachmentChange={handleAttachmentChange}
        onSubmit={handleSubmit}
        submitting={loading}
        submitLabel="게시글 등록"
        submittingLabel="등록 중..."
      />
    </div>
  )
}
