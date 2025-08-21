"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslations } from 'next-intl'; // Import useTranslations

export default function Home() {
  const t = useTranslations('Index'); // Initialize translations

  const throwError = () => {
    throw new Error(t('throwError'));
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
        setStripeError(data.error || t('fetchStripeDataError')); // Use translation for error
      }
    } catch (error: any) {
      setStripeError(error.message || t('unexpectedError')); // Use translation for error
    } finally {
      setLoadingStripe(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-lg text-muted-foreground">
          {t('welcome')}
        </p>
        <div className="mt-8 flex flex-col items-center space-y-4">
          <Button onClick={throwError}>{t('throwError')}</Button>
          <Button onClick={fetchStripeData} disabled={loadingStripe}>
            {loadingStripe ? t('fetchingStripeData') : t('fetchStripeData')}
          </Button>
          {stripeError && (
            <p className="text-red-500">Error: {stripeError}</p>
          )}
          {stripeData && (
            <div className="mt-4 p-4 border rounded-md w-full max-w-md text-left">
              <h2 className="text-xl font-semibold mb-2">{t('stripeProducts')}</h2>
              {stripeData.data && stripeData.data.length > 0 ? (
                <ul>
                  {stripeData.data.map((product: any) => (
                    <li key={product.id} className="mb-2">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.description || t('noDescription')}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{t('noProductsFound')}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
