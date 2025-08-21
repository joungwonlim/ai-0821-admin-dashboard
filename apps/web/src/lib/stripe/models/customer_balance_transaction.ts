/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { checkout_session } from './checkout_session';
import type { credit_note } from './credit_note';
import type { customer } from './customer';
import type { invoice } from './invoice';
/**
 * Each customer has a [Balance](https://stripe.com/docs/api/customers/object#customer_object-balance) value,
 * which denotes a debit or credit that's automatically applied to their next invoice upon finalization.
 * You may modify the value directly by using the [update customer API](https://stripe.com/docs/api/customers/update),
 * or by creating a Customer Balance Transaction, which increments or decrements the customer's `balance` by the specified `amount`.
 *
 * Related guide: [Customer balance](https://stripe.com/docs/billing/customer/balance)
 */
export type customer_balance_transaction = {
    /**
     * The amount of the transaction. A negative value is a credit for the customer's balance, and a positive value is a debit to the customer's `balance`.
     */
    amount: number;
    /**
     * The ID of the checkout session (if any) that created the transaction.
     */
    checkout_session?: (string | checkout_session) | null;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * The ID of the credit note (if any) related to the transaction.
     */
    credit_note?: (string | credit_note) | null;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * The ID of the customer the transaction belongs to.
     */
    customer: (string | customer);
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;
    /**
     * The customer's `balance` after the transaction was applied. A negative value decreases the amount due on the customer's next invoice. A positive value increases the amount due on the customer's next invoice.
     */
    ending_balance: number;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * The ID of the invoice (if any) related to the transaction.
     */
    invoice?: (string | invoice) | null;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, string> | null;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: customer_balance_transaction.object;
    /**
     * Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or `checkout_session_subscription_payment_canceled`. See the [Customer Balance page](https://stripe.com/docs/billing/customer/balance#types) to learn more about transaction types.
     */
    type: customer_balance_transaction.type;
};
export namespace customer_balance_transaction {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        CUSTOMER_BALANCE_TRANSACTION = 'customer_balance_transaction',
    }
    /**
     * Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or `checkout_session_subscription_payment_canceled`. See the [Customer Balance page](https://stripe.com/docs/billing/customer/balance#types) to learn more about transaction types.
     */
    export enum type {
        ADJUSTMENT = 'adjustment',
        APPLIED_TO_INVOICE = 'applied_to_invoice',
        CHECKOUT_SESSION_SUBSCRIPTION_PAYMENT = 'checkout_session_subscription_payment',
        CHECKOUT_SESSION_SUBSCRIPTION_PAYMENT_CANCELED = 'checkout_session_subscription_payment_canceled',
        CREDIT_NOTE = 'credit_note',
        INITIAL = 'initial',
        INVOICE_OVERPAID = 'invoice_overpaid',
        INVOICE_TOO_LARGE = 'invoice_too_large',
        INVOICE_TOO_SMALL = 'invoice_too_small',
        MIGRATION = 'migration',
        UNAPPLIED_FROM_INVOICE = 'unapplied_from_invoice',
        UNSPENT_RECEIVER_CREDIT = 'unspent_receiver_credit',
    }
}

