/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type payment_pages_checkout_session_payment_method_reuse_agreement = {
    /**
     * Determines the position and visibility of the payment method reuse agreement in the UI. When set to `auto`, Stripe's defaults will be used.
     *
     * When set to `hidden`, the payment method reuse agreement text will always be hidden in the UI.
     */
    position: payment_pages_checkout_session_payment_method_reuse_agreement.position;
};
export namespace payment_pages_checkout_session_payment_method_reuse_agreement {
    /**
     * Determines the position and visibility of the payment method reuse agreement in the UI. When set to `auto`, Stripe's defaults will be used.
     *
     * When set to `hidden`, the payment method reuse agreement text will always be hidden in the UI.
     */
    export enum position {
        AUTO = 'auto',
        HIDDEN = 'hidden',
    }
}

