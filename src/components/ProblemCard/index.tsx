"use client";

import { Button } from "../Button";
import { RemaingDays } from "../RemainingDays";
import { StringUtils } from "@/utils/stringUtils";
import Address from "../Address";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProblemItemProps {
  problem: IProblem;
}

export const ProblemItem = ({ problem }: ProblemItemProps) => {
  const { address, author, description, imgUrl, title, deadline } = problem;

  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 rounded-[10px] overflow-hidden shadow-md w-full max-w-[420px] min-w-[320px]">
      <Image src={imgUrl || ""} alt="People" height={420} width={420} />
      <div className="flex flex-col py-8 px-6">
        <div className="flex flex-col w-full h-[250px] overflow-hidden gap-6">
          <h2 className="text-xl font-bold line-clamp-2">{title}</h2>
          <div className="text-sm text-sub">
            {" "}
            por: {StringUtils.capitalizeFirstCharacterInName(author ?? "")}
          </div>
          <div className="line-clamp-3"> {description}</div>
          <Address
            uf={address?.uf}
            city={address?.city}
            neighborhood={address?.neighborhood}
          />
          <RemaingDays
            finalDate={`${deadline}`}
            label="para o fim da votação"
          />
        </div>
      </div>
      <Button
        iconLeft="fluent:handshake-24-filled"
        className="py-6"
        onClick={() => router.push("/problems/details")}
      >
        Ver problema
      </Button>
    </div>
  );
};
