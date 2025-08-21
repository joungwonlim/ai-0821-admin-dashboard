import { NextResponse } from "next/server";
import { OpenAPI } from "@/lib/stripe";
import { Service } from "@/lib/stripe/services/Service"; // Assuming Service is the main service class

export async function GET() {
  try {
    // Set the Stripe API key
    OpenAPI.TOKEN = process.env.STRIPE_SECRET_KEY;

    // Example: List products
    const products = await Service.listProducts(); // Assuming listProducts is available

    return NextResponse.json(products);
  } catch (error: any) {
    console.error("Stripe API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
