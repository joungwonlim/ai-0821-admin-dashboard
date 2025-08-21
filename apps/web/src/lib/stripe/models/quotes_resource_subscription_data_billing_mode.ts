/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The billing mode of the quote.
 */
export type quotes_resource_subscription_data_billing_mode = {
    /**
     * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
     */
    type: quotes_resource_subscription_data_billing_mode.type;
};
export namespace quotes_resource_subscription_data_billing_mode {
    /**
     * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
     */
    export enum type {
        CLASSIC = 'classic',
        FLEXIBLE = 'flexible',
    }
}

