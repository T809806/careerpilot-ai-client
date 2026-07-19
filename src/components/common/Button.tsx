import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`rounded-xl bg-violet-700 px-5 py-2.5 text-white font-medium transition-all duration-300 hover:bg-violet-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;