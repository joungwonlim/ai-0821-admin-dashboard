/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A billing meter event summary represents an aggregated view of a customer's billing meter events within a specified timeframe. It indicates how much
 * usage was accrued by a customer for that period.
 *
 * Note: Meters events are aggregated asynchronously so the meter event summaries provide an eventually consistent view of the reported usage.
 */
export type billing_meter_event_summary = {
    /**
     * Aggregated value of all the events within `start_time` (inclusive) and `end_time` (inclusive). The aggregation strategy is defined on meter via `default_aggregation`.
     */
    aggregated_value: number;
    /**
     * End timestamp for this event summary (exclusive). Must be aligned with minute boundaries.
     */
    end_time: number;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The meter associated with this event summary.
     */
    meter: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: billing_meter_event_summary.object;
    /**
     * Start timestamp for this event summary (inclusive). Must be aligned with minute boundaries.
     */
    start_time: number;
};
export namespace billing_meter_event_summary {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        BILLING_METER_EVENT_SUMMARY = 'billing.meter_event_summary',
    }
}

