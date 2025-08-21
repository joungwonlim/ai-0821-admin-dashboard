/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_bill_resource_invoicing_taxes_tax_rate_details } from './billing_bill_resource_invoicing_taxes_tax_rate_details';
export type billing_bill_resource_invoicing_taxes_tax = {
    /**
     * The amount of the tax, in cents (or local equivalent).
     */
    amount: number;
    /**
     * Whether this tax is inclusive or exclusive.
     */
    tax_behavior: billing_bill_resource_invoicing_taxes_tax.tax_behavior;
    /**
     * Additional details about the tax rate. Only present when `type` is `tax_rate_details`.
     */
    tax_rate_details?: billing_bill_resource_invoicing_taxes_tax_rate_details | null;
    /**
     * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
     */
    taxability_reason: billing_bill_resource_invoicing_taxes_tax.taxability_reason;
    /**
     * The amount on which tax is calculated, in cents (or local equivalent).
     */
    taxable_amount?: number | null;
    /**
     * The type of tax information.
     */
    type: billing_bill_resource_invoicing_taxes_tax.type;
};
export namespace billing_bill_resource_invoicing_taxes_tax {
    /**
     * Whether this tax is inclusive or exclusive.
     */
    export enum tax_behavior {
        EXCLUSIVE = 'exclusive',
        INCLUSIVE = 'inclusive',
    }
    /**
     * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
     */
    export enum taxability_reason {
        CUSTOMER_EXEMPT = 'customer_exempt',
        NOT_AVAILABLE = 'not_available',
        NOT_COLLECTING = 'not_collecting',
        NOT_SUBJECT_TO_TAX = 'not_subject_to_tax',
        NOT_SUPPORTED = 'not_supported',
        PORTION_PRODUCT_EXEMPT = 'portion_product_exempt',
        PORTION_REDUCED_RATED = 'portion_reduced_rated',
        PORTION_STANDARD_RATED = 'portion_standard_rated',
        PRODUCT_EXEMPT = 'product_exempt',
        PRODUCT_EXEMPT_HOLIDAY = 'product_exempt_holiday',
        PROPORTIONALLY_RATED = 'proportionally_rated',
        REDUCED_RATED = 'reduced_rated',
        REVERSE_CHARGE = 'reverse_charge',
        STANDARD_RATED = 'standard_rated',
        TAXABLE_BASIS_REDUCED = 'taxable_basis_reduced',
        ZERO_RATED = 'zero_rated',
    }
    /**
     * The type of tax information.
     */
    export enum type {
        TAX_RATE_DETAILS = 'tax_rate_details',
    }
}

