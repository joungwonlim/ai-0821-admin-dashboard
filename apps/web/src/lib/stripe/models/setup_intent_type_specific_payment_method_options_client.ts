/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type setup_intent_type_specific_payment_method_options_client = {
    /**
     * Bank account verification method.
     */
    verification_method?: setup_intent_type_specific_payment_method_options_client.verification_method;
};
export namespace setup_intent_type_specific_payment_method_options_client {
    /**
     * Bank account verification method.
     */
    export enum verification_method {
        AUTOMATIC = 'automatic',
        INSTANT = 'instant',
        MICRODEPOSITS = 'microdeposits',
    }
}

