/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customer } from './customer';
export type thresholds_resource_usage_alert_filter = {
    /**
     * Limit the scope of the alert to this customer ID
     */
    customer?: (string | customer) | null;
    type: thresholds_resource_usage_alert_filter.type;
};
export namespace thresholds_resource_usage_alert_filter {
    export enum type {
        CUSTOMER = 'customer',
    }
}

