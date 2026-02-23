'use client'

import { BoardEntryType } from '@/types/board'
import { HiArrowUpTray } from 'react-icons/hi2'
import TiptapEditor from '@/components/editor/TiptapEditor'

export interface BoardFormData {
  type: BoardEntryType
  title: string
  content: string
  date: string
  isImportant: boolean
  source: string
  excerpt: string
  description: string
}

interface BoardFormProps {
  formData: BoardFormData
  onChange: (data: BoardFormData) => void
  imageFile: File | null
  imagePreview: string | null
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  attachmentFile?: File | null
  onAttachmentChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
  submitting: boolean
  submitLabel: string
  submittingLabel: string
}

export default function BoardForm({
  formData,
  onChange,
  imageFile,
  imagePreview,
  onImageChange,
  attachmentFile,
  onAttachmentChange,
  onSubmit,
  submitting,
  submitLabel,
  submittingLabel,
}: BoardFormProps) {
  const update = (partial: Partial<BoardFormData>) => {
    onChange({ ...formData, ...partial })
  }

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-lg shadow-lg p-8">
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
                  onChange={(e) => update({ type: e.target.value as BoardEntryType })}
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
            onChange={(e) => update({ title: e.target.value })}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
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
            onChange={(e) => update({ date: e.target.value })}
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
              onChange={(content) => update({ content })}
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
              onChange={(e) => update({ isImportant: e.target.checked })}
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
                onChange={(e) => update({ source: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
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
                onChange={(e) => update({ excerpt: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="간단한 요약을 입력하세요"
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
                    onChange={onImageChange}
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
                onChange={(e) => update({ description: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="짧은 설명을 입력하세요"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                내용 *
              </label>
              <TiptapEditor
                content={formData.content}
                onChange={(content) => update({ content })}
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
                    onChange={onImageChange}
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

        {/* Attachment (optional) */}
        {onAttachmentChange && (
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
                  onChange={onAttachmentChange}
                  className="hidden"
                />
              </label>
              {attachmentFile && <span className="text-sm text-gray-600">{attachmentFile.name}</span>}
            </div>
          </div>
        )}

        {/* Submit Buttons */}
        <div className="flex gap-4 pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? submittingLabel : submitLabel}
          </button>
          <a
            href="/gme-backoffice/dashboard"
            className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
          >
            취소
          </a>
        </div>
      </div>
    </form>
  )
}
