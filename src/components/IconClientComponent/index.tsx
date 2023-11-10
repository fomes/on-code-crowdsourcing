"use client";

import { Icon } from "@iconify/react/dist/iconify.js";

interface IconClientComponentProps {
  icon: string;
}

export function IconClientComponent({ icon }: IconClientComponentProps) {
  return <Icon icon={icon} />;
}
