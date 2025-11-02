/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type checkout_acss_debit_mandate_options = {
    /**
     * A URL for custom mandate text
     */
    custom_mandate_url?: string;
    /**
     * List of Stripe products where this mandate can be selected automatically. Returned when the Session is in `setup` mode.
     */
    default_for?: Array<'invoice' | 'subscription'>;
    /**
     * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
     */
    interval_description?: string | null;
    /**
     * Payment schedule for the mandate.
     */
    payment_schedule?: checkout_acss_debit_mandate_options.payment_schedule | null;
    /**
     * Transaction type of the mandate.
     */
    transaction_type?: checkout_acss_debit_mandate_options.transaction_type | null;
};
export namespace checkout_acss_debit_mandate_options {
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

