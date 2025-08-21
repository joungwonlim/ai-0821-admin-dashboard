/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a line item to be displayed on the reader
 */
export type terminal_reader_reader_resource_line_item = {
    /**
     * The amount of the line item. A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    amount: number;
    /**
     * Description of the line item.
     */
    description: string;
    /**
     * The quantity of the line item.
     */
    quantity: number;
};

