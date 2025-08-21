/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { treasury_received_credits_resource_status_transitions } from './treasury_received_credits_resource_status_transitions';
import type { treasury_transaction } from './treasury_transaction';
/**
 * You can reverse some [ReceivedCredits](https://stripe.com/docs/api#received_credits) depending on their network and source flow. Reversing a ReceivedCredit leads to the creation of a new object known as a CreditReversal.
 */
export type treasury_credit_reversal = {
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
     * The FinancialAccount to reverse funds from.
     */
    financial_account: string;
    /**
     * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
     */
    hosted_regulatory_receipt_url?: string | null;
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
     * The rails used to reverse the funds.
     */
    network: treasury_credit_reversal.network;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: treasury_credit_reversal.object;
    /**
     * The ReceivedCredit being reversed.
     */
    received_credit: string;
    /**
     * Status of the CreditReversal
     */
    status: treasury_credit_reversal.status;
    status_transitions: treasury_received_credits_resource_status_transitions;
    /**
     * The Transaction associated with this object.
     */
    transaction?: (string | treasury_transaction) | null;
};
export namespace treasury_credit_reversal {
    /**
     * The rails used to reverse the funds.
     */
    export enum network {
        ACH = 'ach',
        STRIPE = 'stripe',
    }
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TREASURY_CREDIT_REVERSAL = 'treasury.credit_reversal',
    }
    /**
     * Status of the CreditReversal
     */
    export enum status {
        CANCELED = 'canceled',
        POSTED = 'posted',
        PROCESSING = 'processing',
    }
}

