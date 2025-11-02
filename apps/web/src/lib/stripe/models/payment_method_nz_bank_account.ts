/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_nz_bank_account = {
    /**
     * The name on the bank account. Only present if the account holder name is different from the name of the authorized signatory collected in the PaymentMethod’s billing details.
     */
    account_holder_name?: string | null;
    /**
     * The numeric code for the bank account's bank.
     */
    bank_code: string;
    /**
     * The name of the bank.
     */
    bank_name: string;
    /**
     * The numeric code for the bank account's bank branch.
     */
    branch_code: string;
    /**
     * Last four digits of the bank account number.
     */
    last4: string;
    /**
     * The suffix of the bank account number.
     */
    suffix?: string | null;
};

