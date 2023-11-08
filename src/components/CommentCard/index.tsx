import Image from "next/image";

interface CommentCardProps {
  name: string;
  time: string;
  comment: string;
  avatar: string;
}

export function CommentCard({ name, time, comment, avatar }: CommentCardProps) {
  return (
    <div className="w-full border rounded-2xl px-5 py-4 flex items-center gap-4">
      <div className="min-w-[50px]">
        <Image alt="Profile" src={avatar} width={50} height={50} />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-bold">{name}</h2>{" "}
          <span className="text-xs font-normal">{time}</span>
        </div>
        <p className="text-sm font-normal">{comment}</p>
      </div>
    </div>
  );
}
