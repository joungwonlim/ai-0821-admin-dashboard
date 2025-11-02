/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type billing_meter_resource_customer_mapping_settings = {
    /**
     * The key in the meter event payload to use for mapping the event to a customer.
     */
    event_payload_key: string;
    /**
     * The method for mapping a meter event to a customer.
     */
    type: billing_meter_resource_customer_mapping_settings.type;
};
export namespace billing_meter_resource_customer_mapping_settings {
    /**
     * The method for mapping a meter event to a customer.
     */
    export enum type {
        BY_ID = 'by_id',
    }
}

