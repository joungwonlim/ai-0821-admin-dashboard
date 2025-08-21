/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * ABA Records contain U.S. bank account details per the ABA format.
 */
export type treasury_financial_accounts_resource_aba_record = {
    /**
     * The name of the person or business that owns the bank account.
     */
    account_holder_name: string;
    /**
     * The account number.
     */
    account_number?: string | null;
    /**
     * The last four characters of the account number.
     */
    account_number_last4: string;
    /**
     * Name of the bank.
     */
    bank_name: string;
    /**
     * Routing number for the account.
     */
    routing_number: string;
};

