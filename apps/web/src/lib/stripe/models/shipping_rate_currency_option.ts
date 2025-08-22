/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type shipping_rate_currency_option = {
    /**
     * A non-negative integer in cents representing how much to charge.
     */
    amount: number;
    /**
     * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
     */
    tax_behavior: shipping_rate_currency_option.tax_behavior;
};
export namespace shipping_rate_currency_option {
    /**
     * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
     */
    export enum tax_behavior {
        EXCLUSIVE = 'exclusive',
        INCLUSIVE = 'inclusive',
        UNSPECIFIED = 'unspecified',
    }
}

