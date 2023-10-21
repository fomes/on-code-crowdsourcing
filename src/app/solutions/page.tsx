import { ProblemItem } from "@/components/ProblemCard";

export default function Solutions() {
  const problems: IProblem[] = [
    {
      imgUrl: "https://jpeg.org/images/jpeg-home.jpg",
      title: "Action",
      description: "Solution for a problem",
      author: "Samuel Moreira",
      address: {
        uf: "PR",
        city: "Maringa",
        neighborhood: "Zona 02",
      },
      pix: "150",
      deadline: "2023-10-22",
    },
    {
      imgUrl: "https://jpeg.org/images/jpeg-home.jpg",
      title: "Action",
      description: "Solution for a problem",
      author: "Samuel Moreira",
      address: {
        uf: "PR",
        city: "Maringa",
        neighborhood: "Zona 02",
      },
      pix: "150",
      deadline: "2023-10-23",
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <div className="mt-[56px]">
        <h1 className="text-[56px] text-black font-extrabold text-center">
          Escolha uma ação para apoiar
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 w-full max-w-[1360] justify-center py-4">
        {problems.map((problem, index) => (
          <ProblemItem key={index} problem={problem} />
        ))}
      </div>
    </main>
  );
}
