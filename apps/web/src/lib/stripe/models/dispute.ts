/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { balance_transaction } from './balance_transaction';
import type { charge } from './charge';
import type { dispute_evidence } from './dispute_evidence';
import type { dispute_evidence_details } from './dispute_evidence_details';
import type { dispute_payment_method_details } from './dispute_payment_method_details';
import type { payment_intent } from './payment_intent';
/**
 * A dispute occurs when a customer questions your charge with their card issuer.
 * When this happens, you have the opportunity to respond to the dispute with
 * evidence that shows that the charge is legitimate.
 *
 * Related guide: [Disputes and fraud](https://stripe.com/docs/disputes)
 */
export type dispute = {
    /**
     * Disputed amount. Usually the amount of the charge, but it can differ (usually because of currency fluctuation or because only part of the order is disputed).
     */
    amount: number;
    /**
     * List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute.
     */
    balance_transactions: Array<balance_transaction>;
    /**
     * ID of the charge that's disputed.
     */
    charge: (string | charge);
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * List of eligibility types that are included in `enhanced_evidence`.
     */
    enhanced_eligibility_types: Array<'visa_compelling_evidence_3' | 'visa_compliance'>;
    evidence: dispute_evidence;
    evidence_details: dispute_evidence_details;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * If true, it's still possible to refund the disputed payment. After the payment has been fully refunded, no further funds are withdrawn from your Stripe account as a result of this dispute.
     */
    is_charge_refundable: boolean;
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
    object: dispute.object;
    /**
     * ID of the PaymentIntent that's disputed.
     */
    payment_intent?: (string | payment_intent) | null;
    payment_method_details?: dispute_payment_method_details;
    /**
     * Reason given by cardholder for dispute. Possible values are `bank_cannot_process`, `check_returned`, `credit_not_processed`, `customer_initiated`, `debit_not_authorized`, `duplicate`, `fraudulent`, `general`, `incorrect_account_details`, `insufficient_funds`, `noncompliant`, `product_not_received`, `product_unacceptable`, `subscription_canceled`, or `unrecognized`. Learn more about [dispute reasons](https://stripe.com/docs/disputes/categories).
     */
    reason: string;
    /**
     * The current status of a dispute. Possible values include:`warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `won`, `lost`, or `prevented`.
     */
    status: dispute.status;
};
export namespace dispute {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        DISPUTE = 'dispute',
    }
    /**
     * The current status of a dispute. Possible values include:`warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `won`, `lost`, or `prevented`.
     */
    export enum status {
        LOST = 'lost',
        NEEDS_RESPONSE = 'needs_response',
        UNDER_REVIEW = 'under_review',
        WARNING_CLOSED = 'warning_closed',
        WARNING_NEEDS_RESPONSE = 'warning_needs_response',
        WARNING_UNDER_REVIEW = 'warning_under_review',
        WON = 'won',
    }
}

