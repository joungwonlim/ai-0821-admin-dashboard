/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_paypal = {
    /**
     * Two-letter ISO code representing the buyer's country. Values are provided by PayPal directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
     */
    country?: string | null;
    /**
     * Owner's email. Values are provided by PayPal directly
     * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
     */
    payer_email?: string | null;
    /**
     * PayPal account PayerID. This identifier uniquely identifies the PayPal customer.
     */
    payer_id?: string | null;
};

