import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`rounded-xl bg-violet-700 px-5 py-2.5 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-800 hover:shadow-lg`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;