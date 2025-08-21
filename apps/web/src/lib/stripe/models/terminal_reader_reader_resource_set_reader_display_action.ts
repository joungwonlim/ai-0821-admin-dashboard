/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { terminal_reader_reader_resource_cart } from './terminal_reader_reader_resource_cart';
/**
 * Represents a reader action to set the reader display
 */
export type terminal_reader_reader_resource_set_reader_display_action = {
    /**
     * Cart object to be displayed by the reader.
     */
    cart?: terminal_reader_reader_resource_cart | null;
    /**
     * Type of information to be displayed by the reader.
     */
    type: terminal_reader_reader_resource_set_reader_display_action.type;
};
export namespace terminal_reader_reader_resource_set_reader_display_action {
    /**
     * Type of information to be displayed by the reader.
     */
    export enum type {
        CART = 'cart',
    }
}

