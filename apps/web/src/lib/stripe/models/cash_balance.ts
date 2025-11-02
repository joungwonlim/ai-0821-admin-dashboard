/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customer_balance_customer_balance_settings } from './customer_balance_customer_balance_settings';
/**
 * A customer's `Cash balance` represents real funds. Customers can add funds to their cash balance by sending a bank transfer. These funds can be used for payment and can eventually be paid out to your bank account.
 */
export type cash_balance = {
    /**
     * A hash of all cash balances available to this customer. You cannot delete a customer with any cash balances, even if the balance is 0. Amounts are represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
     */
    available?: Record<string, number> | null;
    /**
     * The ID of the customer whose cash balance this object represents.
     */
    customer: string;
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: cash_balance.object;
    settings: customer_balance_customer_balance_settings;
};
export namespace cash_balance {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        CASH_BALANCE = 'cash_balance',
    }
}

