import React from "react";
import { CreateProblemForm } from "@/components/CreateProblemForm";
import { LoginSidebarImage } from "@/components/LoginComponents/LoginSidebarImage";

export type ProblemsCreateState = {
  title?: string;
  description?: string;
  uf?: string;
  city?: string;
  neighborhood?: string;
  imageUrl?: string;
  pix?: string;
  votingPeriod?: string;
};

export default function CreateProblemPage() {
  return (
    <main>
      <div className="flex h-screen-navbar">
        <LoginSidebarImage />
        <div className="flex flex-1 justify-center pl-10 pr-10 pb-10 overflow-auto">
          <CreateProblemForm />
        </div>
      </div>
    </main>
  );
}
