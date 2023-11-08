"use client";

import Link from "next/link";
import { Card } from "../../Card";
import { Button } from "../../Button";
import { TextInput } from "../../TextInput";
import { Icon } from "@iconify/react/dist/iconify.js";
import { LoginPageActionTypes } from "../../../app/login/page";
import { useRouter } from "next/navigation";

type LoginFormProps = {
  handleSetAction: (action: LoginPageActionTypes) => void;
};

export function LoginForm({ handleSetAction }: LoginFormProps) {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <Card className="border-[#121212]">
      <form action="#" onSubmit={handleSubmit}>
        <TextInput
          required
          type="email"
          label="E-mail"
          placeholder="E-maiil"
          iconLeft="uil:envelope-alt"
          labelClassName="text-black"
        />

        <TextInput
          required
          label="Senha"
          type="password"
          placeholder="Senha"
          labelClassName="text-black"
          iconLeft="uil:key-skeleton-alt"
        />

        <div className="mb-6 text-left">
          <Link href="#" className="text-sub text-sm underline">
            Esqueci a senha
          </Link>
        </div>

        <div className="flex flex-col gap-[10px]">
          <Button variant="primary" type="submit">
            Entrar
          </Button>
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
      </form>
    </Card>
  );
}
