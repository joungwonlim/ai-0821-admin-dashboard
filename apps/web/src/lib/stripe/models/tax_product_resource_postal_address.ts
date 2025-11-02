/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type tax_product_resource_postal_address = {
    /**
     * City, district, suburb, town, or village.
     */
    city?: string | null;
    /**
     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country: string;
    /**
     * Address line 1 (e.g., street, PO Box, or company name).
     */
    line1?: string | null;
    /**
     * Address line 2 (e.g., apartment, suite, unit, or building).
     */
    line2?: string | null;
    /**
     * ZIP or postal code.
     */
    postal_code?: string | null;
    /**
     * State/province as an [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) subdivision code, without country prefix. Example: "NY" or "TX".
     */
    state?: string | null;
};

