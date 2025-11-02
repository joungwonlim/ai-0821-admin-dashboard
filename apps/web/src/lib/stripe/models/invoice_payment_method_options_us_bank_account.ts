/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoice_payment_method_options_us_bank_account_linked_account_options } from './invoice_payment_method_options_us_bank_account_linked_account_options';
export type invoice_payment_method_options_us_bank_account = {
    financial_connections?: invoice_payment_method_options_us_bank_account_linked_account_options;
    /**
     * Bank account verification method.
     */
    verification_method?: invoice_payment_method_options_us_bank_account.verification_method;
};
export namespace invoice_payment_method_options_us_bank_account {
    /**
     * Bank account verification method.
     */
    export enum verification_method {
        AUTOMATIC = 'automatic',
        INSTANT = 'instant',
        MICRODEPOSITS = 'microdeposits',
    }
}

