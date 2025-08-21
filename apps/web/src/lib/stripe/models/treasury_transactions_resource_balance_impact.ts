/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Change to a FinancialAccount's balance
 */
export type treasury_transactions_resource_balance_impact = {
    /**
     * The change made to funds the user can spend right now.
     */
    cash: number;
    /**
     * The change made to funds that are not spendable yet, but will become available at a later time.
     */
    inbound_pending: number;
    /**
     * The change made to funds in the account, but not spendable because they are being held for pending outbound flows.
     */
    outbound_pending: number;
};

