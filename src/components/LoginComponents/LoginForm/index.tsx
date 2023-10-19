"use client";

import { LoginSidebarImage } from "../LoginSidebarImage";
import { Card } from "../../Card";
import { Button } from "../../Button";
import { TextInput } from "../../TextInput";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { LoginPageActionTypes } from "../LoginPage";

type LoginFormProps = {
  handleSetAction: (action: LoginPageActionTypes) => void;
};

export function LoginForm({ handleSetAction }: LoginFormProps) {
  return (
    <Card className="border-[#121212]">
      <TextInput
        iconLeft="uil:envelope-alt"
        placeholder="E-maiil"
        type="email"
        label="E-mail"
        labelClassName="text-black"
      />

      <TextInput
        iconLeft="uil:key-skeleton-alt"
        placeholder="Senha"
        type="password"
        label="Senha"
        labelClassName="text-black"
      />

      <div className="mb-6 text-left">
        <Link href="#" className="text-sub text-sm underline">
          Esqueci a senha
        </Link>
      </div>

      <div className="flex flex-col gap-[10px]">
        <Button variant="primary">Entrar</Button>
        <Button variant="secondary" iconLeft="uil:facebook-f">
          Entrar com o Facebook
        </Button>
        <Button variant="secondary" iconLeft="fe:google">
          Entrar com o Google
        </Button>
      </div>

      <div className="mt-[24px]">
        <span
          className="cursor-pointer flex gap-2 items-center underline"
          onClick={() => handleSetAction("register")}
        >
          <Icon icon="uil:plus-square" />
          Quero criar uma conta
        </span>
      </div>
    </Card>
  );
}
