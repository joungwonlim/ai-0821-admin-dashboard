/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { deleted_price } from './deleted_price';
import type { discounts_resource_stackable_discount } from './discounts_resource_stackable_discount';
import type { price } from './price';
import type { subscription_schedule_add_invoice_item_period } from './subscription_schedule_add_invoice_item_period';
import type { tax_rate } from './tax_rate';
/**
 * An Add Invoice Item describes the prices and quantities that will be added as pending invoice items when entering a phase.
 */
export type subscription_schedule_add_invoice_item = {
    /**
     * The stackable discounts that will be applied to the item.
     */
    discounts: Array<discounts_resource_stackable_discount>;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    period: subscription_schedule_add_invoice_item_period;
    /**
     * ID of the price used to generate the invoice item.
     */
    price: (string | price | deleted_price);
    /**
     * The quantity of the invoice item.
     */
    quantity?: number | null;
    /**
     * The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
     */
    tax_rates?: Array<tax_rate> | null;
};

