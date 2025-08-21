/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tax_product_resource_customer_details } from './tax_product_resource_customer_details';
import type { tax_product_resource_ship_from_details } from './tax_product_resource_ship_from_details';
import type { tax_product_resource_tax_transaction_resource_reversal } from './tax_product_resource_tax_transaction_resource_reversal';
import type { tax_product_resource_tax_transaction_shipping_cost } from './tax_product_resource_tax_transaction_shipping_cost';
import type { tax_transaction_line_item } from './tax_transaction_line_item';
/**
 * A Tax Transaction records the tax collected from or refunded to your customer.
 *
 * Related guide: [Calculate tax in your custom payment flow](https://stripe.com/docs/tax/custom#tax-transaction)
 */
export type tax_transaction = {
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * The ID of an existing [Customer](https://stripe.com/docs/api/customers/object) used for the resource.
     */
    customer?: string | null;
    customer_details: tax_product_resource_customer_details;
    /**
     * Unique identifier for the transaction.
     */
    id: string;
    /**
     * The tax collected or refunded, by line item.
     */
    line_items?: {
        /**
         * Details about each object.
         */
        data: Array<tax_transaction_line_item>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: tax_transaction.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    } | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: tax_transaction.object;
    /**
     * The Unix timestamp representing when the tax liability is assumed or reduced.
     */
    posted_at: number;
    /**
     * A custom unique identifier, such as 'myOrder_123'.
     */
    reference: string;
    /**
     * If `type=reversal`, contains information about what was reversed.
     */
    reversal?: tax_product_resource_tax_transaction_resource_reversal | null;
    /**
     * The details of the ship from location, such as the address.
     */
    ship_from_details?: tax_product_resource_ship_from_details | null;
    /**
     * The shipping cost details for the transaction.
     */
    shipping_cost?: tax_product_resource_tax_transaction_shipping_cost | null;
    /**
     * Timestamp of date at which the tax rules and rates in effect applies for the calculation.
     */
    tax_date: number;
    /**
     * If `reversal`, this transaction reverses an earlier transaction.
     */
    type: tax_transaction.type;
};
export namespace tax_transaction {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    export enum object {
        LIST = 'list',
    }
    /**
     * If `reversal`, this transaction reverses an earlier transaction.
     */
    export enum type {
        REVERSAL = 'reversal',
        TRANSACTION = 'transaction',
    }
}

