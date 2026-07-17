import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className = "", ...props }: InputProps) => {
  return (
    <input
      className={`w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 ${className}`}
      {...props}
    />
  );
};

export default Input;