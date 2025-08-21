/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type subscription_billing_thresholds = {
    /**
     * Monetary threshold that triggers the subscription to create an invoice
     */
    amount_gte?: number | null;
    /**
     * Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged. This value may not be `true` if the subscription contains items with plans that have `aggregate_usage=last_ever`.
     */
    reset_billing_cycle_anchor?: boolean | null;
};

