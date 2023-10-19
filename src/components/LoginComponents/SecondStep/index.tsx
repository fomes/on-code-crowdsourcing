"use client";

import { TextInput } from "../../TextInput";
import { Button } from "../../Button";
import { RegisterFormState } from "../RegisterForm";

type SecondStepProps = {
  state: RegisterFormState;
  handleChangeState: (updatedValues: RegisterFormState) => void;
};

export function SecondStep({ state, handleChangeState }: SecondStepProps) {
  return (
    <>
      <TextInput
        type="email"
        label="Nome completo"
        placeholder="Nome"
        iconLeft="uil:user-alt"
        labelClassName="text-black"
        value={state.fullName}
        onChange={(event) =>
          handleChangeState({ fullName: event.target.value })
        }
      />

      <TextInput
        iconLeft="uil:calendar-alt"
        placeholder="DD/MM/AAAA"
        type="date"
        label="Data de nascimento"
        labelClassName="text-black"
        value={state.dateOfBirth?.toString()}
        onChange={(event) =>
          handleChangeState({ dateOfBirth: event.target.value })
        }
      />

      <TextInput
        iconLeft="uil:phone-alt"
        placeholder="(00) 0 0000-0000"
        type="text"
        label="Celular"
        labelClassName="text-black"
        value={state.phone}
        onChange={(event) => handleChangeState({ phone: event.target.value })}
      />

      <div className="mt-[24px]">
        <Button variant="primary" className="rounded-md w-full">
          Próximo
        </Button>
      </div>
    </>
  );
}
