/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { treasury_received_credits_resource_linked_flows } from './treasury_received_credits_resource_linked_flows';
import type { treasury_received_credits_resource_reversal_details } from './treasury_received_credits_resource_reversal_details';
import type { treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_details } from './treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_details';
import type { treasury_transaction } from './treasury_transaction';
/**
 * ReceivedCredits represent funds sent to a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) (for example, via ACH or wire). These money movements are not initiated from the FinancialAccount.
 */
export type treasury_received_credit = {
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
     * Reason for the failure. A ReceivedCredit might fail because the receiving FinancialAccount is closed or frozen.
     */
    failure_code?: treasury_received_credit.failure_code | null;
    /**
     * The FinancialAccount that received the funds.
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
    initiating_payment_method_details: treasury_shared_resource_initiating_payment_method_details_initiating_payment_method_details;
    linked_flows: treasury_received_credits_resource_linked_flows;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The rails used to send the funds.
     */
    network: treasury_received_credit.network;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: treasury_received_credit.object;
    /**
     * Details describing when a ReceivedCredit may be reversed.
     */
    reversal_details?: treasury_received_credits_resource_reversal_details | null;
    /**
     * Status of the ReceivedCredit. ReceivedCredits are created either `succeeded` (approved) or `failed` (declined). If a ReceivedCredit is declined, the failure reason can be found in the `failure_code` field.
     */
    status: treasury_received_credit.status;
    /**
     * The Transaction associated with this object.
     */
    transaction?: (string | treasury_transaction) | null;
};
export namespace treasury_received_credit {
    /**
     * Reason for the failure. A ReceivedCredit might fail because the receiving FinancialAccount is closed or frozen.
     */
    export enum failure_code {
        ACCOUNT_CLOSED = 'account_closed',
        ACCOUNT_FROZEN = 'account_frozen',
        INTERNATIONAL_TRANSACTION = 'international_transaction',
        OTHER = 'other',
    }
    /**
     * The rails used to send the funds.
     */
    export enum network {
        ACH = 'ach',
        CARD = 'card',
        STRIPE = 'stripe',
        US_DOMESTIC_WIRE = 'us_domestic_wire',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TREASURY_RECEIVED_CREDIT = 'treasury.received_credit',
    }
    /**
     * Status of the ReceivedCredit. ReceivedCredits are created either `succeeded` (approved) or `failed` (declined). If a ReceivedCredit is declined, the failure reason can be found in the `failure_code` field.
     */
    export enum status {
        FAILED = 'failed',
        SUCCEEDED = 'succeeded',
    }
}

