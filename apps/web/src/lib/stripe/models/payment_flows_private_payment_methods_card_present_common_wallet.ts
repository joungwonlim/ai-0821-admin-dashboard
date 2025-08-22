/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_flows_private_payment_methods_card_present_common_wallet = {
    /**
     * The type of mobile wallet, one of `apple_pay`, `google_pay`, `samsung_pay`, or `unknown`.
     */
    type: payment_flows_private_payment_methods_card_present_common_wallet.type;
};
export namespace payment_flows_private_payment_methods_card_present_common_wallet {
    /**
     * The type of mobile wallet, one of `apple_pay`, `google_pay`, `samsung_pay`, or `unknown`.
     */
    export enum type {
        APPLE_PAY = 'apple_pay',
        GOOGLE_PAY = 'google_pay',
        SAMSUNG_PAY = 'samsung_pay',
        UNKNOWN = 'unknown',
    }
}

