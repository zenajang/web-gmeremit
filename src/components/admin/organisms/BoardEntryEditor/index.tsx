"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BoardForm } from "@/components/board/organisms";
import { AdminPageHeader } from "@/components/admin/molecules";
import { useToast } from "@/components/ui/Toast";
import { buildBoardSubmissionFormData, createImagePreview } from "@/lib/board-admin";
import { ADMIN_DASHBOARD_PATH, REDIRECT_DELAY_MS } from "@/components/admin/constants";
import type { BoardFormData } from "@/types/board";

interface BoardEntrySubmitResult {
  success: boolean;
  error?: string;
}

interface BoardEntryEditorProps {
  title: string;
  description: string;
  submitLabel: string;
  submittingLabel: string;
  successMessage: string;
  errorMessage: string;
  initialFormData: BoardFormData;
  initialImageUrl?: string;
  allowAttachment?: boolean;
  onSubmit: (payload: FormData) => Promise<BoardEntrySubmitResult>;
  entryId?: string;
}

const BoardEntryEditor = ({
  title,
  description,
  submitLabel,
  submittingLabel,
  successMessage,
  errorMessage,
  initialFormData,
  initialImageUrl,
  allowAttachment = false,
  onSubmit,
  entryId,
}: BoardEntryEditorProps) => {
  const router = useRouter();
  const toast = useToast();

  const [formData, setFormData] = useState<BoardFormData>(initialFormData);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(initialImageUrl || null);
  const [attachmentFile, setAttachmentFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [existingImageUrl] = useState(initialImageUrl);

  const updateImageFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    void createImagePreview(file).then(setImagePreview);
  };

  const updateAttachmentFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setAttachmentFile(file);
  };

  const submitBoardEntry = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await onSubmit(
        buildBoardSubmissionFormData({
          id: entryId,
          formData,
          imageFile,
          attachmentFile: allowAttachment ? attachmentFile : undefined,
          existingImageUrl,
        })
      );

      if (!result.success) {
        throw new Error(result.error);
      }

      toast.success(successMessage);
      setTimeout(() => router.push(ADMIN_DASHBOARD_PATH), REDIRECT_DELAY_MS);
    } catch {
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <AdminPageHeader title={title} description={description} />

      <BoardForm
        formData={formData}
        onChange={setFormData}
        imageFile={imageFile}
        imagePreview={imagePreview}
        onImageChange={updateImageFile}
        {...(allowAttachment && {
          attachmentFile,
          onAttachmentChange: updateAttachmentFile,
        })}
        onSubmit={submitBoardEntry}
        submitting={isSubmitting}
        submitLabel={submitLabel}
        submittingLabel={submittingLabel}
      />
    </div>
  );
};

export default BoardEntryEditor;
