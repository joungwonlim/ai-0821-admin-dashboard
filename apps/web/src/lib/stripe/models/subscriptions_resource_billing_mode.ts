/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The billing mode of the subscription.
 */
export type subscriptions_resource_billing_mode = {
    /**
     * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
     */
    type: subscriptions_resource_billing_mode.type;
    /**
     * Details on when the current billing_mode was adopted.
     */
    updated_at?: number;
};
export namespace subscriptions_resource_billing_mode {
    /**
     * Controls how prorations and invoices for subscriptions are calculated and orchestrated.
     */
    export enum type {
        CLASSIC = 'classic',
        FLEXIBLE = 'flexible',
    }
}

