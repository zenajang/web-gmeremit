"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { AdminErrorBanner, AdminTextField } from "@/components/admin/molecules";
import { ADMIN_DASHBOARD_PATH, ADMIN_LOGIN_ERROR } from "@/components/admin/constants";

const AdminLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();

  const submitLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    const { error } = await signIn(email, password);

    if (error) {
      setErrorMessage(ADMIN_LOGIN_ERROR);
      setIsSubmitting(false);
      return;
    }

    router.push(ADMIN_DASHBOARD_PATH);
  };

  return (
    <div className="flex-1 flex items-center justify-center px-6 bg-[#fafafa]">
      <div className="w-full max-w-[400px]">
        <div className="lg:hidden mb-8 flex items-center gap-3">
          <Link href="/">
            <Image src="/images/common/GME-LOGO-HD.png" alt="GME" width={100} height={28} />
          </Link>
          <span className="text-[12px] text-gray-400 font-medium border-l border-gray-200 pl-3">
            Admin
          </span>
        </div>

        <div className="mb-8">
          <h1 className="text-[24px] font-bold text-gray-900 mb-2">로그인</h1>
          <p className="text-[15px] text-gray-500">관리자 계정으로 로그인하세요</p>
        </div>

        {errorMessage && <AdminErrorBanner message={errorMessage} />}

        <form onSubmit={submitLogin} className="space-y-5">
          <AdminTextField
            id="email"
            label="이메일"
            type="email"
            value={email}
            placeholder="admin@gmeremit.com"
            onChange={setEmail}
          />
          <AdminTextField
            id="password"
            label="비밀번호"
            type="password"
            value={password}
            placeholder="비밀번호를 입력하세요"
            onChange={setPassword}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed text-[15px] shadow-[0_4px_12px_rgba(237,28,36,0.25)] hover:shadow-[0_6px_20px_rgba(237,28,36,0.35)] cursor-pointer"
          >
            {isSubmitting ? "로그인 중..." : "로그인"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
