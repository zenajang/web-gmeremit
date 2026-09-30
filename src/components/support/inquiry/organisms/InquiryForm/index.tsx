"use client";

import { useState } from "react";
import * as S from "./styles";
import {
  ActionButtons,
  FormField,
  HoneypotField,
  TextAreaField,
  TurnstileField,
} from "@/components/support/inquiry/molecules";
import {
  EMAIL_PATTERN,
  EMPTY_FORM,
  FIELD_MAX_LENGTH,
  MIN_SUBMIT_LOADING_MS,
  PHONE_PATTERN,
} from "@/components/support/inquiry/constants";
import { sendInquiryEmail } from "@/components/support/inquiry/api";
import { useInquiryTranslation } from "@/hooks/useInquiryTranslation";
import type { InquiryCategory, InquiryFormValues } from "@/components/support/inquiry/types";

interface InquiryFormProps {
  category: Extract<InquiryCategory, { kind: "mail" }>;
  onSubmitted: () => void;
  onReset: () => void;
}

const InquiryForm = ({ category, onSubmitted, onReset }: InquiryFormProps) => {
  const { t } = useInquiryTranslation();
  const [form, setForm] = useState<InquiryFormValues>(EMPTY_FORM);
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormValue = (key: keyof InquiryFormValues) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const hasValidationError = () => {
    if (!form.name.trim() || !form.email.trim() || !form.title.trim() || !form.content.trim()) {
      setError(t("errors.required"));
      return true;
    }
    if (!EMAIL_PATTERN.test(form.email)) {
      setError(t("errors.email"));
      return true;
    }
    if (form.phone.trim() && !PHONE_PATTERN.test(form.phone.trim())) {
      setError(t("errors.phone"));
      return true;
    }
    if (!turnstileToken) {
      setError(t("errors.turnstile"));
      return true;
    }
    return false;
  };

  const postSendInquiryEmail = async () => {
    const { success, message } = await sendInquiryEmail({
      categoryNo: category.no,
      turnstileToken,
      ...form,
    });
    if (!success) {
      setError(message || t("errors.failed"));
    }
    return success;
  };

  const holdMinimumLoading = async (startedAt: number) => {
    const elapsed = Date.now() - startedAt;
    if (elapsed >= MIN_SUBMIT_LOADING_MS) return;
    await new Promise((resolve) => setTimeout(resolve, MIN_SUBMIT_LOADING_MS - elapsed));
  };

  const submitInquiryForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    if (honeypot) return onSubmitted();
    if (hasValidationError()) return;

    setError("");
    setIsSubmitting(true);
    const startedAt = Date.now();

    try {
      const isSuccessSend = await postSendInquiryEmail();
      await holdMinimumLoading(startedAt);
      if (!isSuccessSend) return;

      onSubmitted();
    } catch {
      await holdMinimumLoading(startedAt);
      setError(t("errors.failed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={submitInquiryForm} noValidate className={S.InquiryFormRoot}>
      <HoneypotField value={honeypot} onChange={setHoneypot} />

      <div className={S.InquiryFormDeptBox}>
        <b className={S.InquiryFormDeptName}>{t(`categories.${category.no}.name`)}</b>
        <span className={S.InquiryFormDeptDescription}>
          {t("form.notice", { dept: t(`categories.${category.no}.dept`) })}
        </span>
      </div>

      <div className={S.InquiryFormNameRow}>
        <FormField
          id="inquiry-name"
          label={t("form.nameLabel")}
          required
          value={form.name}
          onChange={updateFormValue("name")}
          placeholder={t("form.namePlaceholder")}
          maxLength={FIELD_MAX_LENGTH.name}
        />
        <FormField
          id="inquiry-phone"
          label={t("form.phoneLabel")}
          value={form.phone}
          onChange={updateFormValue("phone")}
          placeholder={t("form.phonePlaceholder")}
          maxLength={FIELD_MAX_LENGTH.phone}
        />
      </div>
      <FormField
        id="inquiry-email"
        label={t("form.emailLabel")}
        required
        type="email"
        value={form.email}
        onChange={updateFormValue("email")}
        placeholder={t("form.emailPlaceholder")}
        maxLength={FIELD_MAX_LENGTH.email}
      />
      <FormField
        id="inquiry-title"
        label={t("form.titleLabel")}
        required
        value={form.title}
        onChange={updateFormValue("title")}
        placeholder={t("form.titlePlaceholder")}
        maxLength={FIELD_MAX_LENGTH.title}
      />
      <TextAreaField
        id="inquiry-content"
        label={t("form.contentLabel")}
        required
        value={form.content}
        onChange={updateFormValue("content")}
        placeholder={t("form.contentPlaceholder")}
        maxLength={FIELD_MAX_LENGTH.content}
      />

      <TurnstileField onTokenChange={setTurnstileToken} />

      <p role="alert" className={S.InquiryFormError}>
        {error}
      </p>

      <ActionButtons
        align="center"
        primaryLabel={t("form.submit")}
        primaryType="submit"
        secondaryLabel={t("common.reset")}
        onSecondary={onReset}
        isLoading={isSubmitting}
      />
    </form>
  );
};

export default InquiryForm;
