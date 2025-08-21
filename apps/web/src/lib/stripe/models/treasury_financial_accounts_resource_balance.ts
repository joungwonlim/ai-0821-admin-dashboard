/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Balance information for the FinancialAccount
 */
export type treasury_financial_accounts_resource_balance = {
    /**
     * Funds the user can spend right now.
     */
    cash: Record<string, number>;
    /**
     * Funds not spendable yet, but will become available at a later time.
     */
    inbound_pending: Record<string, number>;
    /**
     * Funds in the account, but not spendable because they are being held for pending outbound flows.
     */
    outbound_pending: Record<string, number>;
};

