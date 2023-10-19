import LoginPage from "@/components/LoginComponents/LoginPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1 flex items-center justify-center">
        <LoginPage />
      </div>
    </main>
  );
}
