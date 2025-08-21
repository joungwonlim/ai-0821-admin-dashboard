/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { deleted_price } from './deleted_price';
import type { discounts_resource_stackable_discount } from './discounts_resource_stackable_discount';
import type { price } from './price';
import type { subscription_item_billing_thresholds } from './subscription_item_billing_thresholds';
import type { tax_rate } from './tax_rate';
/**
 * A phase item describes the price and quantity of a phase.
 */
export type subscription_schedule_configuration_item = {
    /**
     * Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period
     */
    billing_thresholds?: subscription_item_billing_thresholds | null;
    /**
     * The discounts applied to the subscription item. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount.
     */
    discounts: Array<discounts_resource_stackable_discount>;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an item. Metadata on this item will update the underlying subscription item's `metadata` when the phase is entered.
     */
    metadata?: Record<string, string> | null;
    /**
     * ID of the price to which the customer should be subscribed.
     */
    price: (string | price | deleted_price);
    /**
     * Quantity of the plan to which the customer should be subscribed.
     */
    quantity?: number;
    /**
     * The tax rates which apply to this `phase_item`. When set, the `default_tax_rates` on the phase do not apply to this `phase_item`.
     */
    tax_rates?: Array<tax_rate> | null;
};

