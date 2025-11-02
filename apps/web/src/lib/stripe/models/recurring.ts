/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type recurring = {
    /**
     * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
     */
    interval: recurring.interval;
    /**
     * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
     */
    interval_count: number;
    /**
     * The meter tracking the usage of a metered price
     */
    meter?: string | null;
    /**
     * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
     */
    usage_type: recurring.usage_type;
};
export namespace recurring {
    /**
     * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
     */
    export enum interval {
        DAY = 'day',
        MONTH = 'month',
        WEEK = 'week',
        YEAR = 'year',
    }
    /**
     * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
     */
    export enum usage_type {
        LICENSED = 'licensed',
        METERED = 'metered',
    }
}

