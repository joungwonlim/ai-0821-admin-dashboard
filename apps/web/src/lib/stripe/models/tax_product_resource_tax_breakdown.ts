/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tax_product_resource_tax_rate_details } from './tax_product_resource_tax_rate_details';
export type tax_product_resource_tax_breakdown = {
    /**
     * The amount of tax, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    amount: number;
    /**
     * Specifies whether the tax amount is included in the line item amount.
     */
    inclusive: boolean;
    tax_rate_details: tax_product_resource_tax_rate_details;
    /**
     * The reasoning behind this tax, for example, if the product is tax exempt. We might extend the possible values for this field to support new tax rules.
     */
    taxability_reason: tax_product_resource_tax_breakdown.taxability_reason;
    /**
     * The amount on which tax is calculated, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    taxable_amount: number;
};
export namespace tax_product_resource_tax_breakdown {
    /**
     * The reasoning behind this tax, for example, if the product is tax exempt. We might extend the possible values for this field to support new tax rules.
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

