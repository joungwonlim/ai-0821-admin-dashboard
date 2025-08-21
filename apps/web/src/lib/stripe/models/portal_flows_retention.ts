/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { portal_flows_coupon_offer } from './portal_flows_coupon_offer';
export type portal_flows_retention = {
    /**
     * Configuration when `retention.type=coupon_offer`.
     */
    coupon_offer?: portal_flows_coupon_offer | null;
    /**
     * Type of retention strategy that will be used.
     */
    type: portal_flows_retention.type;
};
export namespace portal_flows_retention {
    /**
     * Type of retention strategy that will be used.
     */
    export enum type {
        COUPON_OFFER = 'coupon_offer',
    }
}

