/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
import type { balance_transaction } from './balance_transaction';
import type { charge } from './charge';
import type { transfer_reversal } from './transfer_reversal';
/**
 * A `Transfer` object is created when you move funds between Stripe accounts as
 * part of Connect.
 *
 * Before April 6, 2017, transfers also represented movement of funds from a
 * Stripe account to a card or bank account. This behavior has since been split
 * out into a [Payout](https://stripe.com/docs/api#payout_object) object, with corresponding payout endpoints. For more
 * information, read about the
 * [transfer/payout split](https://stripe.com/docs/transfer-payout-split).
 *
 * Related guide: [Creating separate charges and transfers](https://stripe.com/docs/connect/separate-charges-and-transfers)
 */
export type transfer = {
    /**
     * Amount in cents (or local equivalent) to be transferred.
     */
    amount: number;
    /**
     * Amount in cents (or local equivalent) reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
     */
    amount_reversed: number;
    /**
     * Balance transaction that describes the impact of this transfer on your account balance.
     */
    balance_transaction?: (string | balance_transaction) | null;
    /**
     * Time that this record of the transfer was first created.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;
    /**
     * ID of the Stripe account the transfer was sent to.
     */
    destination?: (string | account) | null;
    /**
     * If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer.
     */
    destination_payment?: (string | charge);
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata: Record<string, string>;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: transfer.object;
    /**
     * A list of reversals that have been applied to the transfer.
     */
    reversals: {
        /**
         * Details about each object.
         */
        data: Array<transfer_reversal>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: transfer.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    };
    /**
     * Whether the transfer has been fully reversed. If the transfer is only partially reversed, this attribute will still be false.
     */
    reversed: boolean;
    /**
     * ID of the charge that was used to fund the transfer. If null, the transfer was funded from the available balance.
     */
    source_transaction?: (string | charge) | null;
    /**
     * The source balance this transfer came from. One of `card`, `fpx`, or `bank_account`.
     */
    source_type?: string;
    /**
     * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
     */
    transfer_group?: string | null;
};
export namespace transfer {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TRANSFER = 'transfer',
    }
}

