"use client";

import { sanitizeBoardContent } from "@/components/board/sanitize";

interface BoardArticleBodyProps {
  content: string;
}

const BoardArticleBody = ({ content }: BoardArticleBodyProps) => {
  return (
    <div className="prose prose-lg max-w-none">
      <div
        className="text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: sanitizeBoardContent(content) }}
      />
    </div>
  );
};

export default BoardArticleBody;
