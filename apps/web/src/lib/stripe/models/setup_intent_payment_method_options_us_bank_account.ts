/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { linked_account_options_common } from './linked_account_options_common';
import type { payment_method_options_us_bank_account_mandate_options } from './payment_method_options_us_bank_account_mandate_options';
export type setup_intent_payment_method_options_us_bank_account = {
    financial_connections?: linked_account_options_common;
    mandate_options?: payment_method_options_us_bank_account_mandate_options;
    /**
     * Bank account verification method.
     */
    verification_method?: setup_intent_payment_method_options_us_bank_account.verification_method;
};
export namespace setup_intent_payment_method_options_us_bank_account {
    /**
     * Bank account verification method.
     */
    export enum verification_method {
        AUTOMATIC = 'automatic',
        INSTANT = 'instant',
        MICRODEPOSITS = 'microdeposits',
    }
}

