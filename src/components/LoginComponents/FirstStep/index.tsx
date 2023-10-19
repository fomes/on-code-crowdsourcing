"use client";

import { TextInput } from "../../TextInput";
import { Button } from "../../Button";
import { RegisterFormState } from "../RegisterForm";

type FirstStepProps = {
  state: RegisterFormState;
  handleNextStep: () => void;
  handleChangeState: (updateValues: RegisterFormState) => void;
};

export function FirstStep({
  state,
  handleNextStep,
  handleChangeState,
}: FirstStepProps) {
  return (
    <>
      <TextInput
        type="email"
        label="E-mail"
        placeholder="E-mail"
        iconLeft="uil:envelop-alt"
        labelClassName="text-black"
        value={state.email}
        onChange={(event) => handleChangeState({ email: event.target.value })}
      />

      <TextInput
        iconLeft="uil:key-skeleton-alt"
        placeholder="Senha"
        type="password"
        label="Senha"
        labelClassName="text-black"
        value={state.password}
        onChange={(event) =>
          handleChangeState({ password: event.target.value })
        }
      />

      <TextInput
        iconLeft="uil:key-skeleton-alt"
        placeholder="Confirmar Senha"
        type="password"
        label="Confirmar Senha"
        labelClassName="text-black"
        value={state.confirmPassword}
        onChange={(event) =>
          handleChangeState({ confirmPassword: event.target.value })
        }
      />

      <div className="mt-[24px]">
        <Button
          onClick={handleNextStep}
          variant="primary"
          className="rounded-md w-full"
        >
          Próximo
        </Button>
      </div>
    </>
  );
}
