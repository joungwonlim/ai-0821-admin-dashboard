/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { item } from './item';
import type { quotes_resource_total_details } from './quotes_resource_total_details';
export type quotes_resource_upfront = {
    /**
     * Total before any discounts or taxes are applied.
     */
    amount_subtotal: number;
    /**
     * Total after discounts and taxes are applied.
     */
    amount_total: number;
    /**
     * The line items that will appear on the next invoice after this quote is accepted. This does not include pending invoice items that exist on the customer but may still be included in the next invoice.
     */
    line_items?: {
        /**
         * Details about each object.
         */
        data: Array<item>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: quotes_resource_upfront.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    };
    total_details: quotes_resource_total_details;
};
export namespace quotes_resource_upfront {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    export enum object {
        LIST = 'list',
    }
}

