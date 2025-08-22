/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { portal_subscription_update_product_adjustable_quantity } from './portal_subscription_update_product_adjustable_quantity';
export type portal_subscription_update_product = {
    adjustable_quantity: portal_subscription_update_product_adjustable_quantity;
    /**
     * The list of price IDs which, when subscribed to, a subscription can be updated.
     */
    prices: Array<string>;
    /**
     * The product ID.
     */
    product: string;
};

