/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
import type { application } from './application';
import type { balance_transaction } from './balance_transaction';
import type { charge } from './charge';
import type { fee_refund } from './fee_refund';
import type { platform_earning_fee_source } from './platform_earning_fee_source';
export type application_fee = {
    /**
     * ID of the Stripe account this fee was taken from.
     */
    account: (string | account);
    /**
     * Amount earned, in cents (or local equivalent).
     */
    amount: number;
    /**
     * Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the fee if a partial refund was issued)
     */
    amount_refunded: number;
    /**
     * ID of the Connect application that earned the fee.
     */
    application: (string | application);
    /**
     * Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds).
     */
    balance_transaction?: (string | balance_transaction) | null;
    /**
     * ID of the charge that the application fee was taken from.
     */
    charge: (string | charge);
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * Polymorphic source of the application fee. Includes the ID of the object the application fee was created from.
     */
    fee_source?: platform_earning_fee_source | null;
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
    object: application_fee.object;
    /**
     * ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter.
     */
    originating_transaction?: (string | charge) | null;
    /**
     * Whether the fee has been fully refunded. If the fee is only partially refunded, this attribute will still be false.
     */
    refunded: boolean;
    /**
     * A list of refunds that have been applied to the fee.
     */
    refunds: {
        /**
         * Details about each object.
         */
        data: Array<fee_refund>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: application_fee.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    };
};
export namespace application_fee {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        APPLICATION_FEE = 'application_fee',
    }
}

