"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { InputHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TextInputProps = {
  children?: ReactNode;
  iconLeft?: string;
  iconRight?: string;
  label?: string;
  labelClassName?: string;
  subDescription?: string | ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextInput({
  children,
  iconLeft,
  iconRight,
  subDescription,
  labelClassName,
  label,
  ...props
}: TextInputProps) {
  const defaultInputClass =
    "flex-grow px-3 rounded-[8px] focus:border-none py-2 text-sm outline-0 w-full";
  const defaultLabelClass = "block mb-2 text-sm font-bold text-gray-600";
  const mergedLabelClass = twMerge(defaultLabelClass, labelClassName);

  return (
    <div className="mb-6">
      <label htmlFor="" className={mergedLabelClass}>
        {label}
      </label>
      <label htmlFor="">{subDescription}</label>
      <div className="flex items-center border border-sub rounded-[8px] bg-white">
        {iconLeft && <Icon icon={iconLeft} className="pl-2 text-sub text-2xl" />}
        <input
          {...props}
          className={`${defaultInputClass} ${iconLeft && "pl-2"} ${
            iconRight && "pr-2"
          }`}
        />
        {iconRight && <Icon icon={iconRight} />}
      </div>
    </div>
  );
}
