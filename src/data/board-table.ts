/**
 * 게시판 테이블 이름.
 *
 * Preview 배포와 로컬에서 운영 데이터를 건드리지 않고 글을 등록해 보려면
 * `NEXT_PUBLIC_BOARD_TABLE` 에 복제 테이블 이름을 넣는다.
 * 값이 없으면 운영 테이블을 그대로 쓰므로 Production 은 영향을 받지 않는다.
 */
export const BOARD_TABLE = process.env.NEXT_PUBLIC_BOARD_TABLE || "board_entries";
