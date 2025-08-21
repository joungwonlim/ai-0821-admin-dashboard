/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_us_bank_account_blocked = {
    /**
     * The ACH network code that resulted in this block.
     */
    network_code?: payment_method_us_bank_account_blocked.network_code | null;
    /**
     * The reason why this PaymentMethod's fingerprint has been blocked
     */
    reason?: payment_method_us_bank_account_blocked.reason | null;
};
export namespace payment_method_us_bank_account_blocked {
    /**
     * The ACH network code that resulted in this block.
     */
    export enum network_code {
        R02 = 'R02',
        R03 = 'R03',
        R04 = 'R04',
        R05 = 'R05',
        R07 = 'R07',
        R08 = 'R08',
        R10 = 'R10',
        R11 = 'R11',
        R16 = 'R16',
        R20 = 'R20',
        R29 = 'R29',
        R31 = 'R31',
    }
    /**
     * The reason why this PaymentMethod's fingerprint has been blocked
     */
    export enum reason {
        BANK_ACCOUNT_CLOSED = 'bank_account_closed',
        BANK_ACCOUNT_FROZEN = 'bank_account_frozen',
        BANK_ACCOUNT_INVALID_DETAILS = 'bank_account_invalid_details',
        BANK_ACCOUNT_RESTRICTED = 'bank_account_restricted',
        BANK_ACCOUNT_UNUSABLE = 'bank_account_unusable',
        DEBIT_NOT_AUTHORIZED = 'debit_not_authorized',
    }
}

