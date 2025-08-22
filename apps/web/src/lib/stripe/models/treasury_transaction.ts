/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { treasury_transaction_entry } from './treasury_transaction_entry';
import type { treasury_transactions_resource_abstract_transaction_resource_status_transitions } from './treasury_transactions_resource_abstract_transaction_resource_status_transitions';
import type { treasury_transactions_resource_balance_impact } from './treasury_transactions_resource_balance_impact';
import type { treasury_transactions_resource_flow_details } from './treasury_transactions_resource_flow_details';
/**
 * Transactions represent changes to a [FinancialAccount's](https://stripe.com/docs/api#financial_accounts) balance.
 */
export type treasury_transaction = {
    /**
     * Amount (in cents) transferred.
     */
    amount: number;
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
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description: string;
    /**
     * A list of TransactionEntries that are part of this Transaction. This cannot be expanded in any list endpoints.
     */
    entries?: {
        /**
         * Details about each object.
         */
        data: Array<treasury_transaction_entry>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: treasury_transaction.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    } | null;
    /**
     * The FinancialAccount associated with this object.
     */
    financial_account: string;
    /**
     * ID of the flow that created the Transaction.
     */
    flow?: string | null;
    /**
     * Details of the flow that created the Transaction.
     */
    flow_details?: treasury_transactions_resource_flow_details | null;
    /**
     * Type of the flow that created the Transaction.
     */
    flow_type: treasury_transaction.flow_type;
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
    object: treasury_transaction.object;
    /**
     * Status of the Transaction.
     */
    status: treasury_transaction.status;
    status_transitions: treasury_transactions_resource_abstract_transaction_resource_status_transitions;
};
export namespace treasury_transaction {
    /**
     * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
     */
    export enum object {
        LIST = 'list',
    }
    /**
     * Type of the flow that created the Transaction.
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
     * Status of the Transaction.
     */
    export enum status {
        OPEN = 'open',
        POSTED = 'posted',
        VOID = 'void',
    }
}

