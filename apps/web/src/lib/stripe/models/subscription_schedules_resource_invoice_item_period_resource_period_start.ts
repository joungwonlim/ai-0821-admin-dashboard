/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type subscription_schedules_resource_invoice_item_period_resource_period_start = {
    /**
     * A precise Unix timestamp for the start of the invoice item period. Must be less than or equal to `period.end`.
     */
    timestamp?: number;
    /**
     * Select how to calculate the start of the invoice item period.
     */
    type: subscription_schedules_resource_invoice_item_period_resource_period_start.type;
};
export namespace subscription_schedules_resource_invoice_item_period_resource_period_start {
    /**
     * Select how to calculate the start of the invoice item period.
     */
    export enum type {
        MAX_ITEM_PERIOD_START = 'max_item_period_start',
        PHASE_START = 'phase_start',
        TIMESTAMP = 'timestamp',
    }
}

