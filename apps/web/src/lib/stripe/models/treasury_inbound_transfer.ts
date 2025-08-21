/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { inbound_transfers } from './inbound_transfers';
import type { treasury_inbound_transfers_resource_failure_details } from './treasury_inbound_transfers_resource_failure_details';
import type { treasury_inbound_transfers_resource_inbound_transfer_resource_linked_flows } from './treasury_inbound_transfers_resource_inbound_transfer_resource_linked_flows';
import type { treasury_inbound_transfers_resource_inbound_transfer_resource_status_transitions } from './treasury_inbound_transfers_resource_inbound_transfer_resource_status_transitions';
import type { treasury_transaction } from './treasury_transaction';
/**
 * Use [InboundTransfers](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers) to add funds to your [FinancialAccount](https://stripe.com/docs/api#financial_accounts) via a PaymentMethod that is owned by you. The funds will be transferred via an ACH debit.
 *
 * Related guide: [Moving money with Treasury using InboundTransfer objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers)
 */
export type treasury_inbound_transfer = {
    /**
     * Amount (in cents) transferred.
     */
    amount: number;
    /**
     * Returns `true` if the InboundTransfer is able to be canceled.
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
     * Details about this InboundTransfer's failure. Only set when status is `failed`.
     */
    failure_details?: treasury_inbound_transfers_resource_failure_details | null;
    /**
     * The FinancialAccount that received the funds.
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
    linked_flows: treasury_inbound_transfers_resource_inbound_transfer_resource_linked_flows;
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
    object: treasury_inbound_transfer.object;
    /**
     * The origin payment method to be debited for an InboundTransfer.
     */
    origin_payment_method?: string | null;
    /**
     * Details about the PaymentMethod for an InboundTransfer.
     */
    origin_payment_method_details?: inbound_transfers | null;
    /**
     * Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state.
     */
    returned?: boolean | null;
    /**
     * Statement descriptor shown when funds are debited from the source. Not all payment networks support `statement_descriptor`.
     */
    statement_descriptor: string;
    /**
     * Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. An InboundTransfer is `processing` if it is created and pending. The status changes to `succeeded` once the funds have been "confirmed" and a `transaction` is created and posted. The status changes to `failed` if the transfer fails.
     */
    status: treasury_inbound_transfer.status;
    status_transitions: treasury_inbound_transfers_resource_inbound_transfer_resource_status_transitions;
    /**
     * The Transaction associated with this object.
     */
    transaction?: (string | treasury_transaction) | null;
};
export namespace treasury_inbound_transfer {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TREASURY_INBOUND_TRANSFER = 'treasury.inbound_transfer',
    }
    /**
     * Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. An InboundTransfer is `processing` if it is created and pending. The status changes to `succeeded` once the funds have been "confirmed" and a `transaction` is created and posted. The status changes to `failed` if the transfer fails.
     */
    export enum status {
        CANCELED = 'canceled',
        FAILED = 'failed',
        PROCESSING = 'processing',
        SUCCEEDED = 'succeeded',
    }
}

