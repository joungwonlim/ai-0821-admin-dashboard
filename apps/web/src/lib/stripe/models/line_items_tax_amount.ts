/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tax_rate } from './tax_rate';
export type line_items_tax_amount = {
    /**
     * Amount of tax applied for this rate.
     */
    amount: number;
    rate: tax_rate;
    /**
     * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
     */
    taxability_reason?: line_items_tax_amount.taxability_reason | null;
    /**
     * The amount on which tax is calculated, in cents (or local equivalent).
     */
    taxable_amount?: number | null;
};
export namespace line_items_tax_amount {
    /**
     * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
     */
    export enum taxability_reason {
        CUSTOMER_EXEMPT = 'customer_exempt',
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
}

