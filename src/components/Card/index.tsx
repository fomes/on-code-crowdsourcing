import { ComponentProps, ReactNode } from "react";

type CardProps = ComponentProps<"div"> & {
  children?: ReactNode;
};

export function Card({ children, ...props }: CardProps) {
  const defaultClass =
    "bg-white p-[24px] pt-[32px] rounded-lg shadow-md w-full max-w-md border";
  return <div className={`${defaultClass} ${props.className}`}>{children}</div>;
}
