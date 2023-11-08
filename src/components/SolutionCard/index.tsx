"use client";

import { solution } from "@/_data/SolutionData";
import { VotedItem } from "../VotedItem";
import { useState } from "react";

interface SolutionCardProps {
  solution: (typeof solution)[0];
}

export function SolutionCard({
  voted,
  title,
  desc,
  value,
  votedCount,
}: SolutionCardProps["solution"]) {
  const [voteState, setVoteState] = useState<boolean>(voted);
  const [votedCountState, setVotedCountState] = useState<number>(votedCount);

  const handleToggleVote = () => {
    setVoteState((prevState) => !prevState);

    if (voteState) {
      setVotedCountState((prevState) => prevState - 1);
    } else {
      setVotedCountState((prevState) => prevState + 1);
    }
  };

  return (
    <div className="border border-[#79808B] rounded-lg py-4 px-5">
      <h1 className="mb-2 text-base font-bold">{title}</h1>

      <p className="mb-[14px] text-justify">{desc}</p>

      <div className="flex items-center justify-between">
        <div>
          <strong>R$ {value} </strong>
          <span>Quantia necessária para esta solução</span>
        </div>

        <div className="right-5 bottom-4 flex items-center gap-8">
          <span>
            <strong>{votedCountState} </strong>votos
          </span>

          <div onClick={handleToggleVote}>
            {voteState ? (
              <VotedItem voted={voteState} />
            ) : (
              <VotedItem voted={voteState} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
