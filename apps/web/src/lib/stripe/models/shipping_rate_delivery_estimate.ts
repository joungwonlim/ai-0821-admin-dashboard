/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { shipping_rate_delivery_estimate_bound } from './shipping_rate_delivery_estimate_bound';
export type shipping_rate_delivery_estimate = {
    /**
     * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
     */
    maximum?: shipping_rate_delivery_estimate_bound | null;
    /**
     * The lower bound of the estimated range. If empty, represents no lower bound.
     */
    minimum?: shipping_rate_delivery_estimate_bound | null;
};

