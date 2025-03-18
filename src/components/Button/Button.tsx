import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import cn from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  className,
  disabled,
  onClick,
}: ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps) {
  return (
    <button
      className={cn(styles.button, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
