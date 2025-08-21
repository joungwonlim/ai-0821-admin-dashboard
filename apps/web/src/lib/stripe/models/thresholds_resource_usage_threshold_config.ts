/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_meter } from './billing_meter';
import type { thresholds_resource_usage_alert_filter } from './thresholds_resource_usage_alert_filter';
/**
 * The usage threshold alert configuration enables setting up alerts for when a certain usage threshold on a specific meter is crossed.
 */
export type thresholds_resource_usage_threshold_config = {
    /**
     * The filters allow limiting the scope of this usage alert. You can only specify up to one filter at this time.
     */
    filters?: Array<thresholds_resource_usage_alert_filter> | null;
    /**
     * The value at which this alert will trigger.
     */
    gte: number;
    /**
     * The [Billing Meter](/api/billing/meter) ID whose usage is monitored.
     */
    meter: (string | billing_meter);
    /**
     * Defines how the alert will behave.
     */
    recurrence: thresholds_resource_usage_threshold_config.recurrence;
};
export namespace thresholds_resource_usage_threshold_config {
    /**
     * Defines how the alert will behave.
     */
    export enum recurrence {
        ONE_TIME = 'one_time',
    }
}

