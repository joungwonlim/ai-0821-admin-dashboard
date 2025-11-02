/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_details_swish = {
    /**
     * Uniquely identifies the payer's Swish account. You can use this attribute to check whether two Swish transactions were paid for by the same payer
     */
    fingerprint?: string | null;
    /**
     * Payer bank reference number for the payment
     */
    payment_reference?: string | null;
    /**
     * The last four digits of the Swish account phone number
     */
    verified_phone_last4?: string | null;
};

