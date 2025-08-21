/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { balance_transaction } from './balance_transaction';
import type { customer_cash_balance_transaction } from './customer_cash_balance_transaction';
export type customer_balance_resource_cash_balance_transaction_resource_adjusted_for_overdraft = {
    /**
     * The [Balance Transaction](https://stripe.com/docs/api/balance_transactions/object) that corresponds to funds taken out of your Stripe balance.
     */
    balance_transaction: (string | balance_transaction);
    /**
     * The [Cash Balance Transaction](https://stripe.com/docs/api/cash_balance_transactions/object) that brought the customer balance negative, triggering the clawback of funds.
     */
    linked_transaction: (string | customer_cash_balance_transaction);
};

