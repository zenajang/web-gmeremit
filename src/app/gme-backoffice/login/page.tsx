'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Image from 'next/image'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await signIn(email, password)

    if (error) {
      setError('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.')
      setLoading(false)
    } else {
      router.push('/gme-backoffice/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-[480px] xl:w-[520px] bg-gradient-to-br from-[#191c1f] to-[#2d3139] flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/[0.08] rounded-full translate-y-1/3 -translate-x-1/3" />

        <div className="relative z-10">
          <Image
            src="/images/common/GME-LOGO-HD.png"
            alt="GME Remit"
            width={120}
            height={34}
            className="brightness-0 invert"
          />
          <p className="mt-1.5 text-[12px] text-gray-500 tracking-wider font-medium">관리자 시스템</p>
        </div>

        <div className="relative z-10 space-y-4">
          <h2 className="text-white text-[28px] font-bold leading-tight">
            Beyond Banking,<br />GME Remittance
          </h2>
          <p className="text-gray-400 text-[15px] leading-relaxed">
            대한민국 No.1 해외송금 서비스<br />관리자 대시보드
          </p>
        </div>

        <div className="relative z-10 text-[12px] text-gray-600">
          &copy; 2026 GME Remittance. All rights reserved.
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center px-6 bg-[#fafafa]">
        <div className="w-full max-w-[400px]">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 flex items-center gap-3">
            <Image src="/images/common/GME-LOGO-HD.png" alt="GME" width={100} height={28} />
            <span className="text-[12px] text-gray-400 font-medium border-l border-gray-200 pl-3">Admin</span>
          </div>

          <div className="mb-8">
            <h1 className="text-[24px] font-bold text-gray-900 mb-2">로그인</h1>
            <p className="text-[15px] text-gray-500">관리자 계정으로 로그인하세요</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <span className="text-red-600 text-xs font-bold">!</span>
              </div>
              <p className="text-[14px] text-red-600">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-[13px] font-semibold text-gray-700 mb-2">
                이메일
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[15px] placeholder:text-gray-300"
                placeholder="admin@gmeremit.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-[13px] font-semibold text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[15px] placeholder:text-gray-300"
                placeholder="비밀번호를 입력하세요"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed text-[15px] shadow-[0_4px_12px_rgba(237,28,36,0.25)] hover:shadow-[0_6px_20px_rgba(237,28,36,0.35)] cursor-pointer"
            >
              {loading ? '로그인 중...' : '로그인'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
