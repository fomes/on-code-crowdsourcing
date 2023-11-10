"use client";

import {
  LoginPageActionTypes,
  LoginPageActions,
  LoginPageState,
} from "@/app/login/page";
import React from "react";
import { LoginForm } from "../LoginComponents/LoginForm";
import { RegisterForm } from "../LoginComponents/RegisterForm";

export function SwitchForm() {
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
  return <>{actions[state.actionType].component}</>;
}
