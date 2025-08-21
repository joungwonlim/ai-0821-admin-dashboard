/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tax_rate_flat_amount } from './tax_rate_flat_amount';
export type tax_product_resource_tax_rate_details = {
    /**
     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country?: string | null;
    /**
     * The amount of the tax rate when the `rate_type` is `flat_amount`. Tax rates with `rate_type` `percentage` can vary based on the transaction, resulting in this field being `null`. This field exposes the amount and currency of the flat tax rate.
     */
    flat_amount?: tax_rate_flat_amount | null;
    /**
     * The tax rate percentage as a string. For example, 8.5% is represented as `"8.5"`.
     */
    percentage_decimal: string;
    /**
     * Indicates the type of tax rate applied to the taxable amount. This value can be `null` when no tax applies to the location. This field is only present for TaxRates created by Stripe Tax.
     */
    rate_type?: tax_product_resource_tax_rate_details.rate_type | null;
    /**
     * State, county, province, or region.
     */
    state?: string | null;
    /**
     * The tax type, such as `vat` or `sales_tax`.
     */
    tax_type?: tax_product_resource_tax_rate_details.tax_type | null;
};
export namespace tax_product_resource_tax_rate_details {
    /**
     * Indicates the type of tax rate applied to the taxable amount. This value can be `null` when no tax applies to the location. This field is only present for TaxRates created by Stripe Tax.
     */
    export enum rate_type {
        FLAT_AMOUNT = 'flat_amount',
        PERCENTAGE = 'percentage',
    }
    /**
     * The tax type, such as `vat` or `sales_tax`.
     */
    export enum tax_type {
        AMUSEMENT_TAX = 'amusement_tax',
        COMMUNICATIONS_TAX = 'communications_tax',
        GST = 'gst',
        HST = 'hst',
        IGST = 'igst',
        JCT = 'jct',
        LEASE_TAX = 'lease_tax',
        PST = 'pst',
        QST = 'qst',
        RETAIL_DELIVERY_FEE = 'retail_delivery_fee',
        RST = 'rst',
        SALES_TAX = 'sales_tax',
        SERVICE_TAX = 'service_tax',
        VAT = 'vat',
    }
}

