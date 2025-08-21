/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { tax_calculation_line_item } from './tax_calculation_line_item';
import type { tax_product_resource_customer_details } from './tax_product_resource_customer_details';
import type { tax_product_resource_ship_from_details } from './tax_product_resource_ship_from_details';
import type { tax_product_resource_tax_breakdown } from './tax_product_resource_tax_breakdown';
import type { tax_product_resource_tax_calculation_shipping_cost } from './tax_product_resource_tax_calculation_shipping_cost';
/**
 * A Tax Calculation allows you to calculate the tax to collect from your customer.
 *
 * Related guide: [Calculate tax in your custom payment flow](https://stripe.com/docs/tax/custom)
 */
export type tax_calculation = {
    /**
     * Total amount after taxes in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    amount_total: number;
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
     * Timestamp of date at which the tax calculation will expire.
     */
    expires_at?: number | null;
    /**
     * Unique identifier for the calculation.
     */
    id?: string | null;
    /**
     * The list of items the customer is purchasing.
     */
    line_items?: {
        /**
         * Details about each object.
         */
        data: Array<tax_calculation_line_item>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: tax_calculation.object;
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
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: tax_calculation.object;
    /**
     * The details of the ship from location, such as the address.
     */
    ship_from_details?: tax_product_resource_ship_from_details | null;
    /**
     * The shipping cost details for the calculation.
     */
    shipping_cost?: tax_product_resource_tax_calculation_shipping_cost | null;
    /**
     * The amount of tax to be collected on top of the line item prices.
     */
    tax_amount_exclusive: number;
    /**
     * The amount of tax already included in the line item prices.
     */
    tax_amount_inclusive: number;
    /**
     * Breakdown of individual tax amounts that add up to the total.
     */
    tax_breakdown: Array<tax_product_resource_tax_breakdown>;
    /**
     * Timestamp of date at which the tax rules and rates in effect applies for the calculation.
     */
    tax_date: number;
};
export namespace tax_calculation {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    export enum object {
        LIST = 'list',
    }
}

