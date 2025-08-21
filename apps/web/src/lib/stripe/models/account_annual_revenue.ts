/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type account_annual_revenue = {
    /**
     * A non-negative integer representing the amount in the [smallest currency unit](/currencies#zero-decimal).
     */
    amount?: number | null;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string | null;
    /**
     * The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
     */
    fiscal_year_end?: string | null;
};

