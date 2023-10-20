"use client";
import React from "react";
import { LoginForm } from "../../components/LoginComponents/LoginForm";
import { RegisterForm } from "../../components/LoginComponents/RegisterForm";
import { LoginSidebarImage } from "../../components/LoginComponents/LoginSidebarImage";

export type LoginPageActionTypes = "login" | "register";

type LoginPageAction = {
  component: React.ReactNode;
};

type LoginPageActions = {
  [key in LoginPageActionTypes]: LoginPageAction;
};

type LoginPageState = {
  actionType: LoginPageActionTypes;
};

export default function LoginPage() {
  const [state, setState] = React.useState<LoginPageState>({
    actionType: "login",
  });

  const handleSetAction = (action: LoginPageActionTypes) => {
    setState({ actionType: action });
  };

  const actions: LoginPageActions = {
    login: {
      component: <LoginForm handleSetAction={handleSetAction} />,
    },
    register: {
      component: <RegisterForm handleSetAction={handleSetAction} />,
    },
  };

  return (
    <main className="flex h-screen-navbar">
      <LoginSidebarImage />
      <div className="flex-1 flex items-center justify-center">
        {actions[state.actionType].component}
      </div>
    </main>
  );
}
