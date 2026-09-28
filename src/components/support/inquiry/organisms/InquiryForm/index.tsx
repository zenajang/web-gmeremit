"use client";

import { useState } from "react";
import { ActionButtons, ConsentCheckbox, FormField, TextAreaField } from "../../molecules";
import { EMPTY_FORM } from "../../constants";
import type { InquiryCategory, InquiryFormValues } from "../../types";

interface InquiryFormProps {
  category: Extract<InquiryCategory, { kind: "mail" }>;
  onSubmitted: () => void;
  onReset: () => void;
}

const InquiryForm = ({ category, onSubmitted, onReset }: InquiryFormProps) => {
  const [form, setForm] = useState<InquiryFormValues>(EMPTY_FORM);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const updateField = (key: keyof InquiryFormValues) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.title.trim() || !form.content.trim()) {
      setError("필수 항목을 모두 입력해 주세요.");
      return;
    }
    if (!agreed) {
      setError("개인정보 수집·이용에 동의해 주세요.");
      return;
    }

    setError("");
    // TODO: 메일 발송 API 연동. 지금은 화면만 완료 상태로 넘어간다
    onSubmitted();
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-6 rounded-lg border-l-[3px] border-primary bg-surface-warm px-4.5 py-3.5 text-sm">
        <b className="text-dark">{category.name}</b>
        <span className="mt-1 block text-[13px] text-gray">
          {category.dept}에서 확인 후 답변드립니다. 영업일 기준 3일 이내 회신을 원칙으로 합니다.
        </span>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <FormField
          id="inquiry-name"
          label="성명"
          required
          value={form.name}
          onChange={updateField("name")}
          placeholder="홍길동"
        />
        <FormField
          id="inquiry-phone"
          label="연락처"
          value={form.phone}
          onChange={updateField("phone")}
          placeholder="010-0000-0000"
        />
      </div>
      <FormField
        id="inquiry-email"
        label="이메일"
        required
        type="email"
        value={form.email}
        onChange={updateField("email")}
        placeholder="name@example.com"
      />
      <FormField
        id="inquiry-title"
        label="제목"
        required
        value={form.title}
        onChange={updateField("title")}
        placeholder="문의 제목을 입력해 주세요"
      />
      <TextAreaField
        id="inquiry-content"
        label="문의 내용"
        required
        value={form.content}
        onChange={updateField("content")}
        placeholder="문의하실 내용을 자세히 적어 주시면 정확한 답변에 도움이 됩니다."
      />

      <ConsentCheckbox checked={agreed} onChange={setAgreed} />

      {error && (
        <p role="alert" className="mb-4 text-sm text-primary">
          {error}
        </p>
      )}

      <ActionButtons
        primaryLabel="문의 접수하기"
        primaryType="submit"
        secondaryLabel="유형 다시 선택"
        onSecondary={onReset}
      />
    </form>
  );
};

export default InquiryForm;
