'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { BoardEntryType } from '@/types/board'
import { HiArrowLeft, HiArrowUpTray } from 'react-icons/hi2'
import Link from 'next/link'

export default function CreateBoardEntryPage() {
  const router = useRouter()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    type: 'notice' as BoardEntryType,
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    isImportant: false,
    hasAttachment: false,
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
      setFormData({ ...formData, hasAttachment: true })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      let imageUrl = ''
      let attachmentUrl = ''
      let attachmentName = ''

      // Upload blog image if exists
      if (imageFile && formData.type === 'blog') {
        const fileExt = imageFile.name.split('.').pop()
        const fileName = `${Date.now()}.${fileExt}`
        const { data, error } = await supabase.storage
          .from('blog-images')
          .upload(fileName, imageFile)

        if (error) throw error

        const { data: { publicUrl } } = supabase.storage
          .from('blog-images')
          .getPublicUrl(fileName)

        imageUrl = publicUrl
      }

      // Upload attachment if exists
      if (attachmentFile) {
        const fileExt = attachmentFile.name.split('.').pop()
        const fileName = `${Date.now()}.${fileExt}`
        const { data, error } = await supabase.storage
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
        has_attachment: formData.hasAttachment,
        attachment_url: attachmentUrl || null,
        attachment_name: attachmentName || null,
        source: formData.source || null,
        excerpt: formData.excerpt || null,
        image_url: imageUrl || null,
        description: formData.description || null,
      })

      if (error) throw error

      alert('게시글이 등록되었습니다.')
      router.push('/admin/dashboard')
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
          href="/admin/dashboard"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#ed1c24] mb-4 transition-colors"
        >
          <HiArrowLeft className="w-5 h-5" />
          <span>대시보드로 돌아가기</span>
        </Link>
        <h1 className="text-3xl font-bold text-[#191c1f]">새 게시글 작성</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          {/* Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              게시글 유형 *
            </label>
            <div className="flex gap-4">
              {(['notice', 'press', 'blog'] as BoardEntryType[]).map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    checked={formData.type === type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as BoardEntryType })}
                    className="w-4 h-4 text-[#ed1c24] focus:ring-[#ed1c24]"
                  />
                  <span className="text-gray-700">
                    {type === 'notice' ? '공지사항' : type === 'press' ? '언론보도' : '블로그'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
              제목 *
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ed1c24] focus:border-transparent outline-none"
              placeholder="제목을 입력하세요"
            />
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
              날짜 *
            </label>
            <input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ed1c24] focus:border-transparent outline-none"
            />
          </div>

          {/* Content */}
          {formData.type !== 'blog' && (
            <div>
              <label htmlFor="content" className="block text-sm font-semibold text-gray-700 mb-2">
                내용 *
              </label>
              <textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
                rows={10}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ed1c24] focus:border-transparent outline-none resize-y"
                placeholder="내용을 입력하세요"
              />
            </div>
          )}

          {/* Important (Notice only) */}
          {formData.type === 'notice' && (
            <div className="flex items-center gap-2">
              <input
                id="important"
                type="checkbox"
                checked={formData.isImportant}
                onChange={(e) => setFormData({ ...formData, isImportant: e.target.checked })}
                className="w-4 h-4 text-[#ed1c24] focus:ring-[#ed1c24] rounded"
              />
              <label htmlFor="important" className="text-sm text-gray-700">
                중요 공지 (상단 고정)
              </label>
            </div>
          )}

          {/* Press-specific fields */}
          {formData.type === 'press' && (
            <>
              <div>
                <label htmlFor="source" className="block text-sm font-semibold text-gray-700 mb-2">
                  언론사
                </label>
                <input
                  id="source"
                  type="text"
                  value={formData.source}
                  onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ed1c24] focus:border-transparent outline-none"
                  placeholder="예: 매일경제"
                />
              </div>
              <div>
                <label htmlFor="excerpt" className="block text-sm font-semibold text-gray-700 mb-2">
                  요약
                </label>
                <textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ed1c24] focus:border-transparent outline-none"
                  placeholder="간단한 요약을 입력하세요"
                />
              </div>
            </>
          )}

          {/* Blog-specific fields */}
          {formData.type === 'blog' && (
            <>
              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  설명
                </label>
                <input
                  id="description"
                  type="text"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ed1c24] focus:border-transparent outline-none"
                  placeholder="짧은 설명을 입력하세요"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  썸네일 이미지
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                    <HiArrowUpTray className="w-5 h-5" />
                    <span>이미지 선택</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                  {imageFile && <span className="text-sm text-gray-600">{imageFile.name}</span>}
                </div>
                {imagePreview && (
                  <div className="mt-4">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full max-w-md h-48 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </>
          )}

          {/* Attachment */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              첨부파일
            </label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                <HiArrowUpTray className="w-5 h-5" />
                <span>파일 선택</span>
                <input
                  type="file"
                  onChange={handleAttachmentChange}
                  className="hidden"
                />
              </label>
              {attachmentFile && <span className="text-sm text-gray-600">{attachmentFile.name}</span>}
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-[#ed1c24] text-white font-semibold rounded-lg hover:bg-[#d91920] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '등록 중...' : '게시글 등록'}
            </button>
            <Link
              href="/admin/dashboard"
              className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
            >
              취소
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
