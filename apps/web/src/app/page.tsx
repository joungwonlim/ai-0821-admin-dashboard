"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const throwError = () => {
    throw new Error("This is a test error from the UI!");
  };

  const [stripeData, setStripeData] = useState<any>(null);
  const [loadingStripe, setLoadingStripe] = useState(false);
  const [stripeError, setStripeError] = useState<string | null>(null);

  const fetchStripeData = async () => {
    setLoadingStripe(true);
    setStripeError(null);
    try {
      const response = await fetch("/api/stripe");
      const data = await response.json();
      if (response.ok) {
        setStripeData(data);
      } else {
        setStripeError(data.error || "Failed to fetch Stripe data.");
      }
    } catch (error: any) {
      setStripeError(error.message || "An unexpected error occurred.");
    } finally {
      setLoadingStripe(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">SaaS Admin Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to your dashboard. Content will be displayed here.
        </p>
        <div className="mt-8 flex flex-col items-center space-y-4">
          <Button onClick={throwError}>Throw Test Error</Button>
          <Button onClick={fetchStripeData} disabled={loadingStripe}>
            {loadingStripe ? "Fetching Stripe Data..." : "Fetch Stripe Data"}
          </Button>
          {stripeError && (
            <p className="text-red-500">Error: {stripeError}</p>
          )}
          {stripeData && (
            <div className="mt-4 p-4 border rounded-md w-full max-w-md text-left">
              <h2 className="text-xl font-semibold mb-2">Stripe Data:</h2>
              <pre className="text-sm overflow-auto max-h-60">
                {JSON.stringify(stripeData, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
