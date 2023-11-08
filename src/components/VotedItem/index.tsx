import { Icon } from "@iconify/react/dist/iconify.js";
import { twMerge } from "tailwind-merge";

interface VotedItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  voted: boolean;
}

export function VotedItem({ voted, ...props }: VotedItemProps) {
  const basedStyled =
    "flex items-center gap-1 py-2 px-4 rounded-xl cursor-pointer hover:bg-on-code-70 transition-all hover:duration-300";

  return (
    <>
      {voted ? (
        <span {...props} className={twMerge(basedStyled, "bg-on-code")}>
          <Icon icon="mingcute:star-fill" className="text-white" />
          <h2 className="text-base font-bold text-white">Votado</h2>
        </span>
      ) : (
        <span
          {...props}
          className={twMerge(basedStyled, "border border-pink-500")}
        >
          <Icon icon="mingcute:star-fill" className="text-black" />
          <h2 className="text-base font-bold">Votar nesta solução</h2>
        </span>
      )}
    </>
  );
}
