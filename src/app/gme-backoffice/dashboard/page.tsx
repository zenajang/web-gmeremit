'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { BoardEntry } from '@/types/board'
import { HiPlus, HiPencil, HiTrash, HiEye } from 'react-icons/hi2'
import { BsPinFill } from 'react-icons/bs'

export default function AdminDashboardPage() {
  const [entries, setEntries] = useState<BoardEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'notice' | 'press' | 'blog'>('all')
  const supabase = createClient()

  useEffect(() => {
    fetchEntries()
  }, [filter])

  const fetchEntries = async () => {
    setLoading(true)
    let query = supabase
      .from('board_entries')
      .select('*')
      .order('date', { ascending: false })

    if (filter !== 'all') {
      query = query.eq('type', filter)
    }

    const { data, error } = await query

    if (error) {
      console.error('Error fetching entries:', error)
    } else {
      setEntries(data || [])
    }
    setLoading(false)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('정말 삭제하시겠습니까?')) return

    const { error } = await supabase
      .from('board_entries')
      .delete()
      .eq('id', id)

    if (error) {
      alert('삭제 중 오류가 발생했습니다.')
      console.error(error)
    } else {
      alert('삭제되었습니다.')
      fetchEntries()
    }
  }

  const getTypeBadge = (type: string) => {
    const badges = {
      notice: { label: '공지사항', color: 'bg-blue-100 text-blue-800' },
      press: { label: '언론보도', color: 'bg-purple-100 text-purple-800' },
      blog: { label: '블로그', color: 'bg-green-100 text-green-800' },
    }
    const badge = badges[type as keyof typeof badges]
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.color}`}>
        {badge.label}
      </span>
    )
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="typo-stat mb-2">게시글 관리</h1>
          <p className="text-gray-600">총 {entries.length}개의 게시글</p>
        </div>
        <Link
          href="/gme-backoffice/board/create"
          className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
        >
          <HiPlus className="w-5 h-5" />
          새 게시글
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {(['all', 'notice', 'press', 'blog'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
              filter === tab
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {tab === 'all' ? '전체' : tab === 'notice' ? '공지사항' : tab === 'press' ? '언론보도' : '블로그'}
          </button>
        ))}
      </div>

      {/* Table */}
      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-primary" />
        </div>
      ) : entries.length === 0 ? (
        <div className="bg-white rounded-lg p-12 text-center">
          <p className="text-gray-500">게시글이 없습니다.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">구분</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">제목</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">날짜</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {entries.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{getTypeBadge(entry.type)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {entry.is_important && (
                        <BsPinFill className="w-4 h-4 text-primary flex-shrink-0" />
                      )}
                      <span className="font-medium text-gray-900">{entry.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">
                    {entry.date}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <Link
                        href={`/board/${entry.id}`}
                        target="_blank"
                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                        title="보기"
                      >
                        <HiEye className="w-5 h-5" />
                      </Link>
                      <Link
                        href={`/gme-backoffice/board/edit/${entry.id}`}
                        className="p-2 text-gray-600 hover:text-green-600 transition-colors"
                        title="수정"
                      >
                        <HiPencil className="w-5 h-5" />
                      </Link>
                      <button
                        onClick={() => handleDelete(entry.id)}
                        className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                        title="삭제"
                      >
                        <HiTrash className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
