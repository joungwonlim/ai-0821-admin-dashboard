/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { treasury_outbound_payments_resource_ach_tracking_details } from './treasury_outbound_payments_resource_ach_tracking_details';
import type { treasury_outbound_payments_resource_us_domestic_wire_tracking_details } from './treasury_outbound_payments_resource_us_domestic_wire_tracking_details';
export type treasury_outbound_payments_resource_outbound_payment_resource_tracking_details = {
    ach?: treasury_outbound_payments_resource_ach_tracking_details;
    /**
     * The US bank account network used to send funds.
     */
    type: treasury_outbound_payments_resource_outbound_payment_resource_tracking_details.type;
    us_domestic_wire?: treasury_outbound_payments_resource_us_domestic_wire_tracking_details;
};
export namespace treasury_outbound_payments_resource_outbound_payment_resource_tracking_details {
    /**
     * The US bank account network used to send funds.
     */
    export enum type {
        ACH = 'ach',
        US_DOMESTIC_WIRE = 'us_domestic_wire',
    }
}

