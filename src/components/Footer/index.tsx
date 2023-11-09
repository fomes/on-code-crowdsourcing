"use client";

import { usePathname } from "next/navigation";

export function Footer() {
  const router = usePathname();

  return (
    <div
      className={`bg-black-color text-white p-4 fixed bottom-0 w-full ${
        router === "/login" && "hidden"
      }`}
    >
      <div className="flex justify-center">
        <h2 className="text-sm font-normal">Todos os direitos reservados</h2>
      </div>
    </div>
  );
}
