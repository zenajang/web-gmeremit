'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import { Table } from '@tiptap/extension-table'
import { TableRow } from '@tiptap/extension-table-row'
import { TableHeader } from '@tiptap/extension-table-header'
import { TableCell } from '@tiptap/extension-table-cell'
import { useCallback, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import {
  HiBold,
  HiItalic,
  HiListBullet,
  HiQueueList,
  HiPhoto,
  HiCodeBracket,
  HiTableCells
} from 'react-icons/hi2'

interface TiptapEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
  bucketName?: string
}

export default function TiptapEditor({ content, onChange, placeholder, bucketName = 'press-images' }: TiptapEditorProps) {
  const supabase = createClient()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      Table,
      TableRow,
      TableHeader,
      TableCell,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[300px] px-4 py-3',
      },
    },
    immediatelyRender: false,
  })

  const handleImageUpload = useCallback(async (file: File) => {
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}.${fileExt}`
      const { error } = await supabase.storage
        .from(bucketName)
        .upload(fileName, file)

      if (error) throw error

      const { data: { publicUrl } } = supabase.storage
        .from(bucketName)
        .getPublicUrl(fileName)

      // Insert image into editor
      if (editor) {
        editor.chain().focus().setImage({ src: publicUrl }).run()
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('이미지 업로드 중 오류가 발생했습니다.')
    }
  }, [editor, supabase, bucketName])

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleImageUpload(file)
    }
  }

  if (!editor) {
    return null
  }

  return (
    <div className="border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#ed1c24] focus-within:border-transparent max-h-[600px] overflow-y-auto">
      {/* Toolbar */}
      <div className="sticky top-0 z-10 flex items-center gap-1 p-2 border-b border-gray-200 bg-gray-50 flex-wrap">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('bold') ? 'bg-gray-300' : ''
          }`}
          title="Bold"
        >
          <HiBold className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('italic') ? 'bg-gray-300' : ''
          }`}
          title="Italic"
        >
          <HiItalic className="w-5 h-5" />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-3 py-2 rounded hover:bg-gray-200 transition-colors font-semibold ${
            editor.isActive('heading', { level: 1 }) ? 'bg-gray-300' : ''
          }`}
          title="Heading 1"
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-2 rounded hover:bg-gray-200 transition-colors font-semibold ${
            editor.isActive('heading', { level: 2 }) ? 'bg-gray-300' : ''
          }`}
          title="Heading 2"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`px-3 py-2 rounded hover:bg-gray-200 transition-colors font-semibold ${
            editor.isActive('heading', { level: 3 }) ? 'bg-gray-300' : ''
          }`}
          title="Heading 3"
        >
          H3
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('bulletList') ? 'bg-gray-300' : ''
          }`}
          title="Bullet List"
        >
          <HiListBullet className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('orderedList') ? 'bg-gray-300' : ''
          }`}
          title="Numbered List"
        >
          <HiQueueList className="w-5 h-5" />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive('codeBlock') ? 'bg-gray-300' : ''
          }`}
          title="Code Block"
        >
          <HiCodeBracket className="w-5 h-5" />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => {
            const rows = parseInt(prompt('행 개수를 입력하세요 (기본: 3)', '3') || '3')
            const cols = parseInt(prompt('열 개수를 입력하세요 (기본: 3)', '3') || '3')
            if (rows > 0 && cols > 0) {
              editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run()
            }
          }}
          className="p-2 rounded hover:bg-gray-200 transition-colors"
          title="Insert Table"
        >
          <HiTableCells className="w-5 h-5" />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="p-2 rounded hover:bg-gray-200 transition-colors"
          title="Insert Image"
        >
          <HiPhoto className="w-5 h-5" />
        </button>

        {editor.isActive('image') && (
          <>
            <div className="w-px h-6 bg-gray-300 mx-1" />
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  // Find selected image in DOM and update its style
                  const selectedImg = document.querySelector('.ProseMirror img.ProseMirror-selectednode') as HTMLImageElement
                  if (selectedImg) {
                    selectedImg.style.width = '25%'
                    selectedImg.style.height = 'auto'
                  }
                }}
                className="px-2 py-1 text-xs rounded hover:bg-gray-200 transition-colors"
                title="Small"
              >
                소
              </button>
              <button
                type="button"
                onClick={() => {
                  const selectedImg = document.querySelector('.ProseMirror img.ProseMirror-selectednode') as HTMLImageElement
                  if (selectedImg) {
                    selectedImg.style.width = '50%'
                    selectedImg.style.height = 'auto'
                  }
                }}
                className="px-2 py-1 text-xs rounded hover:bg-gray-200 transition-colors"
                title="Medium"
              >
                중
              </button>
              <button
                type="button"
                onClick={() => {
                  const selectedImg = document.querySelector('.ProseMirror img.ProseMirror-selectednode') as HTMLImageElement
                  if (selectedImg) {
                    selectedImg.style.width = '100%'
                    selectedImg.style.height = 'auto'
                  }
                }}
                className="px-2 py-1 text-xs rounded hover:bg-gray-200 transition-colors"
                title="Large"
              >
                대
              </button>
            </div>
          </>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          className="hidden"
        />
      </div>

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        className="min-h-[300px]"
        placeholder={placeholder}
      />
    </div>
  )
}
