/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { setup_intent_payment_method_options_mandate_options_acss_debit } from './setup_intent_payment_method_options_mandate_options_acss_debit';
export type setup_intent_payment_method_options_acss_debit = {
    /**
     * Currency supported by the bank account
     */
    currency?: setup_intent_payment_method_options_acss_debit.currency | null;
    mandate_options?: setup_intent_payment_method_options_mandate_options_acss_debit;
    /**
     * Bank account verification method.
     */
    verification_method?: setup_intent_payment_method_options_acss_debit.verification_method;
};
export namespace setup_intent_payment_method_options_acss_debit {
    /**
     * Currency supported by the bank account
     */
    export enum currency {
        CAD = 'cad',
        USD = 'usd',
    }
    /**
     * Bank account verification method.
     */
    export enum verification_method {
        AUTOMATIC = 'automatic',
        INSTANT = 'instant',
        MICRODEPOSITS = 'microdeposits',
    }
}

