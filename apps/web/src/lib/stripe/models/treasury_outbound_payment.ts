/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { outbound_payments_payment_method_details } from './outbound_payments_payment_method_details';
import type { treasury_outbound_payments_resource_outbound_payment_resource_end_user_details } from './treasury_outbound_payments_resource_outbound_payment_resource_end_user_details';
import type { treasury_outbound_payments_resource_outbound_payment_resource_status_transitions } from './treasury_outbound_payments_resource_outbound_payment_resource_status_transitions';
import type { treasury_outbound_payments_resource_outbound_payment_resource_tracking_details } from './treasury_outbound_payments_resource_outbound_payment_resource_tracking_details';
import type { treasury_outbound_payments_resource_returned_status } from './treasury_outbound_payments_resource_returned_status';
import type { treasury_transaction } from './treasury_transaction';
/**
 * Use [OutboundPayments](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-payments) to send funds to another party's external bank account or [FinancialAccount](https://stripe.com/docs/api#financial_accounts). To send money to an account belonging to the same user, use an [OutboundTransfer](https://stripe.com/docs/api#outbound_transfers).
 *
 * Simulate OutboundPayment state changes with the `/v1/test_helpers/treasury/outbound_payments` endpoints. These methods can only be called on test mode objects.
 *
 * Related guide: [Moving money with Treasury using OutboundPayment objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-payments)
 */
export type treasury_outbound_payment = {
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
     * ID of the [customer](https://stripe.com/docs/api/customers) to whom an OutboundPayment is sent.
     */
    customer?: string | null;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;
    /**
     * The PaymentMethod via which an OutboundPayment is sent. This field can be empty if the OutboundPayment was created using `destination_payment_method_data`.
     */
    destination_payment_method?: string | null;
    /**
     * Details about the PaymentMethod for an OutboundPayment.
     */
    destination_payment_method_details?: outbound_payments_payment_method_details | null;
    /**
     * Details about the end user.
     */
    end_user_details?: treasury_outbound_payments_resource_outbound_payment_resource_end_user_details | null;
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
    object: treasury_outbound_payment.object;
    /**
     * Details about a returned OutboundPayment. Only set when the status is `returned`.
     */
    returned_details?: treasury_outbound_payments_resource_returned_status | null;
    /**
     * The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer).
     */
    statement_descriptor: string;
    /**
     * Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`. An OutboundPayment is `processing` if it has been created and is pending. The status changes to `posted` once the OutboundPayment has been "confirmed" and funds have left the account, or to `failed` or `canceled`. If an OutboundPayment fails to arrive at its destination, its status will change to `returned`.
     */
    status: treasury_outbound_payment.status;
    status_transitions: treasury_outbound_payments_resource_outbound_payment_resource_status_transitions;
    /**
     * Details about network-specific tracking information if available.
     */
    tracking_details?: treasury_outbound_payments_resource_outbound_payment_resource_tracking_details | null;
    /**
     * The Transaction associated with this object.
     */
    transaction: (string | treasury_transaction);
};
export namespace treasury_outbound_payment {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        TREASURY_OUTBOUND_PAYMENT = 'treasury.outbound_payment',
    }
    /**
     * Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`. An OutboundPayment is `processing` if it has been created and is pending. The status changes to `posted` once the OutboundPayment has been "confirmed" and funds have left the account, or to `failed` or `canceled`. If an OutboundPayment fails to arrive at its destination, its status will change to `returned`.
     */
    export enum status {
        CANCELED = 'canceled',
        FAILED = 'failed',
        POSTED = 'posted',
        PROCESSING = 'processing',
        RETURNED = 'returned',
    }
}

