/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_intent_payment_method_options_mandate_options_acss_debit = {
    /**
     * A URL for custom mandate text
     */
    custom_mandate_url?: string;
    /**
     * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
     */
    interval_description?: string | null;
    /**
     * Payment schedule for the mandate.
     */
    payment_schedule?: payment_intent_payment_method_options_mandate_options_acss_debit.payment_schedule | null;
    /**
     * Transaction type of the mandate.
     */
    transaction_type?: payment_intent_payment_method_options_mandate_options_acss_debit.transaction_type | null;
};
export namespace payment_intent_payment_method_options_mandate_options_acss_debit {
    /**
     * Payment schedule for the mandate.
     */
    export enum payment_schedule {
        COMBINED = 'combined',
        INTERVAL = 'interval',
        SPORADIC = 'sporadic',
    }
    /**
     * Transaction type of the mandate.
     */
    export enum transaction_type {
        BUSINESS = 'business',
        PERSONAL = 'personal',
    }
}

