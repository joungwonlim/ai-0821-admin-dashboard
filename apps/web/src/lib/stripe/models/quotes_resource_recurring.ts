/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { quotes_resource_total_details } from './quotes_resource_total_details';
export type quotes_resource_recurring = {
    /**
     * Total before any discounts or taxes are applied.
     */
    amount_subtotal: number;
    /**
     * Total after discounts and taxes are applied.
     */
    amount_total: number;
    /**
     * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
     */
    interval: quotes_resource_recurring.interval;
    /**
     * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
     */
    interval_count: number;
    total_details: quotes_resource_total_details;
};
export namespace quotes_resource_recurring {
    /**
     * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
     */
    export enum interval {
        DAY = 'day',
        MONTH = 'month',
        WEEK = 'week',
        YEAR = 'year',
    }
}

