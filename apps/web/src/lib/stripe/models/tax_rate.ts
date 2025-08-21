/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tax_rate_flat_amount } from './tax_rate_flat_amount';
/**
 * Tax rates can be applied to [invoices](/invoicing/taxes/tax-rates), [subscriptions](/billing/taxes/tax-rates) and [Checkout Sessions](/payments/checkout/use-manual-tax-rates) to collect tax.
 *
 * Related guide: [Tax rates](/billing/taxes/tax-rates)
 */
export type tax_rate = {
    /**
     * Defaults to `true`. When set to `false`, this tax rate cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
     */
    active: boolean;
    /**
     * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country?: string | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
     */
    description?: string | null;
    /**
     * The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page.
     */
    display_name: string;
    /**
     * Actual/effective tax rate percentage out of 100. For tax calculations with automatic_tax[enabled]=true,
     * this percentage reflects the rate actually used to calculate tax based on the product's taxability
     * and whether the user is registered to collect taxes in the corresponding jurisdiction.
     */
    effective_percentage?: number | null;
    /**
     * The amount of the tax rate when the `rate_type` is `flat_amount`. Tax rates with `rate_type` `percentage` can vary based on the transaction, resulting in this field being `null`. This field exposes the amount and currency of the flat tax rate.
     */
    flat_amount?: tax_rate_flat_amount | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * This specifies if the tax rate is inclusive or exclusive.
     */
    inclusive: boolean;
    /**
     * The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer’s invoice.
     */
    jurisdiction?: string | null;
    /**
     * The level of the jurisdiction that imposes this tax rate. Will be `null` for manually defined tax rates.
     */
    jurisdiction_level?: tax_rate.jurisdiction_level | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: tax_rate.object;
    /**
     * Tax rate percentage out of 100. For tax calculations with automatic_tax[enabled]=true, this percentage includes the statutory tax rate of non-taxable jurisdictions.
     */
    percentage: number;
    /**
     * Indicates the type of tax rate applied to the taxable amount. This value can be `null` when no tax applies to the location. This field is only present for TaxRates created by Stripe Tax.
     */
    rate_type?: tax_rate.rate_type | null;
    /**
     * [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2), without country prefix. For example, "NY" for New York, United States.
     */
    state?: string | null;
    /**
     * The high-level tax type, such as `vat` or `sales_tax`.
     */
    tax_type?: tax_rate.tax_type | null;
};
export namespace tax_rate {
    /**
     * The level of the jurisdiction that imposes this tax rate. Will be `null` for manually defined tax rates.
     */
    export enum jurisdiction_level {
        CITY = 'city',
        COUNTRY = 'country',
        COUNTY = 'county',
        DISTRICT = 'district',
        MULTIPLE = 'multiple',
        STATE = 'state',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TAX_RATE = 'tax_rate',
    }
    /**
     * Indicates the type of tax rate applied to the taxable amount. This value can be `null` when no tax applies to the location. This field is only present for TaxRates created by Stripe Tax.
     */
    export enum rate_type {
        FLAT_AMOUNT = 'flat_amount',
        PERCENTAGE = 'percentage',
    }
    /**
     * The high-level tax type, such as `vat` or `sales_tax`.
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

