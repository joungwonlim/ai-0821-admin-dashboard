/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { custom_unit_amount } from './custom_unit_amount';
import type { price_tier } from './price_tier';
export type currency_option = {
    /**
     * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
     */
    custom_unit_amount?: custom_unit_amount | null;
    /**
     * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
     */
    tax_behavior?: currency_option.tax_behavior | null;
    /**
     * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
     */
    tiers?: Array<price_tier>;
    /**
     * The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
     */
    unit_amount?: number | null;
    /**
     * The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
     */
    unit_amount_decimal?: string | null;
};
export namespace currency_option {
    /**
     * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
     */
    export enum tax_behavior {
        EXCLUSIVE = 'exclusive',
        INCLUSIVE = 'inclusive',
        UNSPECIFIED = 'unspecified',
    }
}

