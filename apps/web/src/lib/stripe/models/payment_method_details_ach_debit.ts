/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_details_ach_debit = {
    /**
     * Type of entity that holds the account. This can be either `individual` or `company`.
     */
    account_holder_type?: payment_method_details_ach_debit.account_holder_type | null;
    /**
     * Name of the bank associated with the bank account.
     */
    bank_name?: string | null;
    /**
     * Two-letter ISO code representing the country the bank account is located in.
     */
    country?: string | null;
    /**
     * Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
     */
    fingerprint?: string | null;
    /**
     * Last four digits of the bank account number.
     */
    last4?: string | null;
    /**
     * Routing transit number of the bank account.
     */
    routing_number?: string | null;
};
export namespace payment_method_details_ach_debit {
    /**
     * Type of entity that holds the account. This can be either `individual` or `company`.
     */
    export enum account_holder_type {
        COMPANY = 'company',
        INDIVIDUAL = 'individual',
    }
}

