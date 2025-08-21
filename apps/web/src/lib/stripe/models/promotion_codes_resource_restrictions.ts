/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { promotion_code_currency_option } from './promotion_code_currency_option';
export type promotion_codes_resource_restrictions = {
    /**
     * Promotion code restrictions defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
     */
    currency_options?: Record<string, promotion_code_currency_option>;
    /**
     * A Boolean indicating if the Promotion Code should only be redeemed for Customers without any successful payments or invoices
     */
    first_time_transaction: boolean;
    /**
     * Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
     */
    minimum_amount?: number | null;
    /**
     * Three-letter [ISO code](https://stripe.com/docs/currencies) for minimum_amount
     */
    minimum_amount_currency?: string | null;
};

