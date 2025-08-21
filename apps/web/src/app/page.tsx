import LoginButton from "@/components/login-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">SaaS Admin Dashboard</h1>
      <LoginButton />
    </main>
  );
}
