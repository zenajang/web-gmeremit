"use client";

interface AdminTextFieldProps {
  id: string;
  label: string;
  type: "email" | "password" | "text";
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

const AdminTextField = ({ id, label, type, value, placeholder, onChange }: AdminTextFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <input
        id={id}
        aria-label={label}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required
        placeholder={placeholder}
        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-[15px] placeholder:text-gray-300"
      />
    </div>
  );
};

export default AdminTextField;
