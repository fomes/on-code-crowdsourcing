"use client";

import { ComponentProps, ReactNode } from "react";
import { Icon } from "@iconify/react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button"> & {
  children: ReactNode;
  variant?: ButtonVariants;
  iconLeft?: string;
  iconRight?: string;
};

type ButtonVariants = "primary" | "secondary";

const variants = {
  primary:
    "border border-sub-30 bg-on-code hover:bg-on-code-70 text-white gap-1",
  secondary: "border border-secondary text-black gap-3 hover:bg-on-code-70",
};

export function Button({
  variant = "primary",
  iconLeft,
  iconRight,
  children,
  ...props
}: ButtonProps) {
  const defaultClasses =
    "flex items-center px-[14px] py-[10px] justify-center font-semibold rounded-md transition-all duration-300";
  const BtnClasses = twMerge(
    defaultClasses,
    variants[variant],
    props.className
  );

  return (
    <button {...props} className={BtnClasses}>
      {iconLeft && <Icon icon={iconLeft} />}
      {iconRight && <Icon icon={iconRight} />}
      {children}
    </button>
  );
}
