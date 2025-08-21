/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { subscription_item } from './subscription_item';
/**
 * Pending Updates store the changes pending from a previous update that will be applied
 * to the Subscription upon successful payment.
 */
export type subscriptions_resource_pending_update = {
    /**
     * If the update is applied, determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. The timestamp is in UTC format.
     */
    billing_cycle_anchor?: number | null;
    /**
     * The point after which the changes reflected by this update will be discarded and no longer applied.
     */
    expires_at: number;
    /**
     * List of subscription items, each with an attached plan, that will be set if the update is applied.
     */
    subscription_items?: Array<subscription_item> | null;
    /**
     * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time, if the update is applied.
     */
    trial_end?: number | null;
    /**
     * Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more.
     */
    trial_from_plan?: boolean | null;
};

