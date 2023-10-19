"use client";

import { useState } from "react";
import { FirstStep } from "../FirstStep";
import { SecondStep } from "../SecondStep";
import { Card } from "@/components/Card";
import { LoginPageActionTypes } from "../LoginPage";
import { Icon } from "@iconify/react/dist/iconify.js";

type RegisterFormProps = {
  handleSetAction?: (action: LoginPageActionTypes) => void;
};

export type RegisterFormState = {
  step?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
  fullName?: string;
  dateOfBirth?: string | Date;
  phone?: string;
};

export function RegisterForm({ handleSetAction }: RegisterFormProps) {
  const [state, setState] = useState<RegisterFormState>({
    step: 0,
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    dateOfBirth: "",
    phone: "",
  });

  const handleChangeState = (updatedValues: RegisterFormState) => {
    setState((prevState) => ({
      ...prevState,
      ...updatedValues,
    }));
  };

  const handleNextStep = () => {
    handleChangeState({ step: state.step ? state.step++ : 1 });
  };

  const steps = [
    <FirstStep
      state={state}
      handleNextStep={handleNextStep}
      handleChangeState={handleChangeState}
    />,
    <SecondStep state={state} handleChangeState={handleChangeState} />,
  ];

  return (
    <Card className="border-[#121212]">
      {steps[state.step ?? 0]}

      <div className="mt-[26px]">
        <span
          className="flex items-center gap-1 text-sub cursor-pointer"
          onClick={() => handleSetAction("login")}
        >
          <Icon icon="uil:user" />
          Login
        </span>
      </div>
    </Card>
  );
}
