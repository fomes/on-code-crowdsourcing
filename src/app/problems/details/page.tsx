import { comments } from "@/_data/CommentsData";
import { solution } from "@/_data/SolutionData";
import { CommentCard } from "@/components/CommentCard";
import { IconClientComponent } from "@/components/IconClientComponent";
import { SolutionCard } from "@/components/SolutionCard";
import Image from "next/image";
import React from "react";

export default function DetailsPage() {
  return (
    <main>
      <div className="flex flex-col h-screen-navbar px-14">
        <h1 className="text-black-color text-center text-[56px] mb-12 font-extrabold">
          Título do Problema
        </h1>

        <div className="flex justify-center gap-9">
          <div>
            <div className="flex flex-col gap-2 max-w-[860px]">
              <Image
                src={"/assets/Rectangle6.png"}
                alt="People"
                width={860}
                height={484}
                priority
              />

              <span className="flex gap-1 items-center">
                <IconClientComponent icon="carbon:location-filled" /> Bairro,
                Cidade - UF
              </span>

              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus, inventore. Illum possimus, quos nobis velit odio
                mollitia nemo fuga ipsum excepturi, eos culpa quod veritatis
                nulla ut, omnis repellendus totam. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Rem nobis voluptate quasi
                architecto tempora vero dignissimos nesciunt dolorem porro,
                beatae quam id esse temporibus eos, doloribus et? Ipsa, magnam
                itaque?
              </p>

              <div className="bg-[#7825FF1A]/10 mb-10 p-2 rounded-md">
                <h2 className="text-black-color font-bold text-base">
                  Adicione o título
                </h2>

                <input
                  type="text"
                  name="solution-desc"
                  placeholder="Descreva a sua solução..."
                  className="bg-transparent w-full border-b-[0.8px] border-[#79808B] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2 mb-28">
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

          <div className="w-[430px] flex flex-col items-center">
            <h1 className="text-[32px] font-bold mb-4">Discussão</h1>

            <p className="text-sm mb-8">
              *Você pode votar até as 23h59 do dia 01/01/2024
            </p>

            <div className="bg-[#7825FF1A]/10 w-full h-[82px] rounded-2xl px-4 flex items-center gap-4 mb-2">
              <div>
                <Image
                  alt="Profile"
                  src={"/assets/Ellipse1.png"}
                  width={50}
                  height={50}
                />
              </div>

              <input
                type="text"
                name="comment-desc"
                placeholder="Adicione um comentário..."
                className="bg-transparent w-full border-b-[0.8px] border-[#79808B] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              {comments.map((item, index) => {
                return (
                  <CommentCard
                    key={index}
                    name={item.name}
                    time={item.postTime}
                    comment={item.comment}
                    avatar={item.avatar}
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
