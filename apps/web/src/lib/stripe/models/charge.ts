/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { account } from './account';
import type { application } from './application';
import type { application_fee } from './application_fee';
import type { balance_transaction } from './balance_transaction';
import type { billing_details } from './billing_details';
import type { charge_fraud_details } from './charge_fraud_details';
import type { charge_outcome } from './charge_outcome';
import type { charge_transfer_data } from './charge_transfer_data';
import type { customer } from './customer';
import type { deleted_customer } from './deleted_customer';
import type { payment_flows_payment_intent_presentment_details } from './payment_flows_payment_intent_presentment_details';
import type { payment_intent } from './payment_intent';
import type { payment_method_details } from './payment_method_details';
import type { radar_radar_options } from './radar_radar_options';
import type { refund } from './refund';
import type { review } from './review';
import type { shipping } from './shipping';
import type { transfer } from './transfer';
/**
 * The `Charge` object represents a single attempt to move money into your Stripe account.
 * PaymentIntent confirmation is the most common way to create Charges, but transferring
 * money to a different Stripe account through Connect also creates Charges.
 * Some legacy payment flows create Charges directly, which is not recommended for new integrations.
 */
export type charge = {
    /**
     * Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
     */
    amount: number;
    /**
     * Amount in cents (or local equivalent) captured (can be less than the amount attribute on the charge if a partial capture was made).
     */
    amount_captured: number;
    /**
     * Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the charge if a partial refund was issued).
     */
    amount_refunded: number;
    /**
     * ID of the Connect application that created the charge.
     */
    application?: (string | application) | null;
    /**
     * The application fee (if any) for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collect-fees) for details.
     */
    application_fee?: (string | application_fee) | null;
    /**
     * The amount of the application fee (if any) requested for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collect-fees) for details.
     */
    application_fee_amount?: number | null;
    /**
     * ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes).
     */
    balance_transaction?: (string | balance_transaction) | null;
    billing_details: billing_details;
    /**
     * The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. Allows you to see what the statement descriptor looks like after the static and dynamic portions are combined. This value only exists for card payments.
     */
    calculated_statement_descriptor?: string | null;
    /**
     * If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured.
     */
    captured: boolean;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * ID of the customer this charge is for if one exists.
     */
    customer?: (string | customer | deleted_customer) | null;
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;
    /**
     * Whether the charge has been disputed.
     */
    disputed: boolean;
    /**
     * ID of the balance transaction that describes the reversal of the balance on your account due to payment failure.
     */
    failure_balance_transaction?: (string | balance_transaction) | null;
    /**
     * Error code explaining reason for charge failure if available (see [the errors section](https://stripe.com/docs/error-codes) for a list of codes).
     */
    failure_code?: string | null;
    /**
     * Message to user further explaining reason for charge failure if available.
     */
    failure_message?: string | null;
    /**
     * Information on fraud assessments for the charge.
     */
    fraud_details?: charge_fraud_details | null;
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
    object: charge.object;
    /**
     * The account (if any) the charge was made on behalf of without triggering an automatic transfer. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers) for details.
     */
    on_behalf_of?: (string | account) | null;
    /**
     * Details about whether the payment was accepted, and why. See [understanding declines](https://stripe.com/docs/declines) for details.
     */
    outcome?: charge_outcome | null;
    /**
     * `true` if the charge succeeded, or was successfully authorized for later capture.
     */
    paid: boolean;
    /**
     * ID of the PaymentIntent associated with this charge, if one exists.
     */
    payment_intent?: (string | payment_intent) | null;
    /**
     * ID of the payment method used in this charge.
     */
    payment_method?: string | null;
    /**
     * Details about the payment method at the time of the transaction.
     */
    payment_method_details?: payment_method_details | null;
    presentment_details?: payment_flows_payment_intent_presentment_details;
    radar_options?: radar_radar_options;
    /**
     * This is the email address that the receipt for this charge was sent to.
     */
    receipt_email?: string | null;
    /**
     * This is the transaction number that appears on email receipts sent for this charge. This attribute will be `null` until a receipt has been sent.
     */
    receipt_number?: string | null;
    /**
     * This is the URL to view the receipt for this charge. The receipt is kept up-to-date to the latest state of the charge, including any refunds. If the charge is for an Invoice, the receipt will be stylized as an Invoice receipt.
     */
    receipt_url?: string | null;
    /**
     * Whether the charge has been fully refunded. If the charge is only partially refunded, this attribute will still be false.
     */
    refunded: boolean;
    /**
     * A list of refunds that have been applied to the charge.
     */
    refunds?: {
        /**
         * Details about each object.
         */
        data: Array<refund>;
        /**
         * True if this list has another page of items after this one that can be fetched.
         */
        has_more: boolean;
        /**
         * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
         */
        object: charge.object;
        /**
         * The URL where this list can be accessed.
         */
        url: string;
    } | null;
    /**
     * ID of the review associated with this charge if one exists.
     */
    review?: (string | review) | null;
    /**
     * Shipping information for the charge.
     */
    shipping?: shipping | null;
    /**
     * The transfer ID which created this charge. Only present if the charge came from another Stripe account. [See the Connect documentation](https://docs.stripe.com/connect/destination-charges) for details.
     */
    source_transfer?: (string | transfer) | null;
    /**
     * For a non-card charge, text that appears on the customer's statement as the statement descriptor. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).
     *
     * For a card charge, this value is ignored unless you don't specify a `statement_descriptor_suffix`, in which case this value is used as the suffix.
     */
    statement_descriptor?: string | null;
    /**
     * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement. If the account has no prefix value, the suffix is concatenated to the account's statement descriptor.
     */
    statement_descriptor_suffix?: string | null;
    /**
     * The status of the payment is either `succeeded`, `pending`, or `failed`.
     */
    status: charge.status;
    /**
     * ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter).
     */
    transfer?: (string | transfer);
    /**
     * An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
     */
    transfer_data?: charge_transfer_data | null;
    /**
     * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
     */
    transfer_group?: string | null;
};
export namespace charge {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        CHARGE = 'charge',
    }
    /**
     * The status of the payment is either `succeeded`, `pending`, or `failed`.
     */
    export enum status {
        FAILED = 'failed',
        PENDING = 'pending',
        SUCCEEDED = 'succeeded',
    }
}

