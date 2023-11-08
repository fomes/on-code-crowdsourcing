"use client";

import { solution } from "@/_data/SolutionData";
import { SolutionCard } from "@/components/SolutionCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React from "react";

export default function DetailsPage() {
  return (
    <main>
      <div className="flex h-screen-navbar px-14">
        <div className="w-full">
          <h1 className="text-black-color text-center text-[56px] font-extrabold">
            Título do Problema
          </h1>

          <div className="flex flex-col gap-2 max-w-[860px] mt-12">
            <Image
              src={"/assets/Rectangle6.png"}
              alt="People"
              width={860}
              height={484}
              priority
            />

            <span className="flex gap-1 items-center">
              <Icon icon="carbon:location-filled" /> Bairro, Cidade - UF
            </span>

            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Possimus, inventore. Illum possimus, quos nobis velit odio
              mollitia nemo fuga ipsum excepturi, eos culpa quod veritatis nulla
              ut, omnis repellendus totam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Rem nobis voluptate quasi architecto
              tempora vero dignissimos nesciunt dolorem porro, beatae quam id
              esse temporibus eos, doloribus et? Ipsa, magnam itaque?
            </p>

            <div className="bg-[#7825FF1A]/10 mb-10 p-2 rounded-md">
              <h2 className="text-black-color font-bold text-base">
                Adicione o título
              </h2>

              <input
                type="text"
                placeholder="Descreva a sua solução..."
                className="bg-transparent w-full border-b-[0.8px] border-[#79808B]"
              />
            </div>

            <div className="flex flex-col gap-2">
              {solution.map((item, index) => {
                return (
                  <SolutionCard
                    key={index}
                    title={item.title}
                    desc={item.desc}
                    value={item.value}
                    voted={item.voted}
                    votedCount={item.votedCount}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
