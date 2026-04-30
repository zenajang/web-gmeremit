'use client'

import Image from 'next/image'
import { BoardEntryType, BoardFormData } from '@/types/board'
import { HiArrowUpTray } from 'react-icons/hi2'
import TiptapEditor from '@/components/editor/TiptapEditor'
import Button from '@/components/ui/Button'

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

function FileUpload({
  label,
  accept,
  fileName,
  preview,
  onChange,
}: {
  label: string
  accept?: string
  fileName?: string
  preview?: string | null
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 text-gray-600 rounded-xl border border-gray-200 border-dashed cursor-pointer hover:bg-gray-100 hover:border-gray-300 transition-colors">
          <HiArrowUpTray className="w-5 h-5" />
          <span className="text-[14px]">{label}</span>
          <input
            type="file"
            accept={accept}
            onChange={onChange}
            aria-label={label}
            className="hidden"
          />
        </label>
        {fileName && <span className="text-[13px] text-gray-500">{fileName}</span>}
      </div>
      {preview && (
        <div className="mt-4">
          <Image
            src={preview}
            alt="Preview"
            width={448}
            height={192}
            className="w-full max-w-md h-48 object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  )
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

  const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[15px]"
  const labelClass = "block text-[13px] font-semibold text-gray-600 mb-2"

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-2xl border border-gray-100 p-8">
      <div className="space-y-6">
        {/* Type - Segmented Control */}
        <div>
          <label className={labelClass}>게시글 유형 *</label>
          <div className="inline-flex items-center gap-1 bg-gray-100 rounded-xl p-1">
            {(['notice', 'press', 'blog'] as BoardEntryType[]).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => update({ type })}
                className={`px-5 py-2 rounded-lg text-[13px] font-semibold transition-all cursor-pointer ${
                  formData.type === type
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {type === 'notice' ? '공지사항' : type === 'press' ? '언론보도' : '블로그'}
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <div>
          <label htmlFor="title" className={labelClass}>제목 *</label>
          <input
            id="title"
            aria-label="제목"
            type="text"
            value={formData.title}
            onChange={(e) => update({ title: e.target.value })}
            required
            className={inputClass}
            placeholder="제목을 입력하세요"
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className={labelClass}>날짜 *</label>
          <input
            id="date"
            aria-label="날짜"
            type="date"
            value={formData.date}
            onChange={(e) => update({ date: e.target.value })}
            required
            className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[15px]"
          />
        </div>

        {/* Content */}
        {formData.type !== 'blog' && (
          <div>
            <label className={labelClass}>내용 *</label>
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
          <label htmlFor="important" className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
            <input
              id="important"
              aria-label="중요 공지"
              type="checkbox"
              checked={formData.isImportant}
              onChange={(e) => update({ isImportant: e.target.checked })}
              className="w-4 h-4 text-primary focus:ring-primary rounded"
            />
            <div>
              <span className="text-[14px] font-medium text-gray-700">중요 공지 (상단 고정)</span>
              <p className="text-[12px] text-gray-400">체크하면 게시판 상단에 고정됩니다</p>
            </div>
          </label>
        )}

        {/* Press-specific fields */}
        {formData.type === 'press' && (
          <>
            <div>
              <label htmlFor="source" className={labelClass}>언론사</label>
              <input
                id="source"
                aria-label="언론사"
                type="text"
                value={formData.source}
                onChange={(e) => update({ source: e.target.value })}
                className={inputClass}
                placeholder="예: 매일경제"
              />
            </div>
            <div>
              <label htmlFor="excerpt" className={labelClass}>요약</label>
              <textarea
                id="excerpt"
                aria-label="요약"
                value={formData.excerpt}
                onChange={(e) => update({ excerpt: e.target.value })}
                rows={3}
                className={inputClass}
                placeholder="간단한 요약을 입력하세요"
              />
            </div>
            <div>
              <label className={labelClass}>기사 썸네일</label>
              <FileUpload
                label="이미지 선택"
                accept="image/*"
                fileName={imageFile?.name}
                preview={imagePreview}
                onChange={onImageChange}
              />
            </div>
          </>
        )}

        {/* Blog-specific fields */}
        {formData.type === 'blog' && (
          <>
            <div>
              <label htmlFor="description" className={labelClass}>설명</label>
              <input
                id="description"
                aria-label="설명"
                type="text"
                value={formData.description}
                onChange={(e) => update({ description: e.target.value })}
                className={inputClass}
                placeholder="짧은 설명을 입력하세요"
              />
            </div>
            <div>
              <label className={labelClass}>내용 *</label>
              <TiptapEditor
                content={formData.content}
                onChange={(content) => update({ content })}
                placeholder="내용을 입력하세요. 이미지 버튼을 클릭하여 원하는 위치에 이미지를 삽입할 수 있습니다."
                bucketName="blog-images"
              />
            </div>
            <div>
              <label className={labelClass}>썸네일 이미지</label>
              <FileUpload
                label="이미지 선택"
                accept="image/*"
                fileName={imageFile?.name}
                preview={imagePreview}
                onChange={onImageChange}
              />
            </div>
          </>
        )}

        {/* Attachment (optional) */}
        {onAttachmentChange && (
          <div>
            <label className={labelClass}>첨부파일</label>
            <FileUpload
              label="파일 선택"
              fileName={attachmentFile?.name}
              onChange={onAttachmentChange}
            />
          </div>
        )}

        {/* Submit Buttons */}
        <div className="flex gap-3 pt-8 border-t border-gray-100">
          <Button type="submit" disabled={submitting} className="disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_2px_8px_rgba(237,28,36,0.25)]">
            {submitting ? submittingLabel : submitLabel}
          </Button>
          <Button as="link" href="/gme-backoffice/dashboard" variant="secondary">
            취소
          </Button>
        </div>
      </div>
    </form>
  )
}
