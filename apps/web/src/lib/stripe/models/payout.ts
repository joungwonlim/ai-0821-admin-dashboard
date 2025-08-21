/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { application_fee } from './application_fee';
import type { balance_transaction } from './balance_transaction';
import type { bank_account } from './bank_account';
import type { card } from './card';
import type { deleted_bank_account } from './deleted_bank_account';
import type { deleted_card } from './deleted_card';
import type { payouts_trace_id } from './payouts_trace_id';
/**
 * A `Payout` object is created when you receive funds from Stripe, or when you
 * initiate a payout to either a bank account or debit card of a [connected
 * Stripe account](/docs/connect/bank-debit-card-payouts). You can retrieve individual payouts,
 * and list all payouts. Payouts are made on [varying
 * schedules](/docs/connect/manage-payout-schedule), depending on your country and
 * industry.
 *
 * Related guide: [Receiving payouts](https://stripe.com/docs/payouts)
 */
export type payout = {
    /**
     * The amount (in cents (or local equivalent)) that transfers to your bank account or debit card.
     */
    amount: number;
    /**
     * The application fee (if any) for the payout. [See the Connect documentation](https://stripe.com/docs/connect/instant-payouts#monetization-and-fees) for details.
     */
    application_fee?: (string | application_fee) | null;
    /**
     * The amount of the application fee (if any) requested for the payout. [See the Connect documentation](https://stripe.com/docs/connect/instant-payouts#monetization-and-fees) for details.
     */
    application_fee_amount?: number | null;
    /**
     * Date that you can expect the payout to arrive in the bank. This factors in delays to account for weekends or bank holidays.
     */
    arrival_date: number;
    /**
     * Returns `true` if the payout is created by an [automated payout schedule](https://stripe.com/docs/payouts#payout-schedule) and `false` if it's [requested manually](https://stripe.com/docs/payouts#manual-payouts).
     */
    automatic: boolean;
    /**
     * ID of the balance transaction that describes the impact of this payout on your account balance.
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
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;
    /**
     * ID of the bank account or card the payout is sent to.
     */
    destination?: (string | bank_account | card | deleted_bank_account | deleted_card) | null;
    /**
     * If the payout fails or cancels, this is the ID of the balance transaction that reverses the initial balance transaction and returns the funds from the failed payout back in your balance.
     */
    failure_balance_transaction?: (string | balance_transaction) | null;
    /**
     * Error code that provides a reason for a payout failure, if available. View our [list of failure codes](https://stripe.com/docs/api#payout_failures).
     */
    failure_code?: string | null;
    /**
     * Message that provides the reason for a payout failure, if available.
     */
    failure_message?: string | null;
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
    metadata?: Record<string, string> | null;
    /**
     * The method used to send this payout, which can be `standard` or `instant`. `instant` is supported for payouts to debit cards and bank accounts in certain countries. Learn more about [bank support for Instant Payouts](https://stripe.com/docs/payouts/instant-payouts-banks).
     */
    method: string;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: payout.object;
    /**
     * If the payout reverses another, this is the ID of the original payout.
     */
    original_payout?: (string | payout) | null;
    /**
     * ID of the v2 FinancialAccount the funds are sent to.
     */
    payout_method?: string | null;
    /**
     * If `completed`, you can use the [Balance Transactions API](https://stripe.com/docs/api/balance_transactions/list#balance_transaction_list-payout) to list all balance transactions that are paid out in this payout.
     */
    reconciliation_status: payout.reconciliation_status;
    /**
     * If the payout reverses, this is the ID of the payout that reverses this payout.
     */
    reversed_by?: (string | payout) | null;
    /**
     * The source balance this payout came from, which can be one of the following: `card`, `fpx`, or `bank_account`.
     */
    source_type: string;
    /**
     * Extra information about a payout that displays on the user's bank statement.
     */
    statement_descriptor?: string | null;
    /**
     * Current status of the payout: `paid`, `pending`, `in_transit`, `canceled` or `failed`. A payout is `pending` until it's submitted to the bank, when it becomes `in_transit`. The status changes to `paid` if the transaction succeeds, or to `failed` or `canceled` (within 5 business days). Some payouts that fail might initially show as `paid`, then change to `failed`.
     */
    status: string;
    /**
     * A value that generates from the beneficiary's bank that allows users to track payouts with their bank. Banks might call this a "reference number" or something similar.
     */
    trace_id?: payouts_trace_id | null;
    /**
     * Can be `bank_account` or `card`.
     */
    type: payout.type;
};
export namespace payout {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        PAYOUT = 'payout',
    }
    /**
     * If `completed`, you can use the [Balance Transactions API](https://stripe.com/docs/api/balance_transactions/list#balance_transaction_list-payout) to list all balance transactions that are paid out in this payout.
     */
    export enum reconciliation_status {
        COMPLETED = 'completed',
        IN_PROGRESS = 'in_progress',
        NOT_APPLICABLE = 'not_applicable',
    }
    /**
     * Can be `bank_account` or `card`.
     */
    export enum type {
        BANK_ACCOUNT = 'bank_account',
        CARD = 'card',
    }
}

