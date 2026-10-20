"use client";

import { BoardEntryEditor } from "@/components/admin/organisms";
import { BOARD_UPDATE_ERROR, BOARD_UPDATE_SUCCESS } from "@/components/admin/constants";
import { updateBoardEntryAction } from "@/app/gme-ops/board/actions";
import type { BoardFormData } from "@/types/board";

interface BoardEditTemplateProps {
  id: string;
  initialFormData: BoardFormData;
  initialImageUrl?: string;
}

const BoardEditTemplate = ({ id, initialFormData, initialImageUrl }: BoardEditTemplateProps) => {
  return (
    <BoardEntryEditor
      title="게시글 수정"
      description="게시글 내용을 수정합니다"
      submitLabel="수정 완료"
      submittingLabel="저장 중..."
      successMessage={BOARD_UPDATE_SUCCESS}
      errorMessage={BOARD_UPDATE_ERROR}
      initialFormData={initialFormData}
      initialImageUrl={initialImageUrl}
      entryId={id}
      onSubmit={updateBoardEntryAction}
    />
  );
};

export default BoardEditTemplate;
