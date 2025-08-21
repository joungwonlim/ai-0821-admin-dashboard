/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type subscription_schedules_resource_invoice_item_period_resource_period_end = {
    /**
     * A precise Unix timestamp for the end of the invoice item period. Must be greater than or equal to `period.start`.
     */
    timestamp?: number;
    /**
     * Select how to calculate the end of the invoice item period.
     */
    type: subscription_schedules_resource_invoice_item_period_resource_period_end.type;
};
export namespace subscription_schedules_resource_invoice_item_period_resource_period_end {
    /**
     * Select how to calculate the end of the invoice item period.
     */
    export enum type {
        MIN_ITEM_PERIOD_END = 'min_item_period_end',
        PHASE_END = 'phase_end',
        TIMESTAMP = 'timestamp',
    }
}

