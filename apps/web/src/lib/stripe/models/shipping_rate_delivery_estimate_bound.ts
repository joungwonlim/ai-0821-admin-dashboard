/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type shipping_rate_delivery_estimate_bound = {
    /**
     * A unit of time.
     */
    unit: shipping_rate_delivery_estimate_bound.unit;
    /**
     * Must be greater than 0.
     */
    value: number;
};
export namespace shipping_rate_delivery_estimate_bound {
    /**
     * A unit of time.
     */
    export enum unit {
        BUSINESS_DAY = 'business_day',
        DAY = 'day',
        HOUR = 'hour',
        MONTH = 'month',
        WEEK = 'week',
    }
}

