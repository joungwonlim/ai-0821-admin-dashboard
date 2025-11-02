/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { application_fee } from './application_fee';
import type { charge } from './charge';
import type { connect_collection_transfer } from './connect_collection_transfer';
import type { customer_cash_balance_transaction } from './customer_cash_balance_transaction';
import type { dispute } from './dispute';
import type { fee } from './fee';
import type { fee_refund } from './fee_refund';
import type { issuing_authorization } from './issuing_authorization';
import type { issuing_dispute } from './issuing_dispute';
import type { issuing_transaction } from './issuing_transaction';
import type { payout } from './payout';
import type { refund } from './refund';
import type { reserve_transaction } from './reserve_transaction';
import type { tax_deducted_at_source } from './tax_deducted_at_source';
import type { topup } from './topup';
import type { transfer } from './transfer';
import type { transfer_reversal } from './transfer_reversal';
/**
 * Balance transactions represent funds moving through your Stripe account.
 * Stripe creates them for every type of transaction that enters or leaves your Stripe account balance.
 *
 * Related guide: [Balance transaction types](https://stripe.com/docs/reports/balance-transaction-types)
 */
export type balance_transaction = {
    /**
     * Gross amount of this transaction (in cents (or local equivalent)). A positive value represents funds charged to another party, and a negative value represents funds sent to another party.
     */
    amount: number;
    /**
     * The date that the transaction's net funds become available in the Stripe balance.
     */
    available_on: number;
    /**
     * The balance that this transaction impacts.
     */
    balance_type?: balance_transaction.balance_type;
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
     * If applicable, this transaction uses an exchange rate. If money converts from currency A to currency B, then the `amount` in currency A, multipled by the `exchange_rate`, equals the `amount` in currency B. For example, if you charge a customer 10.00 EUR, the PaymentIntent's `amount` is `1000` and `currency` is `eur`. If this converts to 12.34 USD in your Stripe account, the BalanceTransaction's `amount` is `1234`, its `currency` is `usd`, and the `exchange_rate` is `1.234`.
     */
    exchange_rate?: number | null;
    /**
     * Fees (in cents (or local equivalent)) paid for this transaction. Represented as a positive integer when assessed.
     */
    fee: number;
    /**
     * Detailed breakdown of fees (in cents (or local equivalent)) paid for this transaction.
     */
    fee_details: Array<fee>;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Net impact to a Stripe balance (in cents (or local equivalent)). A positive value represents incrementing a Stripe balance, and a negative value decrementing a Stripe balance. You can calculate the net impact of a transaction on a balance by `amount` - `fee`
     */
    net: number;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: balance_transaction.object;
    /**
     * Learn more about how [reporting categories](https://stripe.com/docs/reports/reporting-categories) can help you understand balance transactions from an accounting perspective.
     */
    reporting_category: string;
    /**
     * This transaction relates to the Stripe object.
     */
    source?: (string | application_fee | charge | connect_collection_transfer | customer_cash_balance_transaction | dispute | fee_refund | issuing_authorization | issuing_dispute | issuing_transaction | payout | refund | reserve_transaction | tax_deducted_at_source | topup | transfer | transfer_reversal) | null;
    /**
     * The transaction's net funds status in the Stripe balance, which are either `available` or `pending`.
     */
    status: string;
    /**
     * Transaction type: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `obligation_outbound`, `obligation_reversal_inbound`, `payment`, `payment_failure_refund`, `payment_network_reserve_hold`, `payment_network_reserve_release`, `payment_refund`, `payment_reversal`, `payment_unreconciled`, `payout`, `payout_cancel`, `payout_failure`, `payout_minimum_balance_hold`, `payout_minimum_balance_release`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `stripe_balance_payment_debit`, `stripe_balance_payment_debit_reversal`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`. Learn more about [balance transaction types and what they represent](https://stripe.com/docs/reports/balance-transaction-types). To classify transactions for accounting purposes, consider `reporting_category` instead.
     */
    type: balance_transaction.type;
};
export namespace balance_transaction {
    /**
     * The balance that this transaction impacts.
     */
    export enum balance_type {
        ISSUING = 'issuing',
        PAYMENTS = 'payments',
        REFUND_AND_DISPUTE_PREFUNDING = 'refund_and_dispute_prefunding',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        BALANCE_TRANSACTION = 'balance_transaction',
    }
    /**
     * Transaction type: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `climate_order_purchase`, `climate_order_refund`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `obligation_outbound`, `obligation_reversal_inbound`, `payment`, `payment_failure_refund`, `payment_network_reserve_hold`, `payment_network_reserve_release`, `payment_refund`, `payment_reversal`, `payment_unreconciled`, `payout`, `payout_cancel`, `payout_failure`, `payout_minimum_balance_hold`, `payout_minimum_balance_release`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `stripe_balance_payment_debit`, `stripe_balance_payment_debit_reversal`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`. Learn more about [balance transaction types and what they represent](https://stripe.com/docs/reports/balance-transaction-types). To classify transactions for accounting purposes, consider `reporting_category` instead.
     */
    export enum type {
        ADJUSTMENT = 'adjustment',
        ADVANCE = 'advance',
        ADVANCE_FUNDING = 'advance_funding',
        ANTICIPATION_REPAYMENT = 'anticipation_repayment',
        APPLICATION_FEE = 'application_fee',
        APPLICATION_FEE_REFUND = 'application_fee_refund',
        CHARGE = 'charge',
        CLIMATE_ORDER_PURCHASE = 'climate_order_purchase',
        CLIMATE_ORDER_REFUND = 'climate_order_refund',
        CONNECT_COLLECTION_TRANSFER = 'connect_collection_transfer',
        CONTRIBUTION = 'contribution',
        ISSUING_AUTHORIZATION_HOLD = 'issuing_authorization_hold',
        ISSUING_AUTHORIZATION_RELEASE = 'issuing_authorization_release',
        ISSUING_DISPUTE = 'issuing_dispute',
        ISSUING_TRANSACTION = 'issuing_transaction',
        OBLIGATION_OUTBOUND = 'obligation_outbound',
        OBLIGATION_REVERSAL_INBOUND = 'obligation_reversal_inbound',
        PAYMENT = 'payment',
        PAYMENT_FAILURE_REFUND = 'payment_failure_refund',
        PAYMENT_NETWORK_RESERVE_HOLD = 'payment_network_reserve_hold',
        PAYMENT_NETWORK_RESERVE_RELEASE = 'payment_network_reserve_release',
        PAYMENT_REFUND = 'payment_refund',
        PAYMENT_REVERSAL = 'payment_reversal',
        PAYMENT_UNRECONCILED = 'payment_unreconciled',
        PAYOUT = 'payout',
        PAYOUT_CANCEL = 'payout_cancel',
        PAYOUT_FAILURE = 'payout_failure',
        PAYOUT_MINIMUM_BALANCE_HOLD = 'payout_minimum_balance_hold',
        PAYOUT_MINIMUM_BALANCE_RELEASE = 'payout_minimum_balance_release',
        REFUND = 'refund',
        REFUND_FAILURE = 'refund_failure',
        RESERVE_TRANSACTION = 'reserve_transaction',
        RESERVED_FUNDS = 'reserved_funds',
        STRIPE_BALANCE_PAYMENT_DEBIT = 'stripe_balance_payment_debit',
        STRIPE_BALANCE_PAYMENT_DEBIT_REVERSAL = 'stripe_balance_payment_debit_reversal',
        STRIPE_FEE = 'stripe_fee',
        STRIPE_FX_FEE = 'stripe_fx_fee',
        TAX_FEE = 'tax_fee',
        TOPUP = 'topup',
        TOPUP_REVERSAL = 'topup_reversal',
        TRANSFER = 'transfer',
        TRANSFER_CANCEL = 'transfer_cancel',
        TRANSFER_FAILURE = 'transfer_failure',
        TRANSFER_REFUND = 'transfer_refund',
    }
}

