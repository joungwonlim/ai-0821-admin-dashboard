/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { portal_subscription_cancellation_reason } from './portal_subscription_cancellation_reason';
export type portal_subscription_cancel = {
    cancellation_reason: portal_subscription_cancellation_reason;
    /**
     * Whether the feature is enabled.
     */
    enabled: boolean;
    /**
     * Whether to cancel subscriptions immediately or at the end of the billing period.
     */
    mode: portal_subscription_cancel.mode;
    /**
     * Whether to create prorations when canceling subscriptions. Possible values are `none` and `create_prorations`.
     */
    proration_behavior: portal_subscription_cancel.proration_behavior;
};
export namespace portal_subscription_cancel {
    /**
     * Whether to cancel subscriptions immediately or at the end of the billing period.
     */
    export enum mode {
        AT_PERIOD_END = 'at_period_end',
        IMMEDIATELY = 'immediately',
    }
    /**
     * Whether to create prorations when canceling subscriptions. Possible values are `none` and `create_prorations`.
     */
    export enum proration_behavior {
        ALWAYS_INVOICE = 'always_invoice',
        CREATE_PRORATIONS = 'create_prorations',
        NONE = 'none',
    }
}

