/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { invoice_payment_method_options_acss_debit_mandate_options } from './invoice_payment_method_options_acss_debit_mandate_options';
export type invoice_payment_method_options_acss_debit = {
    mandate_options?: invoice_payment_method_options_acss_debit_mandate_options;
    /**
     * Bank account verification method.
     */
    verification_method?: invoice_payment_method_options_acss_debit.verification_method;
};
export namespace invoice_payment_method_options_acss_debit {
    /**
     * Bank account verification method.
     */
    export enum verification_method {
        AUTOMATIC = 'automatic',
        INSTANT = 'instant',
        MICRODEPOSITS = 'microdeposits',
    }
}

