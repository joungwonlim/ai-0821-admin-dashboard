/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { shipping_rate } from './shipping_rate';
export type payment_links_resource_shipping_option = {
    /**
     * A non-negative integer in cents representing how much to charge.
     */
    shipping_amount: number;
    /**
     * The ID of the Shipping Rate to use for this shipping option.
     */
    shipping_rate: (string | shipping_rate);
};

