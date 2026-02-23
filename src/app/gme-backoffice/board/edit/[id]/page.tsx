'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { HiArrowLeft } from 'react-icons/hi2'
import Link from 'next/link'
import BoardForm, { BoardFormData } from '@/components/board/BoardForm'

export default function EditBoardEntryPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string
  const supabase = createClient()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState<BoardFormData>({
    type: 'notice',
    title: '',
    content: '',
    date: '',
    isImportant: false,
    source: '',
    excerpt: '',
    description: '',
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [existingImageUrl, setExistingImageUrl] = useState('')

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
      })
      if (data.image_url) {
        setExistingImageUrl(data.image_url)
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
      let imageUrl = existingImageUrl

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
