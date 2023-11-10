import React from "react";
import { LoginSidebarImage } from "../../components/LoginComponents/LoginSidebarImage";
import { SwitchForm } from "@/components/SwitchForm";

export type LoginPageActionTypes = "login" | "register";

export type LoginPageAction = {
  component: React.ReactNode;
};

export type LoginPageActions = {
  [key in LoginPageActionTypes]: LoginPageAction;
};

export type LoginPageState = {
  actionType: LoginPageActionTypes;
};

export default function LoginPage() {
  return (
    <main className="flex h-screen-navbar">
      <LoginSidebarImage />
      <div className="flex-1 flex items-center justify-center">
        <SwitchForm />
      </div>
    </main>
  );
}
