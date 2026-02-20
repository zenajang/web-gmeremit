'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { BoardEntryType } from '@/types/board'
import { HiArrowLeft, HiArrowUpTray } from 'react-icons/hi2'
import Link from 'next/link'
import TiptapEditor from '@/components/editor/TiptapEditor'

export default function EditBoardEntryPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    type: 'notice' as BoardEntryType,
    title: '',
    content: '',
    date: '',
    isImportant: false,
    source: '',
    excerpt: '',
    description: '',
    imageUrl: '',
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  useEffect(() => {
    fetchEntry()
  }, [id])

  const fetchEntry = async () => {
    const { data, error } = await supabase
      .from('board_entries')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      alert('게시글을 불러올 수 없습니다.')
      router.push('/gme-backoffice/dashboard')
    } else {
      // Convert date format from YYYY.MM.DD to YYYY-MM-DD
      const dateForInput = data.date.replace(/\./g, '-')
      setFormData({
        type: data.type,
        title: data.title,
        content: data.content || '',
        date: dateForInput,
        isImportant: data.is_important || false,
        source: data.source || '',
        excerpt: data.excerpt || '',
        description: data.description || '',
        imageUrl: data.image_url || '',
      })
      // Set existing image as preview
      if (data.image_url) {
        setImagePreview(data.image_url)
      }
    }
    setLoading(false)
  }

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      let imageUrl = formData.imageUrl

      // Upload new image if selected
      if (imageFile && (formData.type === 'blog' || formData.type === 'press')) {
        const fileExt = imageFile.name.split('.').pop()
        const fileName = `${Date.now()}.${fileExt}`
        const bucketName = formData.type === 'blog' ? 'blog-images' : 'press-images'
        const { error: uploadError } = await supabase.storage
          .from(bucketName)
          .upload(fileName, imageFile)

        if (uploadError) throw uploadError

        const { data: { publicUrl } } = supabase.storage
          .from(bucketName)
          .getPublicUrl(fileName)

        imageUrl = publicUrl
      }

      // Format date to YYYY.MM.DD
      const formattedDate = formData.date.replace(/-/g, '.')

      const { error } = await supabase
        .from('board_entries')
        .update({
          type: formData.type,
          title: formData.title,
          content: formData.content || null,
          date: formattedDate,
          is_important: formData.isImportant,
          source: formData.source || null,
          excerpt: formData.excerpt || null,
          description: formData.description || null,
          image_url: imageUrl || null,
        })
        .eq('id', id)

      if (error) throw error

      alert('게시글이 수정되었습니다.')
      router.push('/gme-backoffice/dashboard')
    } catch (error) {
      console.error('Error updating entry:', error)
      alert('게시글 수정 중 오류가 발생했습니다.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-primary" />
      </div>
    )
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
        <h1 className="typo-stat">게시글 수정</h1>
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
                    className="w-4 h-4 text-primary focus:ring-primary"
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
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
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            />
          </div>

          {/* Content */}
          {formData.type !== 'blog' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                내용 *
              </label>
              <TiptapEditor
                content={formData.content}
                onChange={(content) => setFormData({ ...formData, content })}
                placeholder="내용을 입력하세요. 이미지 버튼을 클릭하여 원하는 위치에 이미지를 삽입할 수 있습니다."
                bucketName="press-images"
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
                className="w-4 h-4 text-primary focus:ring-primary rounded"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  기사 썸네일
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  내용 *
                </label>
                <TiptapEditor
                  content={formData.content}
                  onChange={(content) => setFormData({ ...formData, content })}
                  placeholder="내용을 입력하세요. 이미지 버튼을 클릭하여 원하는 위치에 이미지를 삽입할 수 있습니다."
                  bucketName="blog-images"
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

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? '저장 중...' : '수정 완료'}
            </button>
            <Link
              href="/gme-backoffice/dashboard"
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
