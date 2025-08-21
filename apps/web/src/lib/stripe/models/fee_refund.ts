/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { application_fee } from './application_fee';
import type { balance_transaction } from './balance_transaction';
/**
 * `Application Fee Refund` objects allow you to refund an application fee that
 * has previously been created but not yet refunded. Funds will be refunded to
 * the Stripe account from which the fee was originally collected.
 *
 * Related guide: [Refunding application fees](https://stripe.com/docs/connect/destination-charges#refunding-app-fee)
 */
export type fee_refund = {
    /**
     * Amount, in cents (or local equivalent).
     */
    amount: number;
    /**
     * Balance transaction that describes the impact on your account balance.
     */
    balance_transaction?: (string | balance_transaction) | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * ID of the application fee that was refunded.
     */
    fee: (string | application_fee);
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: fee_refund.object;
};
export namespace fee_refund {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        FEE_REFUND = 'fee_refund',
    }
}

