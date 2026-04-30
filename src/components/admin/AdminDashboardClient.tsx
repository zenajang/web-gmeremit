'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState, useTransition } from 'react'
import { useToast, useConfirm } from '@/components/ui/Toast'
import type { BoardCounts, BoardEntry } from '@/types/board'
import { deleteBoardEntryAction } from '@/app/gme-backoffice/board/actions'
import {
  HiPlus,
  HiPencil,
  HiTrash,
  HiEye,
  HiOutlineDocumentText,
  HiOutlineMegaphone,
  HiOutlineNewspaper,
  HiOutlinePencilSquare,
} from 'react-icons/hi2'
import { BsPinFill } from 'react-icons/bs'

interface AdminDashboardClientProps {
  entries: BoardEntry[]
  totalCounts: BoardCounts
  activeFilter: 'all' | 'notice' | 'press' | 'blog'
}

export default function AdminDashboardClient({
  entries,
  totalCounts,
  activeFilter,
}: AdminDashboardClientProps) {
  const router = useRouter()
  const toast = useToast()
  const confirm = useConfirm()
  const [deletingId, setDeletingId] = useState<number | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleFilterChange = (filter: 'all' | 'notice' | 'press' | 'blog') => {
    startTransition(() => {
      router.push(
        filter === 'all' ? '/gme-backoffice/dashboard' : `/gme-backoffice/dashboard?filter=${filter}`
      )
    })
  }

  const handleDelete = async (id: number) => {
    const confirmed = await confirm('정말 삭제하시겠습니까?')
    if (!confirmed) return

    setDeletingId(id)

    try {
      const result = await deleteBoardEntryAction(id)

      if (!result.success) {
        throw new Error(result.error)
      }

      toast.success('삭제되었습니다.')
      router.refresh()
    } catch {
      toast.error('삭제 중 오류가 발생했습니다.')
    } finally {
      setDeletingId(null)
    }
  }

  const getTypeBadge = (type: string) => {
    const badges = {
      notice: { label: '공지', color: 'bg-blue-50 text-blue-600 border-blue-100' },
      press: { label: '언론', color: 'bg-purple-50 text-purple-600 border-purple-100' },
      blog: { label: '블로그', color: 'bg-green-50 text-green-600 border-green-100' },
    }
    const badge = badges[type as keyof typeof badges]

    return (
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[12px] font-semibold border ${badge.color}`}
      >
        {badge.label}
      </span>
    )
  }

  const statsConfig = [
    {
      label: '전체 게시글',
      count: totalCounts.total,
      icon: HiOutlineDocumentText,
      color: 'text-gray-700',
      bg: 'bg-gray-50',
    },
    {
      label: '공지사항',
      count: totalCounts.notice,
      icon: HiOutlineMegaphone,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      label: '언론보도',
      count: totalCounts.press,
      icon: HiOutlineNewspaper,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      label: '블로그',
      count: totalCounts.blog,
      icon: HiOutlinePencilSquare,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
  ]

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-[22px] font-bold text-gray-900">게시글 관리</h1>
        <p className="text-[14px] text-gray-500 mt-1">게시글을 조회하고 관리합니다</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {statsConfig.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4"
          >
            <div className={`w-11 h-11 rounded-xl ${stat.bg} flex items-center justify-center`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-[13px] text-gray-500 font-medium">{stat.label}</p>
              <p className="text-[22px] font-bold text-gray-900 -mt-0.5">{stat.count}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-1.5 bg-gray-100 rounded-xl p-1">
          {(['all', 'notice', 'press', 'blog'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => handleFilterChange(tab)}
              disabled={isPending}
              className={`px-4 py-2 rounded-lg text-[13px] font-semibold transition-all cursor-pointer ${
                activeFilter === tab
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab === 'all'
                ? '전체'
                : tab === 'notice'
                  ? '공지사항'
                  : tab === 'press'
                    ? '언론보도'
                    : '블로그'}
            </button>
          ))}
        </div>

        <Link
          href="/gme-backoffice/board/create"
          className="flex items-center gap-2 px-5 py-2.5 bg-primary-dark text-white text-[14px] font-semibold rounded-xl hover:bg-primary transition-all shadow-[0_2px_8px_rgba(237,28,36,0.25)]"
        >
          <HiPlus className="w-4 h-4" />
          새 게시글
        </Link>
      </div>

      {entries.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 p-16 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
            <HiOutlineDocumentText className="w-7 h-7 text-gray-300" />
          </div>
          <p className="text-[15px] text-gray-400 font-medium">게시글이 없습니다</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-[100px_1fr_120px_140px] items-center px-6 py-3.5 border-b border-gray-100 bg-gray-50/50">
            <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider">구분</span>
            <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider">제목</span>
            <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider text-center">날짜</span>
            <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider text-center">관리</span>
          </div>

          <div className="divide-y divide-gray-50">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="grid grid-cols-[100px_1fr_120px_140px] items-center px-6 py-4 hover:bg-gray-50/50 transition-colors group"
              >
                <div>{getTypeBadge(entry.type)}</div>
                <div className="flex items-center gap-2 min-w-0">
                  {entry.is_important && (
                    <BsPinFill className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  )}
                  <span className="text-[14px] font-medium text-gray-900 truncate">{entry.title}</span>
                </div>
                <span className="text-[13px] text-gray-400 text-center">{entry.date}</span>
                <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    href={`/board/${entry.id}`}
                    target="_blank"
                    className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all"
                    title="보기"
                  >
                    <HiEye className="w-4 h-4" />
                  </Link>
                  <Link
                    href={`/gme-backoffice/board/edit/${entry.id}`}
                    className="p-2 text-gray-400 hover:text-green-500 hover:bg-green-50 rounded-lg transition-all"
                    title="수정"
                  >
                    <HiPencil className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handleDelete(entry.id)}
                    disabled={deletingId === entry.id}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all cursor-pointer disabled:opacity-50"
                    title="삭제"
                  >
                    <HiTrash className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
