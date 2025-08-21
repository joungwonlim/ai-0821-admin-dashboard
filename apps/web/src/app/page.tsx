"use client"; // Add "use client" directive

import { Button } from "@/components/ui/button"; // Import Button

export default function Home() {
  const throwError = () => {
    throw new Error("This is a test error from the UI!");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">SaaS Admin Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to your dashboard. Content will be displayed here.
        </p>
        <Button onClick={throwError} className="mt-8">
          Throw Test Error
        </Button>
      </div>
    </main>
  );
}
