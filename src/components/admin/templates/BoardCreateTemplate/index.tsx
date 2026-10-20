"use client";

import { BoardEntryEditor } from "@/components/admin/organisms";
import { BOARD_CREATE_ERROR, BOARD_CREATE_SUCCESS } from "@/components/admin/constants";
import { createBoardEntryAction } from "@/app/gme-ops/board/actions";

const EMPTY_FORM = {
  type: "notice" as const,
  title: "",
  content: "",
  date: new Date().toISOString().split("T")[0],
  isImportant: false,
  source: "",
  excerpt: "",
  description: "",
  author: "",
};

const BoardCreateTemplate = () => {
  return (
    <BoardEntryEditor
      title="새 게시글 작성"
      description="새로운 게시글을 작성합니다"
      submitLabel="게시글 등록"
      submittingLabel="등록 중..."
      successMessage={BOARD_CREATE_SUCCESS}
      errorMessage={BOARD_CREATE_ERROR}
      initialFormData={EMPTY_FORM}
      allowAttachment
      onSubmit={createBoardEntryAction}
    />
  );
};

export default BoardCreateTemplate;
