/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { billing_meter_resource_billing_meter_event_adjustment_cancel } from './billing_meter_resource_billing_meter_event_adjustment_cancel';
/**
 * A billing meter event adjustment is a resource that allows you to cancel a meter event. For example, you might create a billing meter event adjustment to cancel a meter event that was created in error or attached to the wrong customer.
 */
export type billing_meter_event_adjustment = {
    /**
     * Specifies which event to cancel.
     */
    cancel?: billing_meter_resource_billing_meter_event_adjustment_cancel | null;
    /**
     * The name of the meter event. Corresponds with the `event_name` field on a meter.
     */
    event_name: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: billing_meter_event_adjustment.object;
    /**
     * The meter event adjustment's status.
     */
    status: billing_meter_event_adjustment.status;
    /**
     * Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
     */
    type: billing_meter_event_adjustment.type;
};
export namespace billing_meter_event_adjustment {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        BILLING_METER_EVENT_ADJUSTMENT = 'billing.meter_event_adjustment',
    }
    /**
     * The meter event adjustment's status.
     */
    export enum status {
        COMPLETE = 'complete',
        PENDING = 'pending',
    }
    /**
     * Specifies whether to cancel a single event or a range of events for a time period. Time period cancellation is not supported yet.
     */
    export enum type {
        CANCEL = 'cancel',
    }
}

