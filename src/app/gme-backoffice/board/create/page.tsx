'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { HiArrowLeft } from 'react-icons/hi2'
import Link from 'next/link'
import BoardForm, { BoardFormData } from '@/components/board/BoardForm'

export default function CreateBoardEntryPage() {
  const router = useRouter()
  const supabase = createClient()
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
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
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
      let imageUrl = ''
      let attachmentUrl = ''
      let attachmentName = ''

      // Upload image if exists (for blog or press)
      if (imageFile && (formData.type === 'blog' || formData.type === 'press')) {
        const fileExt = imageFile.name.split('.').pop()
        const fileName = `${Date.now()}.${fileExt}`
        const bucketName = formData.type === 'blog' ? 'blog-images' : 'press-images'
        const { error } = await supabase.storage
          .from(bucketName)
          .upload(fileName, imageFile)

        if (error) throw error

        const { data: { publicUrl } } = supabase.storage
          .from(bucketName)
          .getPublicUrl(fileName)

        imageUrl = publicUrl
      }

      // Upload attachment if exists
      if (attachmentFile) {
        const fileExt = attachmentFile.name.split('.').pop()
        const fileName = `${Date.now()}.${fileExt}`
        const { error } = await supabase.storage
          .from('board-attachments')
          .upload(fileName, attachmentFile)

        if (error) throw error

        const { data: { publicUrl } } = supabase.storage
          .from('board-attachments')
          .getPublicUrl(fileName)

        attachmentUrl = publicUrl
        attachmentName = attachmentFile.name
      }

      // Format date to YYYY.MM.DD
      const formattedDate = formData.date.replace(/-/g, '.')

      // Insert board entry
      const { error } = await supabase.from('board_entries').insert({
        type: formData.type,
        title: formData.title,
        content: formData.content || null,
        date: formattedDate,
        is_important: formData.isImportant,
        has_attachment: !!attachmentFile,
        attachment_url: attachmentUrl || null,
        attachment_name: attachmentName || null,
        source: formData.source || null,
        excerpt: formData.excerpt || null,
        image_url: imageUrl || null,
        description: formData.description || null,
      })

      if (error) throw error

      alert('게시글이 등록되었습니다.')
      router.push('/gme-backoffice/dashboard')
    } catch (error) {
      console.error('Error creating entry:', error)
      alert('게시글 등록 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/gme-backoffice/dashboard"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-4 transition-colors"
        >
          <HiArrowLeft className="w-5 h-5" />
          <span>대시보드로 돌아가기</span>
        </Link>
        <h1 className="typo-stat">새 게시글 작성</h1>
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
