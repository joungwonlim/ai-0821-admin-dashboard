/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type subscription_pending_invoice_item_interval = {
    /**
     * Specifies invoicing frequency. Either `day`, `week`, `month` or `year`.
     */
    interval: subscription_pending_invoice_item_interval.interval;
    /**
     * The number of intervals between invoices. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
     */
    interval_count: number;
};
export namespace subscription_pending_invoice_item_interval {
    /**
     * Specifies invoicing frequency. Either `day`, `week`, `month` or `year`.
     */
    export enum interval {
        DAY = 'day',
        MONTH = 'month',
        WEEK = 'week',
        YEAR = 'year',
    }
}

