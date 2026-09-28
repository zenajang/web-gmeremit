import Link from "next/link";

interface ConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ConsentCheckbox = ({ checked, onChange }: ConsentCheckboxProps) => (
  <label className="mb-5 flex items-start gap-2.5 text-[13.5px] text-gray-600">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="mt-1 accent-primary"
    />
    <span>
      개인정보 수집·이용에 동의합니다. 수집 항목은 성명·이메일·연락처이며, 문의 처리 목적으로만 이용 후 3년간 보관 뒤
      파기합니다.{" "}
      <Link href="/privacy" className="text-primary underline">
        전문 보기
      </Link>
    </span>
  </label>
);

export default ConsentCheckbox;
