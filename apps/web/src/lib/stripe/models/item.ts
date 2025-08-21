/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { line_items_discount_amount } from './line_items_discount_amount';
import type { line_items_tax_amount } from './line_items_tax_amount';
import type { price } from './price';
/**
 * A line item.
 */
export type item = {
    /**
     * Total discount amount applied. If no discounts were applied, defaults to 0.
     */
    amount_discount: number;
    /**
     * Total before any discounts or taxes are applied.
     */
    amount_subtotal: number;
    /**
     * Total tax amount applied. If no tax was applied, defaults to 0.
     */
    amount_tax: number;
    /**
     * Total after discounts and taxes.
     */
    amount_total: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users. Defaults to product name.
     */
    description?: string | null;
    /**
     * The discounts applied to the line item.
     */
    discounts?: Array<line_items_discount_amount>;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: item.object;
    /**
     * The price used to generate the line item.
     */
    price?: price | null;
    /**
     * The quantity of products being purchased.
     */
    quantity?: number | null;
    /**
     * The taxes applied to the line item.
     */
    taxes?: Array<line_items_tax_amount>;
};
export namespace item {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        ITEM = 'item',
    }
}

