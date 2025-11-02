/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tax_product_resource_jurisdiction } from './tax_product_resource_jurisdiction';
import type { tax_product_resource_line_item_tax_rate_details } from './tax_product_resource_line_item_tax_rate_details';
export type tax_product_resource_line_item_tax_breakdown = {
    /**
     * The amount of tax, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    amount: number;
    jurisdiction: tax_product_resource_jurisdiction;
    /**
     * Indicates whether the jurisdiction was determined by the origin (merchant's address) or destination (customer's address).
     */
    sourcing: tax_product_resource_line_item_tax_breakdown.sourcing;
    /**
     * Details regarding the rate for this tax. This field will be `null` when the tax is not imposed, for example if the product is exempt from tax.
     */
    tax_rate_details?: tax_product_resource_line_item_tax_rate_details | null;
    /**
     * The reasoning behind this tax, for example, if the product is tax exempt. The possible values for this field may be extended as new tax rules are supported.
     */
    taxability_reason: tax_product_resource_line_item_tax_breakdown.taxability_reason;
    /**
     * The amount on which tax is calculated, in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    taxable_amount: number;
};
export namespace tax_product_resource_line_item_tax_breakdown {
    /**
     * Indicates whether the jurisdiction was determined by the origin (merchant's address) or destination (customer's address).
     */
    export enum sourcing {
        DESTINATION = 'destination',
        ORIGIN = 'origin',
    }
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

