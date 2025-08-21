/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type mandate_acss_debit = {
    /**
     * List of Stripe products where this mandate can be selected automatically.
     */
    default_for?: Array<'invoice' | 'subscription'>;
    /**
     * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
     */
    interval_description?: string | null;
    /**
     * Payment schedule for the mandate.
     */
    payment_schedule: mandate_acss_debit.payment_schedule;
    /**
     * Transaction type of the mandate.
     */
    transaction_type: mandate_acss_debit.transaction_type;
};
export namespace mandate_acss_debit {
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

