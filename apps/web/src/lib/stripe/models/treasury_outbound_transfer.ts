/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { outbound_transfers_payment_method_details } from './outbound_transfers_payment_method_details';
import type { treasury_outbound_transfers_resource_outbound_transfer_resource_tracking_details } from './treasury_outbound_transfers_resource_outbound_transfer_resource_tracking_details';
import type { treasury_outbound_transfers_resource_returned_details } from './treasury_outbound_transfers_resource_returned_details';
import type { treasury_outbound_transfers_resource_status_transitions } from './treasury_outbound_transfers_resource_status_transitions';
import type { treasury_transaction } from './treasury_transaction';
/**
 * Use [OutboundTransfers](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers) to transfer funds from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) to a PaymentMethod belonging to the same entity. To send funds to a different party, use [OutboundPayments](https://stripe.com/docs/api#outbound_payments) instead. You can send funds over ACH rails or through a domestic wire transfer to a user's own external bank account.
 *
 * Simulate OutboundTransfer state changes with the `/v1/test_helpers/treasury/outbound_transfers` endpoints. These methods can only be called on test mode objects.
 *
 * Related guide: [Moving money with Treasury using OutboundTransfer objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers)
 */
export type treasury_outbound_transfer = {
    /**
     * Amount (in cents) transferred.
     */
    amount: number;
    /**
     * Returns `true` if the object can be canceled, and `false` otherwise.
     */
    cancelable: boolean;
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
     * The PaymentMethod used as the payment instrument for an OutboundTransfer.
     */
    destination_payment_method?: string | null;
    destination_payment_method_details: outbound_transfers_payment_method_details;
    /**
     * The date when funds are expected to arrive in the destination account.
     */
    expected_arrival_date: number;
    /**
     * The FinancialAccount that funds were pulled from.
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
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: treasury_outbound_transfer.object;
    /**
     * Details about a returned OutboundTransfer. Only set when the status is `returned`.
     */
    returned_details?: treasury_outbound_transfers_resource_returned_details | null;
    /**
     * Information about the OutboundTransfer to be sent to the recipient account.
     */
    statement_descriptor: string;
    /**
     * Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. An OutboundTransfer is `processing` if it has been created and is pending. The status changes to `posted` once the OutboundTransfer has been "confirmed" and funds have left the account, or to `failed` or `canceled`. If an OutboundTransfer fails to arrive at its destination, its status will change to `returned`.
     */
    status: treasury_outbound_transfer.status;
    status_transitions: treasury_outbound_transfers_resource_status_transitions;
    /**
     * Details about network-specific tracking information if available.
     */
    tracking_details?: treasury_outbound_transfers_resource_outbound_transfer_resource_tracking_details | null;
    /**
     * The Transaction associated with this object.
     */
    transaction: (string | treasury_transaction);
};
export namespace treasury_outbound_transfer {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TREASURY_OUTBOUND_TRANSFER = 'treasury.outbound_transfer',
    }
    /**
     * Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. An OutboundTransfer is `processing` if it has been created and is pending. The status changes to `posted` once the OutboundTransfer has been "confirmed" and funds have left the account, or to `failed` or `canceled`. If an OutboundTransfer fails to arrive at its destination, its status will change to `returned`.
     */
    export enum status {
        CANCELED = 'canceled',
        FAILED = 'failed',
        POSTED = 'posted',
        PROCESSING = 'processing',
        RETURNED = 'returned',
    }
}

