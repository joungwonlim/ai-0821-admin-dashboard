/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { thresholds_resource_usage_threshold_config } from './thresholds_resource_usage_threshold_config';
/**
 * A billing alert is a resource that notifies you when a certain usage threshold on a meter is crossed. For example, you might create a billing alert to notify you when a certain user made 100 API requests.
 */
export type billing_alert = {
    /**
     * Defines the type of the alert.
     */
    alert_type: billing_alert.alert_type;
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
    object: billing_alert.object;
    /**
     * Status of the alert. This can be active, inactive or archived.
     */
    status?: billing_alert.status | null;
    /**
     * Title of the alert.
     */
    title: string;
    /**
     * Encapsulates configuration of the alert to monitor usage on a specific [Billing Meter](https://stripe.com/docs/api/billing/meter).
     */
    usage_threshold?: thresholds_resource_usage_threshold_config | null;
};
export namespace billing_alert {
    /**
     * Defines the type of the alert.
     */
    export enum alert_type {
        USAGE_THRESHOLD = 'usage_threshold',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        BILLING_ALERT = 'billing.alert',
    }
    /**
     * Status of the alert. This can be active, inactive or archived.
     */
    export enum status {
        ACTIVE = 'active',
        ARCHIVED = 'archived',
        INACTIVE = 'inactive',
    }
}

