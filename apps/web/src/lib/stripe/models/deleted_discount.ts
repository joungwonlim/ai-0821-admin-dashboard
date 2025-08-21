/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { coupon } from './coupon';
import type { customer } from './customer';
import type { deleted_customer } from './deleted_customer';
import type { promotion_code } from './promotion_code';
export type deleted_discount = {
    /**
     * The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. Will not be present for subscription mode.
     */
    checkout_session?: string | null;
    coupon: coupon;
    /**
     * The ID of the customer associated with this discount.
     */
    customer?: (string | customer | deleted_customer) | null;
    /**
     * Always true for a deleted object
     */
    deleted: boolean;
    /**
     * The ID of the discount object. Discounts cannot be fetched by ID. Use `expand[]=discounts` in API calls to expand discount IDs in an array.
     */
    id: string;
    /**
     * The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice.
     */
    invoice?: string | null;
    /**
     * The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item.
     */
    invoice_item?: string | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: deleted_discount.object;
    /**
     * The promotion code applied to create this discount.
     */
    promotion_code?: (string | promotion_code) | null;
    /**
     * Date that the coupon was applied.
     */
    start: number;
    /**
     * The subscription that this coupon is applied to, if it is applied to a particular subscription.
     */
    subscription?: string | null;
    /**
     * The subscription item that this coupon is applied to, if it is applied to a particular subscription item.
     */
    subscription_item?: string | null;
};
export namespace deleted_discount {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        DISCOUNT = 'discount',
    }
}

