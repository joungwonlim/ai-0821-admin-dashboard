import { OpenAPI } from "./stripe/core/OpenAPI"; // Correct path to OpenAPI
import { DefaultService } from "./stripe/services/DefaultService"; // Correct service class name

// Initialize OpenAPI with the Stripe secret key
OpenAPI.TOKEN = process.env.STRIPE_SECRET_KEY;

// Export the service client
export const stripeService = DefaultService;
