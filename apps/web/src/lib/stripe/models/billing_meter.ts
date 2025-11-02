/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_meter_resource_aggregation_settings } from './billing_meter_resource_aggregation_settings';
import type { billing_meter_resource_billing_meter_status_transitions } from './billing_meter_resource_billing_meter_status_transitions';
import type { billing_meter_resource_billing_meter_value } from './billing_meter_resource_billing_meter_value';
import type { billing_meter_resource_customer_mapping_settings } from './billing_meter_resource_customer_mapping_settings';
/**
 * Meters specify how to aggregate meter events over a billing period. Meter events represent the actions that customers take in your system. Meters attach to prices and form the basis of the bill.
 *
 * Related guide: [Usage based billing](https://docs.stripe.com/billing/subscriptions/usage-based)
 */
export type billing_meter = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    customer_mapping: billing_meter_resource_customer_mapping_settings;
    default_aggregation: billing_meter_resource_aggregation_settings;
    /**
     * The meter's name.
     */
    display_name: string;
    /**
     * The name of the meter event to record usage for. Corresponds with the `event_name` field on meter events.
     */
    event_name: string;
    /**
     * The time window which meter events have been pre-aggregated for, if any.
     */
    event_time_window?: billing_meter.event_time_window | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: billing_meter.object;
    /**
     * The meter's status.
     */
    status: billing_meter.status;
    status_transitions: billing_meter_resource_billing_meter_status_transitions;
    /**
     * Time at which the object was last updated. Measured in seconds since the Unix epoch.
     */
    updated: number;
    value_settings: billing_meter_resource_billing_meter_value;
};
export namespace billing_meter {
    /**
     * The time window which meter events have been pre-aggregated for, if any.
     */
    export enum event_time_window {
        DAY = 'day',
        HOUR = 'hour',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        BILLING_METER = 'billing.meter',
    }
    /**
     * The meter's status.
     */
    export enum status {
        ACTIVE = 'active',
        INACTIVE = 'inactive',
    }
}

