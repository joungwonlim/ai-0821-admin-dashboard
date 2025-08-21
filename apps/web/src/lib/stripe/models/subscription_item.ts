/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { discount } from './discount';
import type { price } from './price';
import type { subscription_item_billing_thresholds } from './subscription_item_billing_thresholds';
import type { tax_rate } from './tax_rate';
/**
 * Subscription items allow you to create customer subscriptions with more than
 * one plan, making it easy to represent complex billing relationships.
 */
export type subscription_item = {
    /**
     * Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period
     */
    billing_thresholds?: subscription_item_billing_thresholds | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The end time of this subscription item's current billing period.
     */
    current_period_end: number;
    /**
     * The start time of this subscription item's current billing period.
     */
    current_period_start: number;
    /**
     * The discounts applied to the subscription item. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount.
     */
    discounts: Array<(string | discount)>;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: subscription_item.object;
    price: price;
    /**
     * The [quantity](https://stripe.com/docs/subscriptions/quantities) of the plan to which the customer should be subscribed.
     */
    quantity?: number;
    /**
     * The `subscription` this `subscription_item` belongs to.
     */
    subscription: string;
    /**
     * The tax rates which apply to this `subscription_item`. When set, the `default_tax_rates` on the subscription do not apply to this `subscription_item`.
     */
    tax_rates?: Array<tax_rate> | null;
};
export namespace subscription_item {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        SUBSCRIPTION_ITEM = 'subscription_item',
    }
}

