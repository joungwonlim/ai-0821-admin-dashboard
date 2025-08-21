/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { credit_balance } from './credit_balance';
import type { customer } from './customer';
import type { deleted_customer } from './deleted_customer';
/**
 * Indicates the billing credit balance for billing credits granted to a customer.
 */
export type billing_credit_balance_summary = {
    /**
     * The billing credit balances. One entry per credit grant currency. If a customer only has credit grants in a single currency, then this will have a single balance entry.
     */
    balances: Array<credit_balance>;
    /**
     * The customer the balance is for.
     */
    customer: (string | customer | deleted_customer);
    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: billing_credit_balance_summary.object;
};
export namespace billing_credit_balance_summary {
    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    export enum object {
        BILLING_CREDIT_BALANCE_SUMMARY = 'billing.credit_balance_summary',
    }
}

