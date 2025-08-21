/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { terminal_reader_reader_resource_line_item } from './terminal_reader_reader_resource_line_item';
/**
 * Represents a cart to be displayed on the reader
 */
export type terminal_reader_reader_resource_cart = {
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * List of line items in the cart.
     */
    line_items: Array<terminal_reader_reader_resource_line_item>;
    /**
     * Tax amount for the entire cart. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    tax?: number | null;
    /**
     * Total amount for the entire cart, including tax. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    total: number;
};

