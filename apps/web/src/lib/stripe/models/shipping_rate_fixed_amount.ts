/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { shipping_rate_currency_option } from './shipping_rate_currency_option';
export type shipping_rate_fixed_amount = {
    /**
     * A non-negative integer in cents representing how much to charge.
     */
    amount: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
     */
    currency_options?: Record<string, shipping_rate_currency_option>;
};

