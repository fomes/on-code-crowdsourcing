"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";

export function NavBar() {
  const router = useRouter();

  return (
    <div className="bg-black-color text-white p-4">
      <div className="container">
        <h1 className="text-xl font-semibold">
          <Icon
            icon={"uil:home-alt"}
            width={"32px"}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </h1>
      </div>
    </div>
  );
}
