/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
export type connect_collection_transfer = {
    /**
     * Amount transferred, in cents (or local equivalent).
     */
    amount: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * ID of the account that funds are being collected for.
     */
    destination: (string | account);
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: connect_collection_transfer.object;
};
export namespace connect_collection_transfer {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        CONNECT_COLLECTION_TRANSFER = 'connect_collection_transfer',
    }
}

