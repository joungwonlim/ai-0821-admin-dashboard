import { NextResponse } from "next/server";
import { stripeService } from "@/lib/stripe-client"; // Import the new client

export async function GET() {
  try {
    // Example: List products
    const products = await stripeService.getProducts(); // Correct method name

    return NextResponse.json(products);
  } catch (error: any) {
    console.error("Stripe API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
