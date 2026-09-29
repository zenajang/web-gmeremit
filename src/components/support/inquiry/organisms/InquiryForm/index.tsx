"use client";

import { useState } from "react";
import { ActionButtons, FormField, HoneypotField, TextAreaField, TurnstileField } from "@/components/support/inquiry/molecules";
import { EMPTY_FORM } from "@/components/support/inquiry/constants";
import { sendInquiryEmail, verifyTurnstileToken } from "@/components/support/inquiry/api";
import type { InquiryCategory, InquiryFormValues } from "@/components/support/inquiry/types";
import * as S from "./styles";

interface InquiryFormProps {
  category: Extract<InquiryCategory, { kind: "mail" }>;
  onSubmitted: () => void;
  onReset: () => void;
}

const InquiryForm = ({ category, onSubmitted, onReset }: InquiryFormProps) => {
  const [form, setForm] = useState<InquiryFormValues>(EMPTY_FORM);
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormValue = (key: keyof InquiryFormValues) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const hasValidationError = () => { 
    if (!form.name.trim() || !form.email.trim() || !form.title.trim() || !form.content.trim()) {
      setError("필수 항목을 모두 입력해 주세요.");
      return true
    }
    if (!turnstileToken) {
      setError("보안 확인을 완료해 주세요.");
      return true
    }
    return false;
  }

  const getVerifyTurnstileToken = async () => {
    const {success} = await verifyTurnstileToken(turnstileToken);
      if (!success) {
        setError("보안 확인에 실패했습니다. 다시 시도해 주세요.");
      }
      return success
  }

  const postSendInquiryEmail = async () => {
    const {success, message} = await sendInquiryEmail({ categoryNo: category.no, ...form });
    if (!success) {
      setError(message);
    }
    return success
  }

  const submitInquiryForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    if (honeypot) { return onSubmitted() };
    if(hasValidationError()) return
    
    setError("");
    setIsSubmitting(true);

    try {
      const isHuman: boolean = await getVerifyTurnstileToken()
      if(!isHuman) return

      const isSuccessSend = await postSendInquiryEmail()
      if(!isSuccessSend) return

      onSubmitted();
    } catch {
      setError("문의 접수에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={submitInquiryForm} noValidate className={S.InquiryFormRoot}>
      <HoneypotField value={honeypot} onChange={setHoneypot} />

      <div className={S.InquiryFormDeptBox}>
        <b className={S.InquiryFormDeptName}>{category.name}</b>
        <span className={S.InquiryFormDeptDescription}>
          {category.dept}에서 확인 후 답변드립니다. 영업일 기준 3일 이내 회신을 원칙으로 합니다.
        </span>
      </div>

      <div className={S.InquiryFormNameRow}>
        <FormField
          id="inquiry-name"
          label="성명"
          required
          value={form.name}
          onChange={updateFormValue("name")}
          placeholder="홍길동"
        />
        <FormField
          id="inquiry-phone"
          label="연락처"
          value={form.phone}
          onChange={updateFormValue("phone")}
          placeholder="010-0000-0000"
        />
      </div>
      <FormField
        id="inquiry-email"
        label="이메일"
        required
        type="email"
        value={form.email}
        onChange={updateFormValue("email")}
        placeholder="name@example.com"
      />
      <FormField
        id="inquiry-title"
        label="제목"
        required
        value={form.title}
        onChange={updateFormValue("title")}
        placeholder="문의 제목을 입력해 주세요"
      />
      <TextAreaField
        id="inquiry-content"
        label="문의 내용"
        required
        value={form.content}
        onChange={updateFormValue("content")}
        placeholder="문의하실 내용을 자세히 적어 주시면 정확한 답변에 도움이 됩니다."
      />

      <TurnstileField onTokenChange={setTurnstileToken} />

      {error && (
        <p role="alert" className={S.InquiryFormError}>
          {error}
        </p>
      )}

      <ActionButtons
        align="center"
        primaryLabel={isSubmitting ? "접수 중..." : "문의 접수하기"}
        primaryType="submit"
        secondaryLabel="유형 다시 선택"
        onSecondary={onReset}
      />
    </form>
  );
};

export default InquiryForm;
