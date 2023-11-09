import { problems } from "@/_data/ProblemsData";
import { ProblemItem } from "@/components/ProblemCard";

export default function Problems() {
  return (
    <main className="flex flex-col items-center">
      <div className="mt-[56px]">
        <h1 className="text-[56px] text-black font-extrabold text-center">
          Conheça os problemas em votação
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
