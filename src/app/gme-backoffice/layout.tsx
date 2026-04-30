'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  HiOutlineHome,
  HiOutlinePlusCircle,
  HiOutlineArrowTopRightOnSquare,
  HiArrowRightOnRectangle,
} from 'react-icons/hi2'
import { ToastProvider } from '@/components/ui/Toast'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, signOut } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  if (pathname === '/gme-backoffice/login') {
    return <ToastProvider>{children}</ToastProvider>
  }

  const handleSignOut = async () => {
    await signOut()
    router.push('/gme-backoffice/login')
  }

  const navItems = [
    { href: '/gme-backoffice/dashboard', icon: HiOutlineHome, label: '게시글 관리' },
    { href: '/gme-backoffice/board/create', icon: HiOutlinePlusCircle, label: '새 게시글' },
  ]

  return (
    <div className="min-h-screen flex bg-[#f8f9fa]">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-60 bg-white border-r border-gray-100 flex flex-col z-20">
        {/* Logo */}
        <div className="px-6 py-5 border-b border-gray-100">
          <Image
            src="/images/common/GME-LOGO-HD.png"
            alt="GME Remit"
            width={100}
            height={28}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === '/gme-backoffice/dashboard' && pathname.startsWith('/gme-backoffice/board/edit'))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium transition-all ${
                  isActive
                    ? 'bg-red-50 text-primary'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="w-[18px] h-[18px]" />
                {item.label}
              </Link>
            )
          })}

          <div className="border-b border-gray-100 my-3" />

          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all"
          >
            <HiOutlineArrowTopRightOnSquare className="w-[18px] h-[18px]" />
            사이트 보기
          </Link>
        </nav>

        {/* User Info */}
        <div className="px-4 py-4 border-t border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-red-50 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
              {user?.email?.[0]?.toUpperCase() ?? "?"}
            </div>
            <span className="text-[13px] text-gray-600 truncate">{user?.email ?? '관리자'}</span>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 w-full px-3 py-2 text-[13px] text-gray-400 hover:text-primary hover:bg-red-50 rounded-lg transition-all cursor-pointer"
          >
            <HiArrowRightOnRectangle className="w-4 h-4" />
            로그아웃
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-60 flex flex-col min-h-screen">
        <main className="flex-1 px-8 py-8">
          <ToastProvider>{children}</ToastProvider>
        </main>
      </div>
    </div>
  )
}
