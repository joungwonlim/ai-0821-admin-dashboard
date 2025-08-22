/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type balance_amount_by_source_type = {
    /**
     * Amount coming from [legacy US ACH payments](https://docs.stripe.com/ach-deprecated).
     */
    bank_account?: number;
    /**
     * Amount coming from most payment methods, including cards as well as [non-legacy bank debits](https://docs.stripe.com/payments/bank-debits).
     */
    card?: number;
    /**
     * Amount coming from [FPX](https://docs.stripe.com/payments/fpx), a Malaysian payment method.
     */
    fpx?: number;
};

