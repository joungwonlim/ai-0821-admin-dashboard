/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customer } from './customer';
import type { customer_balance_resource_cash_balance_transaction_resource_adjusted_for_overdraft } from './customer_balance_resource_cash_balance_transaction_resource_adjusted_for_overdraft';
import type { customer_balance_resource_cash_balance_transaction_resource_applied_to_payment_transaction } from './customer_balance_resource_cash_balance_transaction_resource_applied_to_payment_transaction';
import type { customer_balance_resource_cash_balance_transaction_resource_funded_transaction } from './customer_balance_resource_cash_balance_transaction_resource_funded_transaction';
import type { customer_balance_resource_cash_balance_transaction_resource_refunded_from_payment_transaction } from './customer_balance_resource_cash_balance_transaction_resource_refunded_from_payment_transaction';
import type { customer_balance_resource_cash_balance_transaction_resource_transferred_to_balance } from './customer_balance_resource_cash_balance_transaction_resource_transferred_to_balance';
import type { customer_balance_resource_cash_balance_transaction_resource_unapplied_from_payment_transaction } from './customer_balance_resource_cash_balance_transaction_resource_unapplied_from_payment_transaction';
/**
 * Customers with certain payments enabled have a cash balance, representing funds that were paid
 * by the customer to a merchant, but have not yet been allocated to a payment. Cash Balance Transactions
 * represent when funds are moved into or out of this balance. This includes funding by the customer, allocation
 * to payments, and refunds to the customer.
 */
export type customer_cash_balance_transaction = {
    adjusted_for_overdraft?: customer_balance_resource_cash_balance_transaction_resource_adjusted_for_overdraft;
    applied_to_payment?: customer_balance_resource_cash_balance_transaction_resource_applied_to_payment_transaction;
    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;
    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;
    /**
     * The customer whose available cash balance changed as a result of this transaction.
     */
    customer: (string | customer);
    /**
     * The total available cash balance for the specified currency after this transaction was applied. Represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    ending_balance: number;
    funded?: customer_balance_resource_cash_balance_transaction_resource_funded_transaction;
    /**
     * Unique identifier for the object.
     */
    id: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * The amount by which the cash balance changed, represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). A positive value represents funds being added to the cash balance, a negative value represents funds being removed from the cash balance.
     */
    net_amount: number;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: customer_cash_balance_transaction.object;
    refunded_from_payment?: customer_balance_resource_cash_balance_transaction_resource_refunded_from_payment_transaction;
    transferred_to_balance?: customer_balance_resource_cash_balance_transaction_resource_transferred_to_balance;
    /**
     * The type of the cash balance transaction. New types may be added in future. See [Customer Balance](https://stripe.com/docs/payments/customer-balance#types) to learn more about these types.
     */
    type: customer_cash_balance_transaction.type;
    unapplied_from_payment?: customer_balance_resource_cash_balance_transaction_resource_unapplied_from_payment_transaction;
};
export namespace customer_cash_balance_transaction {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        CUSTOMER_CASH_BALANCE_TRANSACTION = 'customer_cash_balance_transaction',
    }
    /**
     * The type of the cash balance transaction. New types may be added in future. See [Customer Balance](https://stripe.com/docs/payments/customer-balance#types) to learn more about these types.
     */
    export enum type {
        ADJUSTED_FOR_OVERDRAFT = 'adjusted_for_overdraft',
        APPLIED_TO_PAYMENT = 'applied_to_payment',
        FUNDED = 'funded',
        FUNDING_REVERSED = 'funding_reversed',
        REFUNDED_FROM_PAYMENT = 'refunded_from_payment',
        RETURN_CANCELED = 'return_canceled',
        RETURN_INITIATED = 'return_initiated',
        TRANSFERRED_TO_BALANCE = 'transferred_to_balance',
        UNAPPLIED_FROM_PAYMENT = 'unapplied_from_payment',
    }
}

