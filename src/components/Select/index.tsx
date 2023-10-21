"use client";

import { twMerge } from "tailwind-merge";

interface SelectOption {
  value: string;
  text: string;
}

type Selectprops = {
  label?: string;
  labelClassNames?: string;
  subDescription?: string | React.ReactNode;
  options: SelectOption[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({
  subDescription,
  labelClassNames,
  options,
  label,
  ...props
}: Selectprops) {
  const defaultLabelClasses = "block mb-2 text-sm font-bold text-gray-600";
  const mergedLabelClasses = twMerge(defaultLabelClasses, labelClassNames);
  const defaultSelectClasses =
    "flex-grow px-3 rounded-lg focus:border-none py-2 text-sm outline-0";

  return (
    <div className="mb-6">
      <label className={mergedLabelClasses}> {label}</label>
      <label> {subDescription}</label>
      <div className="flex items-center border border-sub rounded-lg bg-white">
        <select
          {...props}
          id="votingTime"
          className={`bg-white border text-gray-900 ${defaultSelectClasses}`}
        >
          {options.map((option) => (
            <option value={option.value} defaultValue={"3"} key={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
