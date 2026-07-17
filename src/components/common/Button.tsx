import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;