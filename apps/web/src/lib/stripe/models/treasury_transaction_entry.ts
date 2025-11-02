/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { treasury_transaction } from './treasury_transaction';
import type { treasury_transactions_resource_balance_impact } from './treasury_transactions_resource_balance_impact';
import type { treasury_transactions_resource_flow_details } from './treasury_transactions_resource_flow_details';
/**
 * TransactionEntries represent individual units of money movements within a single [Transaction](https://stripe.com/docs/api#transactions).
 */
export type treasury_transaction_entry = {
    balance_impact: treasury_transactions_resource_balance_impact;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * When the TransactionEntry will impact the FinancialAccount's balance.
     */
    effective_at: number;
    /**
     * The FinancialAccount associated with this object.
     */
    financial_account: string;
    /**
     * Token of the flow associated with the TransactionEntry.
     */
    flow?: string | null;
    /**
     * Details of the flow associated with the TransactionEntry.
     */
    flow_details?: treasury_transactions_resource_flow_details | null;
    /**
     * Type of the flow associated with the TransactionEntry.
     */
    flow_type: treasury_transaction_entry.flow_type;
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
    object: treasury_transaction_entry.object;
    /**
     * The Transaction associated with this object.
     */
    transaction: (string | treasury_transaction);
    /**
     * The specific money movement that generated the TransactionEntry.
     */
    type: treasury_transaction_entry.type;
};
export namespace treasury_transaction_entry {
    /**
     * Type of the flow associated with the TransactionEntry.
     */
    export enum flow_type {
        CREDIT_REVERSAL = 'credit_reversal',
        DEBIT_REVERSAL = 'debit_reversal',
        INBOUND_TRANSFER = 'inbound_transfer',
        ISSUING_AUTHORIZATION = 'issuing_authorization',
        OTHER = 'other',
        OUTBOUND_PAYMENT = 'outbound_payment',
        OUTBOUND_TRANSFER = 'outbound_transfer',
        RECEIVED_CREDIT = 'received_credit',
        RECEIVED_DEBIT = 'received_debit',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TREASURY_TRANSACTION_ENTRY = 'treasury.transaction_entry',
    }
    /**
     * The specific money movement that generated the TransactionEntry.
     */
    export enum type {
        CREDIT_REVERSAL = 'credit_reversal',
        CREDIT_REVERSAL_POSTING = 'credit_reversal_posting',
        DEBIT_REVERSAL = 'debit_reversal',
        INBOUND_TRANSFER = 'inbound_transfer',
        INBOUND_TRANSFER_RETURN = 'inbound_transfer_return',
        ISSUING_AUTHORIZATION_HOLD = 'issuing_authorization_hold',
        ISSUING_AUTHORIZATION_RELEASE = 'issuing_authorization_release',
        OTHER = 'other',
        OUTBOUND_PAYMENT = 'outbound_payment',
        OUTBOUND_PAYMENT_CANCELLATION = 'outbound_payment_cancellation',
        OUTBOUND_PAYMENT_FAILURE = 'outbound_payment_failure',
        OUTBOUND_PAYMENT_POSTING = 'outbound_payment_posting',
        OUTBOUND_PAYMENT_RETURN = 'outbound_payment_return',
        OUTBOUND_TRANSFER = 'outbound_transfer',
        OUTBOUND_TRANSFER_CANCELLATION = 'outbound_transfer_cancellation',
        OUTBOUND_TRANSFER_FAILURE = 'outbound_transfer_failure',
        OUTBOUND_TRANSFER_POSTING = 'outbound_transfer_posting',
        OUTBOUND_TRANSFER_RETURN = 'outbound_transfer_return',
        RECEIVED_CREDIT = 'received_credit',
        RECEIVED_DEBIT = 'received_debit',
    }
}

