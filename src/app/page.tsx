import { actions } from "@/_data/ActionData";
import ActionCard from "@/components/ActionCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="mt-[56px]">
        <h1 className="text-[56px] text-black font-extrabold text-center">
          Escolha uma ação para apoiar
        </h1>
      </div>
      <div className="flex flex-wrap gap-8 w-full max-w-[1360] justify-center py-4">
        {actions.map((action, index) => (
          <ActionCard key={index} action={action} />
        ))}
      </div>
    </main>
  );
}
