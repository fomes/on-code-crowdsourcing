"use client";

import { Button } from "@/components/Button";
import { LoginSidebarImage } from "@/components/LoginComponents/LoginSidebarImage";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea/intex";
import { TextInput } from "@/components/TextInput";

import React from "react";
import { twMerge } from "tailwind-merge";

type ProblemsCreateState = {
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
  const labelStyle = "text-base text-black text-2xl";
  const defaultLabelClasses = "block font-bold text-black text-2xl";
  const merged = twMerge(labelStyle, defaultLabelClasses);

  const [state, setState] = React.useState<ProblemsCreateState>({
    city: "",
    description: "",
    imageUrl: "",
    neighborhood: "",
    pix: "",
    title: "",
    uf: "",
    votingPeriod: "",
  });

  const handleChangeState = (updatedValues: ProblemsCreateState) => {
    setState((previousState) => ({
      ...previousState,
      ...updatedValues,
    }));
  };

  return (
    <main>
      <div className="flex h-screen-navbar">
        <LoginSidebarImage />
        <div className="flex flex-1 justify-center pl-10 pr-10 pb-10 overflow-auto">
          <div className="mt-20 max-w-[588px] w-[100%]">
            <TextInput
              label="Título da ação"
              placeholder="Título da ação"
              labelClassName={labelStyle}
              onChange={(e) =>
                handleChangeState({
                  title: e.target.value,
                })
              }
              value={state.title}
            />
            <TextArea
              rows={4}
              labelClassNames={labelStyle}
              label="Descrição do problema"
              className="resize-none"
              onChange={(e) =>
                handleChangeState({
                  description: e.target.value,
                })
              }
              value={state.description}
            />

            <div className="flex flex-col">
              <label className={`${merged}`}>Localização</label>
              <div className="flex gap-2 max-w-[100%]">
                <TextInput
                  label=""
                  placeholder="Estado - UF"
                  onChange={(e) =>
                    handleChangeState({
                      uf: e.target.value,
                    })
                  }
                  value={state.uf}
                />
                <TextInput
                  label=""
                  placeholder="Cidade"
                  onChange={(e) =>
                    handleChangeState({
                      city: e.target.value,
                    })
                  }
                  value={state.city}
                />
                <TextInput
                  label=""
                  placeholder="Bairro"
                  onChange={(e) =>
                    handleChangeState({
                      neighborhood: e.target.value,
                    })
                  }
                  value={state.neighborhood}
                />
              </div>
            </div>

            <TextInput
              label="Carregue sua imagem"
              labelClassName={`${labelStyle} mb-0`}
              placeholder="Insira o link aqui"
              iconLeft="uil:image-upload"
              subDescription={
                <span className="block mb-2 text-sm font-[400]">
                  Coloque no campo abaixo o <strong>link</strong> para a sua
                  imagem, ela será utilizada como capa da sua ação, a resolução
                  mínima para não perder muita qualidade é de 800x400px.
                </span>
              }
              onChange={(e) =>
                handleChangeState({
                  imageUrl: e.target.value,
                })
              }
              value={state.imageUrl}
            />
            <TextInput
              label="Chave PIX"
              labelClassName={`${labelStyle} mb-0`}
              subDescription="Insira a chave pix de quem ficará responsável por receber as doações e dar vida a solução encontrada, seja pessoa física ou jurídica."
              onChange={(e) =>
                handleChangeState({
                  pix: e.target.value,
                })
              }
              value={state.pix}
            />
            <Select
              labelClassNames={`${labelStyle} mb-0`}
              label="Periodo de votação"
              onChange={(e) =>
                handleChangeState({
                  votingPeriod: e.target.value,
                })
              }
              value={state.votingPeriod}
              subDescription="Escolha por quanto tempo as pessoas vão poder votar em uma solução para o seu problema. O período de arrecadação é de 30 dias ou até bater a meta."
              options={[
                { value: "3", text: "3 dias" },
                { value: "7", text: "7 dias" },
                { value: "15", text: "15 dias" },
                { value: "20", text: "20 dias" },
              ]}
            />

            <div className="flex flex-col gap-10 pb-10">
              <Button className="rounded-[10px] pt-[24px] pb-[24px]">
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
