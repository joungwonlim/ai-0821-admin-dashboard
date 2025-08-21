/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customer_tax_location } from './customer_tax_location';
export type customer_tax = {
    /**
     * Surfaces if automatic tax computation is possible given the current customer location information.
     */
    automatic_tax: customer_tax.automatic_tax;
    /**
     * A recent IP address of the customer used for tax reporting and tax location inference.
     */
    ip_address?: string | null;
    /**
     * The identified tax location of the customer.
     */
    location?: customer_tax_location | null;
};
export namespace customer_tax {
    /**
     * Surfaces if automatic tax computation is possible given the current customer location information.
     */
    export enum automatic_tax {
        FAILED = 'failed',
        NOT_COLLECTING = 'not_collecting',
        SUPPORTED = 'supported',
        UNRECOGNIZED_LOCATION = 'unrecognized_location',
    }
}

