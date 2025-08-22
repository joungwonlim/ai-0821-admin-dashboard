/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_method_details_card_present_offline = {
    /**
     * Time at which the payment was collected while offline
     */
    stored_at?: number | null;
    /**
     * The method used to process this payment method offline. Only deferred is allowed.
     */
    type?: payment_method_details_card_present_offline.type | null;
};
export namespace payment_method_details_card_present_offline {
    /**
     * The method used to process this payment method offline. Only deferred is allowed.
     */
    export enum type {
        DEFERRED = 'deferred',
    }
}

