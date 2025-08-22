/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_pages_checkout_session_saved_payment_method_options = {
    /**
     * Uses the `allow_redisplay` value of each saved payment method to filter the set presented to a returning customer. By default, only saved payment methods with ’allow_redisplay: ‘always’ are shown in Checkout.
     */
    allow_redisplay_filters?: Array<'always' | 'limited' | 'unspecified'> | null;
    /**
     * Enable customers to choose if they wish to remove their saved payment methods. Disabled by default.
     */
    payment_method_remove?: payment_pages_checkout_session_saved_payment_method_options.payment_method_remove | null;
    /**
     * Enable customers to choose if they wish to save their payment method for future use. Disabled by default.
     */
    payment_method_save?: payment_pages_checkout_session_saved_payment_method_options.payment_method_save | null;
};
export namespace payment_pages_checkout_session_saved_payment_method_options {
    /**
     * Enable customers to choose if they wish to remove their saved payment methods. Disabled by default.
     */
    export enum payment_method_remove {
        DISABLED = 'disabled',
        ENABLED = 'enabled',
    }
    /**
     * Enable customers to choose if they wish to save their payment method for future use. Disabled by default.
     */
    export enum payment_method_save {
        DISABLED = 'disabled',
        ENABLED = 'enabled',
    }
}

