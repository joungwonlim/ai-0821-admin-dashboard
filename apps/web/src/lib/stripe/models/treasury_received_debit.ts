/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { treasury_received_debits_resource_linked_flows } from './treasury_received_debits_resource_linked_flows';
import type { treasury_received_debits_resource_reversal_details } from './treasury_received_debits_resource_reversal_details';
import type { treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_details } from './treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_details';
import type { treasury_transaction } from './treasury_transaction';
/**
 * ReceivedDebits represent funds pulled from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts). These are not initiated from the FinancialAccount.
 */
export type treasury_received_debit = {
    /**
     * Amount (in cents) transferred.
     */
    amount: number;
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
     * Reason for the failure. A ReceivedDebit might fail because the FinancialAccount doesn't have sufficient funds, is closed, or is frozen.
     */
    failure_code?: treasury_received_debit.failure_code | null;
    /**
     * The FinancialAccount that funds were pulled from.
     */
    financial_account?: string | null;
    /**
     * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
     */
    hosted_regulatory_receipt_url?: string | null;
    /**
     * Unique identifier for the object.
     */
    id: string;
    initiating_payment_method_details?: treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_details;
    linked_flows: treasury_received_debits_resource_linked_flows;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The network used for the ReceivedDebit.
     */
    network: treasury_received_debit.network;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: treasury_received_debit.object;
    /**
     * Details describing when a ReceivedDebit might be reversed.
     */
    reversal_details?: treasury_received_debits_resource_reversal_details | null;
    /**
     * Status of the ReceivedDebit. ReceivedDebits are created with a status of either `succeeded` (approved) or `failed` (declined). The failure reason can be found under the `failure_code`.
     */
    status: treasury_received_debit.status;
    /**
     * The Transaction associated with this object.
     */
    transaction?: (string | treasury_transaction) | null;
};
export namespace treasury_received_debit {
    /**
     * Reason for the failure. A ReceivedDebit might fail because the FinancialAccount doesn't have sufficient funds, is closed, or is frozen.
     */
    export enum failure_code {
        ACCOUNT_CLOSED = 'account_closed',
        ACCOUNT_FROZEN = 'account_frozen',
        INSUFFICIENT_FUNDS = 'insufficient_funds',
        INTERNATIONAL_TRANSACTION = 'international_transaction',
        OTHER = 'other',
    }
    /**
     * The network used for the ReceivedDebit.
     */
    export enum network {
        ACH = 'ach',
        CARD = 'card',
        STRIPE = 'stripe',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TREASURY_RECEIVED_DEBIT = 'treasury.received_debit',
    }
    /**
     * Status of the ReceivedDebit. ReceivedDebits are created with a status of either `succeeded` (approved) or `failed` (declined). The failure reason can be found under the `failure_code`.
     */
    export enum status {
        FAILED = 'failed',
        SUCCEEDED = 'succeeded',
    }
}

